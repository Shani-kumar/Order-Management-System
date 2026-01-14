package models

type CartItemDetails struct {
	ProductName            string  `json:"product_name"`
	SKUID                  string  `json:"sku_id"`
	Grade                  string  `json:"grade"`
	Quantity               int     `json:"quantity"`
	CartItemID             int     `json:"id"`
	Price                  float64 `json:"price"`
	Discount               float32 `json:"discount"`
	NetWeight              float32 `json:"net_weight"`
	TotalPrice             float64 `json:"total_price"`
	ProductSpecificationId int     `json:"product_specification_id"`
	ImageUrl               string  `json:"image_url"`
}
