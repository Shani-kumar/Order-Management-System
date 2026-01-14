package handler

import (
	"backend/internal/core"
	"backend/internal/repo"
	"backend/internal/server"
	"database/sql"

	"gorm.io/gorm"
)

type UserHandler struct {
	Db    *gorm.DB
	SqlDB *sql.DB
	Core  core.Core
	Repo  repo.Repo
}

func (uh *UserHandler) Init() {
	AddressRepo := repo.AddressRepository{
		DB:    uh.Db,
		SqlDB: uh.SqlDB,
	}

	CartRepo := repo.CartRepository{
		DB:    uh.Db,
		SqlDB: uh.SqlDB,
	}
	CategoryRepo := repo.CategoryRepository{
		DB:    uh.Db,
		SqlDB: uh.SqlDB,
	}
	ProductRepo := repo.ProductRepository{
		DB:    uh.Db,
		SqlDB: uh.SqlDB,
	}
	ProductspecRepo := repo.ProductspecsRepository{
		DB:    uh.Db,
		SqlDB: uh.SqlDB,
	}
	ProductByCategoryRepo := repo.ProductByCategoryRepository{
		DB:    uh.Db,
		SqlDB: uh.SqlDB,
	}
	GetCartRepo := repo.GetCartRepository{
		DB:    uh.Db,
		SqlDB: uh.SqlDB,
	}
	OrderRepo := repo.OrderRepository{
		DB:    uh.Db,
		SqlDB: uh.SqlDB,
	}
	GetOrderRepo := repo.GetOrderRepository{
		DB:    uh.Db,
		SqlDB: uh.SqlDB,
	}
	DeleteCartItemRepo := repo.DeleteCartItemRepository{
		DB:    uh.Db,
		SqlDB: uh.SqlDB,
	}

	uh.Repo = repo.Repo{
		Address:           AddressRepo,
		Cart:              CartRepo,
		Category:          CategoryRepo,
		Product:           ProductRepo,
		Productspecs:      ProductspecRepo,
		ProductByCategory: ProductByCategoryRepo,
		GetCart:           GetCartRepo,
		GetOrder:          GetOrderRepo,
		Order:             OrderRepo,
		DeleteCartItem:    DeleteCartItemRepo,
	}
	uh.Core = core.Core{
		DB:   uh.Db,
		Repo: &uh.Repo,
	}

	httpServer := server.HttpServer{
		Core: &uh.Core,
	}

	httpServer.Init()
}
