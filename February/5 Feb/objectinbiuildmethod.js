// object is mutable in nature, we can change the value of the key in the object
let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}
Object.freeze(obj); // this will make the object immutable, we cannot change the value of the key in the object
console.log(obj); // { key1: 'value1', key2: 'value2', key3: 'value3' }

// Seal - Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. However, it still allows the values of existing properties to be changed. In other words, you can modify the values of existing properties, but you cannot add or delete properties from the object.
// no new addition just modification is allowed

let obj2 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}
Object.seal(obj2); 

//entries - Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
let obj3 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}
console.log(Object.entries(obj3)); // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]

// assign - Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
let obj4 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}
let obj5 = {
    key4: "value4",
    key5: "value5",
    key6: "value6"
}
let obj6 = Object.assign({}, obj4, obj5);

