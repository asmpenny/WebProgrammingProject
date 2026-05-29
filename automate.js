const { exec } = require("child_process");
console.log("=== Running Product API Tests ===\n");

// Run products test
exec("node tests/products.test.js", (err, stdout, stderr) => {
    if (err) {
        console.log("Error running tests");
        console.log(stderr);
        return;
    }

    console.log(stdout);

    console.log("\n=== TEST SUMMARY COMPLETE ===");
});