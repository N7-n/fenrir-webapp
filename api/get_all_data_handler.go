package api

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"os"
	"io"
)

func HotPepperAllApi(id string) string{

	url := "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=" + os.Getenv("API_TOKEN") + "&id=" + id

	res, _ := http.Get(url)

	body, _ :=io.ReadAll(res.Body)

	return string(string(body))
}

func GetAllDataHandler(ctx *gin.Context) {
	id := ctx.Request.URL.Query().Get("id")

	result := HotPepperAllApi(id)
	ctx.JSON(200, gin.H{"a":result})
}
