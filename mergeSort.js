function merge(left, right) {
    let sortArr = [];
    let leftInd = 0;
    let rightInd = 0;

    while (leftInd < left.length && rightInd < right.length) {
        if (left[leftInd] < right[rightInd]) {
            sortArr.push(left[leftInd]);
            leftInd++;
        } else {
            sortArr.push(right[rightInd]);
            rightInd++;
        }
    }

    return sortArr.concat(left.slice(leftInd).concat(right.slice(rightInd)));
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    const half = Math.floor(array.length / 2);
    const leftArr = array.slice(0, half);
    const rightArr = array.slice(half);

    const leftMerge = mergeSort(leftArr);
    const rightMerge = mergeSort(rightArr);

    return merge(leftMerge, rightMerge);
}

console.log(mergeSort([4, 2, 9, 5, 3]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
