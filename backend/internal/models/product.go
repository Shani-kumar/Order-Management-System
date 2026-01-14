package models

import (
	"time"
)

type Product struct {
	ID              int       `json:"id"`
	Name            string    `json:"product_name"`
	Description     string    `json:"description"`
	CategoryId      int       `json:"category_id"`
	CountryOfOrigin string    `json:"country_of_origin"`
	Brand           string    `json:"brand"`
	Sale            bool      `json:"sale"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
	Price           float64   `json:"price"`
	Discount        float32   `json:"discount"`
	SpecID          int       `json:"productspecs_id"`
	ImageUrl        string    `json:"image_url"`
}
