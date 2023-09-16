// So sánh 2 từ
const compareWords = (word1, word2) => {
    word1.toLowerCase();
    word2.toLowerCase();
    if (word1 < word2) {
        return true;
    }
    return false;
}

// Sắp xếp nổi bọt
const bubbleSort = (arr, n) => {
    let i, j;
    let temp = "";
    let swapped = false;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (compareWords(arr[j + 1], arr[j])) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped === false)
            break;
    }
    return arr
}

// Sắp xếp chèn
const insertionSort = (arr) => {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0
            && compareWords(key, arr[j])) {

            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr
}

// Sắp xếp chọn
const selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++)
            if (compareWords(
                arr[j], arr[min_idx]))
                min_idx = j;
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
    return arr
}

// Sắp xếp trộn
const merge = (Arr1, Arr2) => {
    let m = Arr1.length;
    let n = Arr2.length;
    let Arr3 = [];

    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (compareWords(Arr1[i], Arr2[j]) === true) {
            Arr3.push(Arr1[i]);
            i++;
        }
        else {
            Arr3.push(Arr2[j]);
            j++;
        }
    }
    while (i < m) {
        Arr3.push(Arr1[i]);
        i++;
    }
    while (j < n) {
        Arr3.push(Arr2[j]);
        j++;
    }
    return Arr3;
}

const mergeSort = (Arr, lo, hi) => {
    if (lo >= hi) {
        let A = [Arr[lo]];
        return A;
    }
    let mid = lo + (hi - lo) / 2;
    mid = Math.round(mid - 0.5);
    let arr1 = mergeSort(Arr, lo, mid);
    let arr2 = mergeSort(Arr, mid + 1, hi);

    let arr3 = merge(arr1, arr2);
    return arr3;
}

export { bubbleSort, selectionSort, insertionSort, mergeSort }