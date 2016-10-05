package main

import (
	"net/http"
	"log"
	"encoding/json"
	"os"
)

type Response struct {
	Message string `json:"message"`
	Source  string `json:"source"`
}

func respondWithGreeting(w http.ResponseWriter, r *http.Request) {
	hostname, _ := os.Hostname()
	response := &Response{Message: "Hello World!", Source: hostname}
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/greeting", respondWithGreeting)
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

