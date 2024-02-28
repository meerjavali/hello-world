const cart=["shirt","pants","shoes"];

const promise = createOrder(cart);

promise.then(function(res){
    console.log(res);
    return res;
}).then(function(orderid){
    return proceedToPayment(orderid);
}).then((res)=>{
    console.log(res);
})
.catch(function(err){
    console.log(err.message);
});

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        //reject
        if(!validationCart(cart)){
            const err= new Error("This is not validate cart");
            reject(err);

        }

        //resolve
        const orderId = 12345;
        setTimeout(function(){
            resolve(orderId);
        },5000);

    });
    return pr;
}

function proceedToPayment(orderid){
    console.log(orderid);
    const pr = new Promise((resolve,reject) =>{
        resolve(orderid+" this order payment success")
    });
    return pr;
}
 
function validationCart(cart){
    return true;
}


