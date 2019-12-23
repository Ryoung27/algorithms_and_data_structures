const basket = ['apples', 'pineapple', 'grapes']
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000,
}
for (let i = 0; i < basket.length; i++){
	console.log(basket[i]);
}

basket.forEach(item => {
	console.log(item);
}

for (item of basket){
	console.log(item);
}



for (i in detailedBasket){
	console.log(i)
}


