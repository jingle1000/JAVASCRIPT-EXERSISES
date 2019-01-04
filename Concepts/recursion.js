
function lucasLister(n) {
    let lucasList = []
    for (let i = 0; i < n; i++) {
        lucasList.push(lucas(i));
    }
    return lucasList;
}

function lucas(n) {
    if (n == 0) {
        return 2;
    } else if (n == 1) {
        return 1;
    } else {
        return lucas(n-1) + lucas(n-2);
    }
}

console.log(lucasLister(22));
