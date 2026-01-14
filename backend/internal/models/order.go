package models

import "time"

type Order struct {
	ID              int       `json:"id"`
	CartID          int       `json:"cart_id"`
	UserID          int       `json:"user_id"`
	PaymentMethod   string    `json:"payment_method"`
	ShippingAddress int       `json:"shipping_address"`
	BillingAddress  int       `json:"billing_address"`
	TotalPrice      float64   `json:"total_price"`
	CreatedAt       time.Time `json:"created_at"`
}
