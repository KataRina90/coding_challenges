//Check if an array of numbers has duplicates and print them. Use Set data structure to complete the task. //
/* console.log('hello world')
var set = new Set();
const arr = [3, 2, 2, 4, 7, 4]
for (i = 0; i < arr.length; i++) {
  num = arr[i];
  presentEl = set.has(num);
  if (presentEl) {
    console.log(num);
  } else {
    set.add(num);
  }
} */

//Check if an array of numbers has duplicates and print them. Use Map data structure to complete the task. //
console.log("viki");
var map = new Map();
const array = [3, 2, 2, 4, 7, 4, 6, 6, 6];
for (i = 0; i < array.length; i++) {
  let num = array[i];
  var presentEl = map.has(num);
  if (presentEl) {
    map.set(num, map.get(num) + 1);
  } else {
    map.set(num, 1);
  }
  /*  if (map.get(num)>=2) {
    console.log(num)
  } */
}

map.forEach((value, key, map) => {
  if (value > 1) {
    console.log("number:" + key + " appears " + value + " times");
  }
});
