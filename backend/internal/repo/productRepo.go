package repo

import (
	"backend/internal/models"
	"database/sql"

	"gorm.io/gorm"
)

type ProductRepository struct {
	DB    *gorm.DB
	SqlDB *sql.DB
}

func (r *ProductRepository) GetAllProducts() ([]models.Product, error) {
	db := r.SqlDB
	var products []models.Product

	query := `

	SELECT
		p.id, p.product_name, p.description, p.category_id,
		p.country_of_origin, p.brand, p.sale,
		p.created_at, p.updated_at,
		ps.spec_id, ps.price, ps.discount,p.image_url
	FROM products p
	JOIN (
		SELECT
			product_id, id AS spec_id, price, discount
		FROM product_specifications
		WHERE (product_id, price) IN (
			SELECT product_id, MIN(price)
			FROM product_specifications
			GROUP BY product_id
		)
	) AS ps ON p.id = ps.product_id
	ORDER BY p.id ASC
`

	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var product models.Product
		if err := rows.Scan(
			&product.ID,
			&product.Name,
			&product.Description,
			&product.CategoryId,
			&product.CountryOfOrigin,
			&product.Brand,
			&product.Sale,
			&product.CreatedAt,
			&product.UpdatedAt,
			&product.SpecID,
			&product.Price,
			&product.Discount,
			&product.ImageUrl,
		); err != nil {
			return nil, err
		}
		products = append(products, product)
	}

	return products, nil
}
