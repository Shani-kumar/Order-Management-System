package server

import (
	"backend/internal/core"
	"backend/internal/models"
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"time"
)

type HttpServer struct {
	Core *core.Core
}

func (s *HttpServer) Init() {
	http.HandleFunc("/address/billing", s.GetBillingAddresses)
	http.HandleFunc("/address/shipping", s.GetShippingAddresses)
	http.HandleFunc("/categories", s.GetAllCategories)
	http.HandleFunc("/products", s.GetAllProducts)
	http.HandleFunc("/productspecs", s.GetProductSpecs)
	http.HandleFunc("/productbycategory", s.GetProductsByCategory)
	http.HandleFunc("/add-to-cart", s.AddToCart)
	http.HandleFunc("/getcart", s.GetCartItems)
	http.HandleFunc("/deletecartitem", s.DeleteCartItem)
	http.HandleFunc("/createorder", s.CreateOrder)
	http.HandleFunc("/getorders", s.GetAllOrders)

	log.Println("Starting server on port 5000...")
	err := http.ListenAndServe(":5000", nil)
	if err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}

func (s *HttpServer) GetBillingAddresses(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println("Recovered from panic in GetBillingAddresses: ", err)
		}
	}()
	addresses, err := s.Core.GetBillingAddresses()
	if err != nil {
		http.Error(w, "Error fetching billing addresses", http.StatusInternalServerError)
		log.Println("Error fetching billing addresses:", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(addresses)
}

func (s *HttpServer) GetShippingAddresses(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println("Recovered from panic in GetShippingAddresses: ", err)
		}
	}()
	addresses, err := s.Core.GetShippingAddresses()
	if err != nil {
		http.Error(w, "Error fetching shipping addresses", http.StatusInternalServerError)
		log.Println("Error fetching shipping addresses:", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(addresses)
}

func (s *HttpServer) GetAllCategories(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println("Recovered from panic in GetAllCategories: ", err)
		}
	}()
	categories, err := s.Core.GetAllCategories()
	if err != nil {
		http.Error(w, "Error fetching categories", http.StatusInternalServerError)
		log.Println("Error fetching categories:", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(categories)
}

func (s *HttpServer) GetAllProducts(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println("Recovered from panic in GetAllProducts: ", err)
		}
	}()
	products, err := s.Core.GetAllProducts()
	if err != nil {
		http.Error(w, "Error fetching products", http.StatusInternalServerError)
		log.Println("Error fetching products:", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}

func (s *HttpServer) GetProductSpecs(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println("Recovered from panic in GetProductSpecs: ", err)
		}
	}()

	productID, err := s.Core.GetProductIDFromRequest(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	productSpecs, err := s.Core.GetProductSpecs(productID)
	if err != nil {
		http.Error(w, "Error fetching product specifications", http.StatusInternalServerError)
		log.Println("Error fetching product specifications:", err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(productSpecs)
}

func (s *HttpServer) GetProductsByCategory(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println("Recovered from panic in GetProductsByCategory: ", err)
		}
	}()
	categoryIDParam := r.URL.Query().Get("category_id")
	if categoryIDParam == "" {
		http.Error(w, "category_id is required", http.StatusBadRequest)
		return
	}
	categoryID, err := strconv.Atoi(categoryIDParam)
	if err != nil {
		http.Error(w, "Invalid category_id", http.StatusBadRequest)
		return
	}
	products, err := s.Core.GetProductsByCategory(categoryID)
	if err != nil {
		http.Error(w, "Error fetching products by category", http.StatusInternalServerError)
		log.Println("Error fetching products by category:", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}

func (s *HttpServer) AddToCart(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println("Recovered from panic in AddToCart: ", err)
		}
	}()
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	var item models.CartItem
	err := json.NewDecoder(r.Body).Decode(&item)
	if err != nil {
		http.Error(w, "Invalid JSON data", http.StatusBadRequest)
		log.Println("Error decoding JSON:", err)
		return
	}
	existingQuantity, err := s.Core.GetCartItemQuantity(item.CartID, item.ProductSpecificationID)
	if err != nil && err.Error() != "record not found" {
		http.Error(w, "Failed to check item quantity", http.StatusInternalServerError)
		log.Println("Database query error:", err)
		return
	}
	if existingQuantity > 0 {
		newQuantity := existingQuantity + item.Quantity
		err = s.Core.UpdateCartItemQuantity(item.CartID, item.ProductSpecificationID, newQuantity)
		if err != nil {
			http.Error(w, "Failed to update item quantity in cart", http.StatusInternalServerError)
			log.Println("Database update error:", err)
			return
		}
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Item quantity updated in cart successfully"))
		return
	}
	err = s.Core.AddNewItemToCart(item.CartID, item.ProductSpecificationID, item.Quantity)
	if err != nil {
		http.Error(w, "Failed to add item to cart", http.StatusInternalServerError)
		log.Println("Database insert error:", err)
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Item added to cart successfully"))
}

func (s *HttpServer) GetCartItems(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println("Recovered from panic in GetCartItems: ", err)
		}
	}()

	cartIDStr := r.URL.Query().Get("cart_id")
	if cartIDStr == "" {
		http.Error(w, "Cart ID is required", http.StatusBadRequest)
		return
	}
	cartID, err := strconv.Atoi(cartIDStr)
	if err != nil {
		http.Error(w, "Invalid Cart ID format", http.StatusBadRequest)
		return
	}
	cartItems, err := s.Core.FetchCartItems(cartID)
	if err != nil {
		http.Error(w, "Failed to retrieve cart items", http.StatusInternalServerError)
		log.Println("Database query error:", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(cartItems)
}

func (s *HttpServer) CreateOrder(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println("Recovered from panic in CreateOrder: ", err)
		}
	}()
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	var order models.Order
	err := json.NewDecoder(r.Body).Decode(&order)
	if err != nil {
		http.Error(w, "Invalid JSON data", http.StatusBadRequest)
		log.Println("Error decoding JSON:", err)
		return
	}
	order.CreatedAt = time.Now()
	err = s.Core.CreateOrder(&order)
	if err != nil {
		http.Error(w, "Failed to create order", http.StatusInternalServerError)
		log.Println("Error creating order:", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]interface{}{
		"message":  "Order created successfully",
		"order_id": order.ID,
	})
}

func (s *HttpServer) GetAllOrders(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println("Recovered from panic in GetAllOrders: ", err)
		}
	}()
	orders, err := s.Core.GetAllOrders()
	if err != nil {
		http.Error(w, "Error fetching orders", http.StatusInternalServerError)
		log.Println("Error fetching orders:", err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(orders)
}

func (s *HttpServer) DeleteCartItem(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println("Recovered from panic in DeleteCartItem: ", err)
		}
	}()
	if r.Method != http.MethodDelete {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	cartItemIDStr := r.URL.Query().Get("id")
	if cartItemIDStr == "" {
		http.Error(w, "Cart item ID is required", http.StatusBadRequest)
		return
	}
	cartItemID, err := strconv.Atoi(cartItemIDStr)
	if err != nil {
		http.Error(w, "Invalid cart item ID", http.StatusBadRequest)
		return
	}
	err = s.Core.DeleteCartItem(cartItemID)
	if err != nil {
		http.Error(w, "Failed to delete cart item", http.StatusInternalServerError)
		log.Println("Database delete error:", err)
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Item deleted from cart successfully"))
}
