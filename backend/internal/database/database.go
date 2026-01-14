package database

import (
	"backend/internal/providers"
	"database/sql"
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitDB(config *providers.AppConfig) (*gorm.DB, *sql.DB, error) {
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%d sslmode=disable",
		config.DbConfig.Host,
		config.DbConfig.User,
		config.DbConfig.Password,
		config.DbConfig.Name,
		config.DbConfig.Port,
	)

	gormDB, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, nil, err
	}

	sqlDB, err := gormDB.DB()
	if err != nil {
		return nil, nil, err
	}

	log.Println("Connected to the database!")
	return gormDB, sqlDB, err
}
