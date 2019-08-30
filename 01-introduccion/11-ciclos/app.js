for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }

    console.log(`El valor del index es ${i}`);
}

console.log("");

let i = 1;

while (i <= 10) {
    if (i == 5) {
        i++;
        continue;
    }
    console.log(`El valor del index es ${i}`);
    i++;
}