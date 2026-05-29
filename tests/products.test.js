const http = require("http");

// School email address
const email = "penn0179@algonquinlive.com";

// Test GET /products
function testGetAll() {
    return new Promise((resolve) => {
        http.get("http://localhost:3000/products", (res) => {
            let data = "";

            res.on("data", (chunk) => {
                data += chunk;
            });

            res.on("end", () => {
                const status = res.statusCode;
                console.log(`${email} - GET /products - ${status} - ` + (status === 200 ? "PASSED" : "FAILED"));
                resolve();
            });
        }).on("error", (err) => {
            console.log(`${email} - GET /products - ERROR - ${err.message}`);
            resolve();
        });
    });
}

testGetAll();