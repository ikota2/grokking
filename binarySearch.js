
function binarySearch(arr, n) {
	let low = 0;
	let high = arr.length - 1;
	let tryings = 0;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const guess = arr[mid];
		tryings++;

		if (guess === n) return `index of n is ${mid} and there were ${tryings} tryings`;
		if (guess > n) high = mid - 1;
		if (guess < n) low = mid + 1;
	}
	return null;
}

const ex1 = new Array(128).fill(true).map((_, i) => i+1);
const ex2 = Math.log2(128);


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 3));

console.log(binarySearch(ex1, 10));

console.log({ ex2 })
