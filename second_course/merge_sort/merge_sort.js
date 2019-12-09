function merge(x, y){
    merged_arrays = x.concat(y);

    if(merged_arrays.length <= 1){
        return merged_arrays;
    }

    const middle = Math.floor(merged_arrays.length / 2);

    const left = merged_arrays.slice(0, middle);
    const right = merged_arrays.slice(middle);

    return mergeSort(
        merge(left), merge(right)
    );
}

function mergeSort(left, right){
    let resultArray = [], leftIndex=0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
    } else{
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
    }

    return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

merge([1,10,50], [2,14,99,100]);