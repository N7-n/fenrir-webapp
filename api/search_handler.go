package api

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"os"
	"io"
)

func HotPepperApi(name string, shopRange string, latitude string, longitude string, start string) string{

	queries := "&name=" + name + "&range=" + shopRange + "&lat=" + latitude + "&lng=" + longitude + "&start=" + start + "&format=json&count=5&type=lite"
	url := "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=" + os.Getenv("API_TOKEN") + queries
	//url := "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c14a9e3458a1cb8d" + queries

	res, _ := http.Get(url)

	body, _ :=io.ReadAll(res.Body)

	return string(string(body))
}

func SearchHandler(ctx *gin.Context) {
	name := ctx.Request.URL.Query().Get("name")
	shopRange := ctx.Request.URL.Query().Get("range")
	latitude := ctx.Request.URL.Query().Get("latitude")
	longitude := ctx.Request.URL.Query().Get("longitude")
	start := ctx.Request.URL.Query().Get("start")

	query := HotPepperApi(name, shopRange, latitude, longitude, start)
	http.Redirect(ctx.Writer, ctx.Request, "http://localhost:3000/result?result="+query+"&name="+name+"&range="+shopRange+"&lat="+latitude+"&lng="+longitude+"&start="+start, http.StatusFound)
}
