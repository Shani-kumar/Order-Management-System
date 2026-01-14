package models

type ProductSpecs struct {
	ID               int     `json:"id"`
	ProductID        int     `json:"product_id"`
	SKUID            string  `json:"sku_id"`
	Grade            string  `json:"grade"`
	NetWeight        float64 `json:"net_weight"`
	Stocks           int     `json:"stocks"`
	Discount         float32 `json:"discount"`
	MinOrderQuantity int     `json:"min_order_quantitiy"`
	MaxOrderQuantity int     `json:"max_order_quantitiy"`
	Dimensions       string  `json:"dimensions"`
	Price            float64 `json:"price"`
	Name             string  `json:"product_name"`
	CountryOfOrigin  string  `json:"country_of_origin"`
	Sale             bool    `json:"sale"`
	Brand            string  `json:"brand"`
	Description      string  `json:"description"`
	ImageUrl         string  `json:"image_url"`
}
