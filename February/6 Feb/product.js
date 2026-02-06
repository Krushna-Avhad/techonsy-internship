export let watch = { //named export
    cname:"titan",
    price: 2000,
    color:"black",
    display:"led",
    warranty:"2 years" 
}

export let mobile = { //named export
    cname:"titan",
    price: 5000,
    color:"black",
    display:"led",
    warranty:"5 years" 
}
 
export default function demo() {  // default export
    console.log("This is a demo function");
}





// export -  
// named export - consists of multiple exports in a file
// default export - consists of only one export in a file