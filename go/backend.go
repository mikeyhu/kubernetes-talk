package main

import (
	"fmt"
	"net/http"
	"log"
)

func respondWithMessage(w http.ResponseWriter, r *http.Request) {
	name := "Welwyn"
	fmt.Fprintf(w, "Hello %s!", name)
}

func main() {
	http.HandleFunc("/message", respondWithMessage)
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

