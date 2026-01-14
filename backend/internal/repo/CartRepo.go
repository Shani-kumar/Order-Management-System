package repo

import (
	"backend/internal/models"
	"database/sql"
	"log"

	"gorm.io/gorm"
)

type CartRepository struct {
	DB    *gorm.DB
	SqlDB *sql.DB
}

func (r *CartRepository) GetCartItemQuantity(cartID int, productSpecificationID int) (int, error) {

	db := r.DB
	var quantity int
	err := db.Model(&models.CartItem{}).
		Where("cart_id = ? AND product_specification_id = ?", cartID, productSpecificationID).
		Pluck("quantity", &quantity).Error

	if err != nil {
		log.Println("Error retrieving cart item quantity:", err)
		return 0, err
	}
	log.Printf("Retrieved quantity %d for cart_id %d and product_specification_id %d\n", quantity, cartID, productSpecificationID)
	return quantity, nil
}

func (r *CartRepository) UpdateCartItemQuantity(cartID int, productSpecificationID int, quantity int) error {
	db := r.DB
	err := db.Model(&models.CartItem{}).
		Where("cart_id = ? AND product_specification_id = ?", cartID, productSpecificationID).
		Update("quantity", quantity).Error

	if err != nil {
		log.Println("Error updating cart item quantity:", err)
	}
	return err
}

func (r *CartRepository) AddNewItemToCart(cartID int, productSpecificationID int, quantity int) error {
	db := r.DB
	cartItem := models.CartItem{
		CartID:                 cartID,
		ProductSpecificationID: productSpecificationID,
		Quantity:               quantity,
	}
	err := db.Create(&cartItem).Error
	if err != nil {
		log.Println("Error adding new item to cart:", err)
	}
	return err
}
