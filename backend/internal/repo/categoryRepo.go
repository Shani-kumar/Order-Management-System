package repo

import (
	"backend/internal/models"
	"database/sql"

	"gorm.io/gorm"
)

type CategoryRepository struct {
	DB    *gorm.DB
	SqlDB *sql.DB
}

func (r *CategoryRepository) GetAllCategories() ([]models.Category, error) {
	db := r.DB
	var categories []models.Category

	if err := db.Find(&categories).Error; err != nil {
		return nil, err
	}

	return categories, nil
}
