document.getElementById('factorial').addEventListener('click', function() {
    const n = parseInt(document.getElementById('numberInput').value);

    let factorial = 1;
    let i = n;
    while (i > 1) {
        factorial *= i;
        i--;
    }
    document.getElementById('factorialResult').innerText = `Factorial of ${n} is ${factorial}`;

    let sum = 0;
    let j = 1;
    do {
        sum += j;
        j++;
    } while (j <= n);
    document.getElementById('sumResult').innerText = `Sum of first ${n} numbers is ${sum}`;

    let total = 0;
    for (let k = 1; k <= n; k++) {
        total += k;
    }
    const average = total / n;
    document.getElementById('averageResult').innerText = `Average of first ${n} numbers is ${average}`;
});