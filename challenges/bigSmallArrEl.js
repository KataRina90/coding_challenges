// Find the smallest and largest number in an array//

console.log('Hello world')
const arr=[5,2,6,4,5,11,1,8,9,19]
min=arr[0]
max=arr[0]
for (i=0; i<arr.length; i++) {
    if (arr[i]>max) {
        max=arr[i]
    }
    if (arr[i]<min) {
    min=arr[i]
    }
}
console.log(min,max)
console.log ('This is how its done')