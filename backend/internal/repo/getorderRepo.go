package repo

import (
	"backend/internal/models"
	"database/sql"

	"gorm.io/gorm"
)

type GetOrderRepository struct {
	DB    *gorm.DB
	SqlDB *sql.DB
}

func (r *GetOrderRepository) GetAllOrders() ([]models.Order, error) {
	var orders []models.Order
	db := r.DB

	err := db.Order("id desc").Find(&orders).Error
	if err != nil {
		return nil, err
	}

	return orders, nil
}
