function fibs(n) {
    let array = [];

    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            array.push(i);
        } else {
            let n1 = array[i - 1];
            let n2 = array[i - 2];
            array.push(n1 + n2);
        }
    }

    return array;
}

function fibsRec(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let newArr = fibsRec(n - 1);
        newArr.push(newArr[newArr.length - 1] + newArr[newArr.length - 2]);
        return newArr;
    }
}

let testNum = 15;

console.log(fibs(testNum));
console.log(fibsRec(testNum));
