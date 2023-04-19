package dynamodb

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/guregu/dynamo"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"os"
	"log"
)

type Store struct {
	StoreId string
	Access   int
}

func New() (*dynamo.DB, error) {

	sess, err := session.NewSession(&aws.Config{
		Region: aws.String("ap-northeast-1"),
		Endpoint: aws.String(os.Getenv("DYNAMO_ENDPOINT")),
		Credentials: credentials.NewStaticCredentials("dummy", "dummy", "dummy"),
	})
	if err != nil {
		return nil, err
	}

	db := dynamo.New(sess)
	
	return db, nil
}

func GetStore(storeId string) (string, int, error) {
	db, err := New()
	if err != nil {
		log.Fatal(err)
	}

	table := db.Table("StoreTable")

	var store Store

	err = table.Get("StoreId", storeId).One(&store)
	if err != nil {
		return store.StoreId, store.Access, err
	}

	return store.StoreId, store.Access, err
}

func SetStore(storeId string, access int) {
	db, err := New()
	if err != nil {
		log.Fatal(err)
	}

	table := db.Table("StoreTable")

	err = table.Put(&Store{StoreId: storeId, Access: access}).Run()
	if err != nil {
		log.Fatal(err)
	}
}
