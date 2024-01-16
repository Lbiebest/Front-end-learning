// Array

// var arr = [1, 2, 3, 4, 5, 6];
// arr[10] = 10;
// arr[9] = true;
// console.log(arr);
// arr.forEach(e => {
//     console.log(e);
// });

// var arr = [1, 2, 3, 4, 5, 6];

// arr.push(7,8,9);

// for (const i in arr) {
//     if (Object.hasOwnProperty.call(arr, i)) {
//         const e = arr[i];
//         console.log(e);

//     }
// }

// for (const i of arr) {
//     console.log(i);
// }

// console.log("-------------------------");

// arr.splice(4, 2);

// arr.forEach(e => {
//     console.log(e)
// });

// console.log(arr.length );


// String 

// var s = "  console.log(arr)  ";
// console.log(s);
// console.log(s.indexOf("arr"));
// console.log(s.trim());
// console.log(s.substring(2, 13));



// JSON

// var user = {
//     name: "Tom",
//     age: 20, 
//     eat() {
//         console.log(this.name + " eat food");
//     }
// }

// console.log(user.name)

// user.eat();

var data = '{"name":"tom","age":18}'
console.log(data);
console.log(typeof data);

var obj = JSON.parse(data)
console.log(obj.dependencies)
console.log(typeof obj);

var str = JSON.stringify(obj)
console.log(str);
console.log(typeof str);

