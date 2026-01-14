package repo

import (
	"backend/internal/models"
	"database/sql"

	"gorm.io/gorm"
)

type ProductspecsRepository struct {
	DB    *gorm.DB
	SqlDB *sql.DB
}

func (r *ProductspecsRepository) GetProductSpecs(productID int) ([]models.ProductSpecs, error) {
	db := r.SqlDB
	var productSpecs []models.ProductSpecs

	query := `
		SELECT
			product_specifications.id,
			product_specifications.product_id,
			product_specifications.sku_id,
			product_specifications.grade,
			product_specifications.net_weight,
			product_specifications.stocks,
			product_specifications.discount,
			product_specifications.min_order_quantity,
			product_specifications.max_order_quantity,
			product_specifications.dimensions,
			product_specifications.price,
			products.description,
			products.country_of_origin,
			products.brand,
			products.product_name,
			products.sale,
			products.image_url
		FROM product_specifications
		JOIN products ON products.id = product_specifications.product_id
		WHERE product_specifications.product_id = $1
		order by product_specifications.price asc
	`
	rows, err := db.Query(query, productID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var productSpec models.ProductSpecs
		if err := rows.Scan(
			&productSpec.ID,
			&productSpec.ProductID,
			&productSpec.SKUID,
			&productSpec.Grade,
			&productSpec.NetWeight,
			&productSpec.Stocks,
			&productSpec.Discount,
			&productSpec.MinOrderQuantity,
			&productSpec.MaxOrderQuantity,
			&productSpec.Dimensions,
			&productSpec.Price,
			&productSpec.Description,
			&productSpec.CountryOfOrigin,
			&productSpec.Brand,
			&productSpec.Name,
			&productSpec.Sale,
			&productSpec.ImageUrl,
		); err != nil {
			return nil, err
		}
		productSpecs = append(productSpecs, productSpec)
	}

	return productSpecs, nil
}
