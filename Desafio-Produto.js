// Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.

// Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.

function produto(umArray) {
    var produto = 0;
    const total = umArray.length;
    for (let x = 0; x < total; x++) {
        if (x == 0) {
            produto = umArray[x];
        } else {
            produto = produto * umArray[x];
        }
    }
    return produto;
}

document.write(produto([1, 4, 7])); // deve retornar 28
document.write("<br>");
document.write(produto([1, 2, 7]));
document.write("<br>");
document.write(produto([10, 10]));
document.write("<br>");
document.write(produto([10]));
document.write("<br>");
document.write(produto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
document.write("<br>");
