package models

import "time"

type Address struct {
	ID           int       `json:"id"`
	UserID       int       `json:"user_id"`
	AddressType  string    `json:"address_type"`
	City         string    `json:"city"`
	State        string    `json:"state"`
	ZipCode      string    `json:"zip_code"`
	Country      string    `json:"country"`
	Label        string    `json:"label"`
	AddressLine1 string    `json:"address_line1"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}
