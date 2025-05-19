const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res = [];
	let s = arr.length;
	let sum = 0;
	let temp = [];
	for(let i=0; i<s; i++){
		if(sum + arr[i] <= n){
			temp.push(arr[i]);
			sum += arr[i];
		}
		else{
			res.push(temp);
			temp = [arr[i]];
			sum = arr[i];
		}
	}
	if(temp.length >= 1) res.push(temp);
	return res;
	 
}; 

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
