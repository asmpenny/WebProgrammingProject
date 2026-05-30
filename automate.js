console.log("=== Running Product API Tests ===\n");

const { execSync } = require("child_process");
const testAlana = require("./tests/products.test");

async function runAllTests() {

    // Run tests sequentially
    await testAlana();
    execSync("npx jest product.test.js", {
        stdio: "inherit",
    });

    console.log("\n=== TEST SUMMARY COMPLETE ===");
}

runAllTests();


