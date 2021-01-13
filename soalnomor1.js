let angka = '';
for (let i = 1; i <= 7; i++) {
    angka += i;
    for (let j = 7; j > i; j--) {
        angka += 0;
    }

    angka += '\n';
}

console.log(angka);