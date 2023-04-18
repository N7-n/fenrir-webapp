package api

import (
	"github.com/gin-gonic/gin"
	"log"
)

func IndexHandler(ctx *gin.Context) {
	log.Print("success")

	ctx.HTML(200,"index.html", nil)
}