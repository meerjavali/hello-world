// const fruits= new Map()

// fruits.set("apple",3);
// fruits.set("bananan",4);
// fruits.set("lemon",5);
// console.log(fruits);

// let a="Meerjavali Shaik";
// console.log("for in loop");
// for(let x in a){
//     console.log(x);
// }
// console.log("for of loop");
// for(let x of a){
//     console.log(x);
// }
// console.log('6'-'1');
// let d = 10;
// let b=d;
// b=200;
// console.log("b value ",b);
// console.log("d value ",d);

// let y={"test":10}
// let m=y;
// m.test=300;
// m=500;
// console.log(y);
// console.log(m);

const postData = new FormData();

postData.append("meerja", "sabiya");
postData.append("sabiya", "Meerja");
console.log(postData);
console.log(postData.get('sabiya'));
for (let pair of postData.entries()) {
    console.log(pair[0]+ ', '+ pair[1]); 
}