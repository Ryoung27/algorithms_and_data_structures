function linearSearch(array, search_item){
	let arrayLength = array.length;
	for(var i = 0; i <arrayLength; i++){
		if(array[i] === search_item){
			return i;
        }
	}
	return -1
}