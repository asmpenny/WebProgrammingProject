const https = require("https");
// School email address for test reporting
const email = "penn0179@algonquinlive.com";

// Test GET/ products to show all products
function testGetAll() {
    return new Promise((resolve) => {

        https.get("https://sweettreats-api.onrender.com/products", (res) => {
            let data = "";

            res.on("data", chunk => data += chunk);

            res.on("end", () => {
                const status = res.statusCode;

                console.log(
                    `${email} - getAll - ${status} - ` +
                    (status === 200 ? "PASSED" : "FAILED")
                );

                resolve();
            });

        }).on("error", (err) => {
            console.log(`${email} - getAll - ERROR - ${err.message}`);
            resolve();
        });
    });
}

//testGetAll();

module.exports = testGetAll;
