package api

import (
	"fmt"
	"net/http"
)

func Babel(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World!\n")
}
