// Validasi input
function validateInput(value) {
    return !isNaN(value) && value > 0;
}

function calculateVolume() {
    const shape = document.getElementById("shape").value;
    const side = parseFloat(document.getElementById("side").value);

    if (!validateInput(side)) {
        document.getElementById("volumeResult").textContent = "Masukkan panjang sisi yang valid.";
        return;
    }

    let result = 0;

    switch (shape) {
        case "kubus":
            result = side ** 3;
            break;
        case "balok":
            const height = parseFloat(prompt("Masukkan tinggi balok (cm):"));
            if (!isNaN(height) && height > 0) {
                result = side * side * height;
            } else {
                document.getElementById("volumeResult").textContent = "Masukkan tinggi balok yang valid.";
                return;
            }
            break;
        case "tabung":
            const radius = parseFloat(prompt("Masukkan jari-jari tabung (cm):"));
            const heightTabung = parseFloat(prompt("Masukkan tinggi tabung (cm):"));
            if (!isNaN(radius) && radius > 0 && !isNaN(heightTabung) && heightTabung > 0) {
                result = Math.PI * radius ** 2 * heightTabung;
            } else {
                document.getElementById("volumeResult").textContent = "Masukkan jari-jari dan tinggi tabung yang valid.";
                return;
            }
            break;
        case "bola":
            result = (4 / 3) * Math.PI * side ** 3;
            break;
        case "kerucut":
            const radiusKerucut = parseFloat(prompt("Masukkan jari-jari kerucut (cm):"));
            const heightKerucut = parseFloat(prompt("Masukkan tinggi kerucut (cm):"));
            if (!isNaN(radiusKerucut) && radiusKerucut > 0 && !isNaN(heightKerucut) && heightKerucut > 0) {
                result = (1 / 3) * Math.PI * radiusKerucut ** 2 * heightKerucut;
            } else {
                document.getElementById("volumeResult").textContent = "Masukkan jari-jari dan tinggi kerucut yang valid.";
                return;
            }
            break;
        default:
            document.getElementById("volumeResult").textContent = "Pilih jenis bangun ruang yang valid.";
            return;
    }

    document.getElementById("volumeResult").textContent = `Volume ${shape}: ${result.toFixed(2)} cm³`;
}

function calculateFibonacci() {
    const n = parseInt(document.getElementById("fibonacciInput").value);

    if (n < 0) {
        document.getElementById("fibonacciResult").textContent = "Masukkan bilangan bulat positif.";
    } else {
        const result = fibonacci(n);
        document.getElementById("fibonacciResult").textContent = `Fibonacci ke-${n}: ${result}`;
    }
}

// Fibonacci dengan memoization
function fibonacci(n, memo = {}) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    if (memo[n]) {
        return memo[n];
    }

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
