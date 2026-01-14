package repo

import (
	"backend/internal/models"
	"database/sql"

	"gorm.io/gorm"
)

type AddressRepository struct {
	DB    *gorm.DB
	SqlDB *sql.DB
}

func (r *AddressRepository) GetShippingAddresses() ([]models.Address, error) {
	db := r.DB
	var addresses []models.Address

	if err := db.Where("address_type = ?", "shipping").Find(&addresses).Error; err != nil {
		return nil, err
	}

	return addresses, nil
}

func (r *AddressRepository) GetBillingAddresses() ([]models.Address, error) {
	db := r.DB
	var addresses []models.Address

	if err := db.Where("address_type = ?", "billing").Find(&addresses).Error; err != nil {
		return nil, err
	}

	return addresses, nil
}
