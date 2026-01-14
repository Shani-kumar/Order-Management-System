package repo

import (
	"backend/internal/models"
	"database/sql"
	"time"

	"gorm.io/gorm"
)

type OrderRepository struct {
	DB    *gorm.DB
	SqlDB *sql.DB
}

func (r *OrderRepository) CreateOrder(order *models.Order) error {
	db := r.SqlDB
	tx, err := db.Begin()
	if err != nil {
		return err
	}

	query := `INSERT INTO orders (cart_id, user_id, payment_method, shipping_address, billing_address, total_price, created_at)
			  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`

	err = tx.QueryRow(query, order.CartID, order.UserID, order.PaymentMethod, order.ShippingAddress, order.BillingAddress, order.TotalPrice, time.Now()).Scan(&order.ID)
	if err != nil {
		tx.Rollback()
		return err
	}

	deleteQuery := `DELETE FROM cart_items WHERE cart_id = $1`
	_, err = tx.Exec(deleteQuery, order.CartID)
	if err != nil {
		tx.Rollback()
		return err
	}

	err = tx.Commit()
	if err != nil {
		return err
	}

	return nil
}
