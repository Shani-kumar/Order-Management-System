package core

import (
	"backend/internal/models"
	"backend/internal/repo"
	"database/sql"
	"fmt"
	"net/http"
	"strconv"

	"gorm.io/gorm"
)

type Core struct {
	DB    *gorm.DB
	sqlDB *sql.DB
	Repo  *repo.Repo
}

func (c *Core) GetShippingAddresses() ([]models.Address, error) {
	return c.Repo.Address.GetShippingAddresses()
}

func (c *Core) GetBillingAddresses() ([]models.Address, error) {
	return c.Repo.Address.GetBillingAddresses()
}

func (c *Core) GetAllCategories() ([]models.Category, error) {
	return c.Repo.Category.GetAllCategories()
}

func (c *Core) GetAllProducts() ([]models.Product, error) {
	return c.Repo.Product.GetAllProducts()
}

func (c *Core) GetProductIDFromRequest(r *http.Request) (int, error) {
	productIDParam := r.URL.Query().Get("product_id")
	if productIDParam == "" {
		return 0, fmt.Errorf("product_id is required")
	}

	productID, err := strconv.Atoi(productIDParam)
	if err != nil {
		return 0, fmt.Errorf("invalid product_id")
	}

	return productID, nil
}

func (c *Core) GetProductSpecs(productID int) ([]models.ProductSpecs, error) {

	return c.Repo.Productspecs.GetProductSpecs(productID)
}

func (c *Core) GetProductsByCategory(categoryID int) ([]models.ProductByCategory, error) {
	return c.Repo.ProductByCategory.GetProductsByCategory(categoryID)
}

func (c *Core) GetCartItemQuantity(cartID int, ProductSpecificationID int) (int, error) {
	return c.Repo.Cart.GetCartItemQuantity(cartID, ProductSpecificationID)
}

func (c *Core) UpdateCartItemQuantity(cartID int, ProductSpecificationID int, newquantity int) error {
	return c.Repo.Cart.UpdateCartItemQuantity(cartID, ProductSpecificationID, newquantity)
}

func (c *Core) AddNewItemToCart(CartID int, ProductSpecificationID int, Quantity int) error {
	return c.Repo.Cart.AddNewItemToCart(CartID, ProductSpecificationID, Quantity)
}

func (c *Core) FetchCartItems(cartID int) ([]models.CartItemDetails, error) {
	return c.Repo.GetCart.FetchCartItems(cartID)
}

func (c *Core) CreateOrder(order *models.Order) error {
	return c.Repo.Order.CreateOrder(order)
}

func (c *Core) GetAllOrders() ([]models.Order, error) {
	return c.Repo.GetOrder.GetAllOrders()
}

func (c *Core) DeleteCartItem(cartItemID int) error {
	return c.Repo.DeleteCartItem.DeleteCartItem(cartItemID)
}
