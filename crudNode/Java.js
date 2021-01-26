function findNumber(arr) {
  var n = arr.length;
  var total = ((n + 2) * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    total -= arr[i];
  }
  return total;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("findNumber(arr)")