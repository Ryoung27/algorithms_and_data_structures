function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j< arr.length; j++){
            if(arr[j] < arr[lowest] ){
                lowest = j;
            }
        }
    }
    return arr;
}

selectionSort([34, 22, 10, 19, 17]);