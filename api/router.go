package api

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

func Router() {
	router := gin.Default()

	router.Use(cors.Default())
	
	router.GET("/", func(ctx *gin.Context){
		SearchHandler(ctx)
	})

	router.GET("/all", func(ctx *gin.Context){
		GetAllDataHandler(ctx)
	})

	router.Run()
}
