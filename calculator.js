document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

let results = [];

while (true) {

    let x = prompt("Enter first number (Cancel to stop):");
    if (x === null) break;

    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;

    let y = prompt("Enter second number:");
    if (y === null) break;

    let result;
    let valid = true;

    x = Number(x);
    y = Number(y);

    if (isNaN(x) || isNaN(y)) {
        result = "Error: Invalid number";
        valid = false;
    }
    else {
        switch (operator) {

            case "+":
                result = x + y;
                break;

            case "-":
                result = x - y;
                break;

            case "*":
                result = x * y;
                break;

            case "/":
                result = y !== 0 ? x / y : "Error: Divide by zero";
                if (y === 0) valid = false;
                break;

            case "%":
                result = x % y;
                break;

            default:
                result = "Error: Invalid operator";
                valid = false;
        }
    }

    document.write("<tr><td>" + x + "</td><td>" + operator +
        "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    if (valid && typeof result === "number") {
        results.push(result);
    }
}

document.write("</table>");

/* ---------- Summary Table ---------- */

if (results.length > 0) {

    let total = 0;
    let min = results[0];
    let max = results[0];

    for (let r of results) {
        total += r;
        if (r < min) min = r;
        if (r > max) max = r;
    }

    let avg = total / results.length;

    document.write("<h2>Summary</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max +
        "</td><td>" + avg.toFixed(2) +
        "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}
else {
    document.write("<p>No valid calculations entered.</p>");
}
