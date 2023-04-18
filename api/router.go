package api

import (
	"github.com/gin-gonic/gin"
)

func Router() {
	router := gin.Default()

	router.LoadHTMLGlob("../api/web/*.html")
	router.Static("/web","../api/web/")

	router.GET("/", func(ctx *gin.Context){
		IndexHandler(ctx)
	})

	router.Run()
}