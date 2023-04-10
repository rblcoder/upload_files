
var URL = "http://127.0.0.1:8000";

if (window.location.origin === "http://localhost:3000") {
  URL = "http://127.0.0.1:8000";
} else {
  URL = window.location.origin;
}

const baseURL = URL;
export  { baseURL };