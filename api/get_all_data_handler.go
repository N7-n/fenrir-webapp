package api

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"fenrir-webapp/api/dynamodb"
	"os"
	"io"
	"log"
)

func HotPepperAllApi(id string) string{

	url := "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=" + os.Getenv("API_TOKEN") + "&format=json&id=" + id

	res, _ := http.Get(url)

	body, _ :=io.ReadAll(res.Body)

	return string(string(body))
}

func GetAllDataHandler(ctx *gin.Context) {
	id := ctx.Request.URL.Query().Get("id")

	result := HotPepperAllApi(id)
	log.Print(result)

	_, access, err := dynamodb.GetStore(id)

	log.Print(access)

	if err != nil{
		dynamodb.SetStore(id, 1)
		ctx.JSON(200, gin.H{"result":result, "access":1})
	}else{
		dynamodb.SetStore(id, access + 1)
		ctx.JSON(200, gin.H{"result":result, "access":access+1})
	}
}
