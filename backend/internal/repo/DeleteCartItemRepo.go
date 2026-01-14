package repo

import (
	"backend/internal/models"
	"database/sql"
	"log"

	"gorm.io/gorm"
)

type DeleteCartItemRepository struct {
	DB    *gorm.DB
	SqlDB *sql.DB
}

func (r *DeleteCartItemRepository) DeleteCartItem(cartItemID int) error {
	db := r.DB
	err := db.Where("id = ?", cartItemID).Delete(&models.CartItem{}).Error
	if err != nil {
		log.Println(err)
		return err
	}

	return nil
}
