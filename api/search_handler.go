package api

import (
	"net/http"
	"github.com/gin-gonic/gin"
	//"os"
	"io"
)
// type Shop struct {
// 	Access  string `json:"access"`
// 	Address  string `json:"address"`
// 	BudgetMemo  string `json:"budget_memo"`
// 	Catch     string    `json:"catch"`
// 	Food     string    `json:"food"`
// 	Genre struct {
// 		Catch  string `json:"catch"`
// 		Name     string    `json:"name"`
// 	}`json:"genre"`
// 	Id string    `json:"id"`
// 	Lat     string    `json:"lat"`
// 	Lng  string `json:"lng"`
// 	Name     string    `json:"name"`
// 	OtherMemo     string    `json:"other_memo"`
// 	Photo struct {
// 		Pc struct {
// 			L     string    `json:"l"`
// 			M     string    `json:"m"`
// 			S     string    `json:"s"`
// 		}`json:"pc"`
// 	}`json:"photo"`
// 	ShopDetailMemo string `json:"shop_detail_memo"`
// 	Urls struct {
// 		Pc     string    `json:"pc"`
// 	}`json:"urls"`
// }

// type Data struct {
// 	Result struct {
// 		ApiVersion string    `json:"api_version"`
// 		ResultsAvailable     string    `json:"results_available"`
// 		ResultsReturned  string `json:"results_returned"`
// 		ResultsStart   string `json:"results_start"`
// 		Shops []Shop `json:"shop"`
// 	}`json:"results"`
// }

func HotPepperApi(name string, shopRange string, latitude string, longitude string) string{
	//https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c14a9e3458a1cb8d&lat=35&lng=139&range=5&format=json
//http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c14a9e3458a1cb8d&name="焼き鳥"
	queries := "&name=" + name + "&range=" + shopRange + "&lat=" + latitude + "&lng=" + longitude + "&format=json&count=5&type=lite"
	//url := "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=" + os.Getenv("API_TOKEN") + queries
	url := "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c14a9e3458a1cb8d" + queries

	res, _ := http.Get(url)

	body, _ :=io.ReadAll(res.Body)

	return string(string(body))
}

func SearchHandler(ctx *gin.Context) {
	name := ctx.Request.URL.Query().Get("name")
	shopRange := ctx.Request.URL.Query().Get("range")
	latitude := ctx.Request.URL.Query().Get("latitude")
	longitude := ctx.Request.URL.Query().Get("longitude")

	query := HotPepperApi(name, shopRange, latitude, longitude)
	http.Redirect(ctx.Writer, ctx.Request, "http://localhost:3000/result?result="+query, http.StatusFound)
}
