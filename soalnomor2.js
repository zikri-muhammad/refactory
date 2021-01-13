let arr1 = [
    1, 2, 33, 44, 55, 33, 44,
]
let arr2 = [
    22, 44, 33, 2, 77, 66, 1, 2, 3, 4, 5, 6, 7
]

let arr3 = [
    89, 3, 3, 8, 9, 75, 4, 3, 2, 2, 1, 3
]

// Bagi data tersebut menjadi 3 kelompok

// Tampilkan data setiap kelompok secara terurut dari besar ke kecil
console.log(arr1.sort());
console.log(arr2.sort());
console.log(arr3.sort());
// Hitung total setiap kelompok data,
var totalArr1 = 0;
for (i = 0; i < arr1.length; i++) {
    totalArr1 += arr1[i];
}

console.log(totalArr1)

var totalArr2 = 0;
for (i = 0; i < arr2.length; i++) {
    totalArr2 += arr2[i];
}

console.log(totalArr2)

var totalArr3 = 0;
for (i = 0; i < arr3.length; i++) {
    totalArr3 += arr3[i];
}
console.log(totalArr3)
// Carilah nilai tertinggi dan terendah setiap kelompok data
var maxArr1 = Math.max(...arr1);
console.log(maxArr1)
var minArr1 = Math.min(...arr1);
console.log(minArr1)


var maxArr2 = Math.max(...arr2);
console.log(maxArr2)
var minArr2 = Math.min(...arr2);
console.log(minArr2)


var maxArr3 = Math.max(...arr3);
console.log(maxArr3)
var minArr3 = Math.min(...arr3);
console.log(minArr3)
// console.log(filteredArray);