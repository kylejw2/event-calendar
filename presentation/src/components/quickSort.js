const quickSort = (arr) => {
    if (arr.length < 2) { return arr; }
    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (+pivot.time.substr(0, 2) > +arr[i].time.substr(0, 2)) {
            leftArr.push(arr[i]);
        } else if (+pivot.time.substr(0, 2) < +arr[i].time.substr(0, 2)) {
            rightArr.push(arr[i]);
        } else if (+pivot.time.substr(3, 2) >= +arr[i].time.substr(3, 2)) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    } else if (leftArr.length > 0) {
        return [...quickSort(leftArr), pivot];
    } else {
        return [pivot, ...quickSort(rightArr)];
    }
}

export default quickSort;