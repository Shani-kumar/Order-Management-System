package repo

import (
	"backend/internal/models"
	"database/sql"

	"gorm.io/gorm"
)

type GetCartRepository struct {
	DB    *gorm.DB
	SqlDB *sql.DB
}

func (r *GetCartRepository) FetchCartItems(cartID int) ([]models.CartItemDetails, error) {
	db := r.SqlDB

	query := `
		SELECT
			p.product_name, ps.sku_id, ps.grade, ci.quantity, ci.id,
			ps.price, ps.discount, ps.net_weight,
			(ci.quantity * ps.price) AS total_price, ci.product_specification_id,p.image_url
		FROM
			cart_items ci
		INNER JOIN
			product_specifications ps ON ci.product_specification_id = ps.id
		INNER JOIN
			products p ON ps.product_id = p.id
		WHERE
			ci.cart_id = $1
	`

	rows, err := db.Query(query, cartID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var cartItems []models.CartItemDetails
	for rows.Next() {
		var item models.CartItemDetails
		if err := rows.Scan(&item.ProductName, &item.SKUID, &item.Grade, &item.Quantity, &item.CartItemID, &item.Price, &item.Discount, &item.NetWeight, &item.TotalPrice, &item.ProductSpecificationId, &item.ImageUrl); err != nil {
			return nil, err
		}
		cartItems = append(cartItems, item)
	}

	return cartItems, nil
}
