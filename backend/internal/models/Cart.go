package models

type CartItem struct {
	CartID                 int `json:"cart_id" gorm:"column:cart_id"`
	ProductSpecificationID int `json:"product_specification_id" gorm:"column:product_specification_id"`
	Quantity               int `json:"quantity" gorm:"column:quantity"`
}
