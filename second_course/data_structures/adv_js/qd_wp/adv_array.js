let array = [1, 2, 3, 4, 5]

const double = []
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log(newArray);

const mapArray = array.map((num) => {
	return num * 2;
}
