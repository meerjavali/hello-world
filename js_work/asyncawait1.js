// basic async

// async function getData(){
//     return "Namaste";
// }
// const Data = getData();
// console.log(Data);
// Data.then((res)=>{console.log(res);});

//async with await.

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolved value");
    },10000);
});

async function handlePromise(){
    console.log("Hellow world......");
    const val = await p;
    console.log("Namaste JS");
    console.log(val);
    const val2 = await p;
    console.log("Namaste JS2");
    console.log(val2);
}

handlePromise();