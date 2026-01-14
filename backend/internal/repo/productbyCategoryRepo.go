package repo

import (
	"backend/internal/models"
	"database/sql"

	"gorm.io/gorm"
)

type ProductByCategoryRepository struct {
	DB    *gorm.DB
	SqlDB *sql.DB
}

func (r *ProductByCategoryRepository) GetProductsByCategory(categoryID int) ([]models.ProductByCategory, error) {
	db := r.DB
	var products []models.ProductByCategory

	err := db.Table("categories").
		Select(`
			categories.id AS category_id,
			categories.name AS category_name,
			p.id AS product_id,
			p.product_name as name,
			p.description,
			p.country_of_origin,
			p.brand,
			p.sale,
			p.created_at,
			p.updated_at,
			ps.price,
			ps.discount,
			ps.spec_id,
			p.image_url`).
		Joins("JOIN products p ON categories.id = p.category_id").
		Joins(`
			JOIN (
				SELECT
					product_id,
					id AS spec_id,
					price,
					discount
				FROM product_specifications as ps
				WHERE (product_id, price) IN (
					SELECT product_id, MIN(price)
					FROM product_specifications
					GROUP BY product_id
				)
			) AS ps ON p.id = ps.product_id`).
		Where("categories.id = ?", categoryID).
		Scan(&products).Error

	if err != nil {
		return nil, err
	}

	return products, nil
}
