package main

import (
	"backend/internal/database"
	"backend/internal/handler"
	"backend/internal/providers"
)

func main() {

	config, err := providers.LoadConfig()
	if err != nil {
		panic(err)
	}

	db, sqlDb, err := database.InitDB(config)
	if err != nil {
		panic(err)
	}

	userHandler := &handler.UserHandler{
		Db:    db,
		SqlDB: sqlDb,
	}
	userHandler.Init()
}
