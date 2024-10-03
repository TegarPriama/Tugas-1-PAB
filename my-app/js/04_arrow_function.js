console.log("------ Arrow Function ------");

function hello() {
    return "Hello World!";
}

console.log(hello());

hello = function() {
    return "Hello World!";
}

console.log(hello());

hello = () => {
    return "Hello World! This is from Arrow Function";
}

console.log(hello());

hello = () => "Hello World! This is from Arrow Function";

console.log(hello());

hello = myName => `Hello ${myName}! This is from Arrow Function`;

console.log(hello("Purnama"));
