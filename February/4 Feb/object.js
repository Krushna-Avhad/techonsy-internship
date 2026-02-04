let watch = {
    cname:"titan watch",
    price:2000,
    color:"black",
    features:["stopwatch","alarm","led display"],
    warranty:"2 years"
}

console.log(watch);

// Nested Object
let book = {
    name:"ikigai",
    author:["francesc miralles","abc"],
    price:{
        pune:500,
        mumbai:550,
        delhi:530
    },
    display:function(){
        console.log("Book Name:",this.name);
        console.log("Author:",this.author);
        console.log("Price in Pune:",this.price.pune);
        console.log(`Price in Mumbai: ${this.price.mumbai}`);
        console.log(`Price in Delhi: ${this.price.delhi}`);
    }
}

console.log(book.author[0]);
book.display();

// 