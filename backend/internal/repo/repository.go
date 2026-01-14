package repo

type Repo struct {
	Address           AddressRepository
	Cart              CartRepository
	Category          CategoryRepository
	Order             OrderRepository
	Product           ProductRepository
	ProductByCategory ProductByCategoryRepository
	Productspecs      ProductspecsRepository
	GetCart           GetCartRepository
	GetOrder          GetOrderRepository
	DeleteCartItem    DeleteCartItemRepository
}
