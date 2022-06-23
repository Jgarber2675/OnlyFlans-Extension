const imgflans = document.body.querySelectorAll("img");
const svgflans = document.body.querySelectorAll("svg");
const pflans = document.body.querySelectorAll("p")
const aflans = document.body.querySelectorAll("a")
const h1flans = document.body.querySelectorAll("h1")
const h2flans = document.body.querySelectorAll("h2")
const h3flans = document.body.querySelectorAll("h3")
const h4flans = document.body.querySelectorAll("h4")
const h5flans = document.body.querySelectorAll("h5")
const h6flans = document.body.querySelectorAll("h6")
const liflans = document.body.querySelectorAll("li")
const bgflans = document.body.querySelectorAll("#background-image")
// const spflans = document.body.querySelectorAll("span")

//preflans.innerText="A Flan with a Plan";
//const flanElement = document.createElement("p");
//flanElement.innerText = "A flan with a plan";
//preflans.parentNode.insertBefore(flanElement,preflans);
console.log(imgflans);
imgflans.forEach(node =>{
    let currentImg = document.createElement("img"); 
    currentImg.style ="width: auto;"
    currentImg.style ="height: auto;"
    currentImg.src= "https://media.istockphoto.com/photos/flan-picture-id175260776"
    
    node.parentNode.insertBefore(currentImg,node);
    node.remove();

    console.log(node);
});

console.log(svgflans);
svgflans.forEach(node =>{ //src flans
    let currentImg = document.createElement("svg");
    currentImg.src= "https://media.istockphoto.com/photos/flan-picture-id175260776"
    node.parentNode.insertBefore(currentImg,node);
    node.remove();

    console.log(node);
});

console.log(pflans); // pflans
pflans.forEach(node =>{
    let currentp = document.createElement("p");
    currentp.innerText= "There is only Flan";
    node.parentNode.insertBefore(currentp,node);
    node.remove();

    console.log(node);
});


console.log(aflans);
aflans.forEach(node =>{ //aflans 
    let currenta = document.createElement("a");
    currenta.href= "https://media.istockphoto.com/photos/flan-picture-id175260776"
    currenta.innerText = "There is only flan"
    node.parentNode.insertBefore(currenta,node);
    //node.remove();

    console.log(node);
});

console.log(h1flans);
h1flans.forEach(node =>{
    let currentH1 = document.createElement("h1");
    currentH1.innerText= "There is only FLAN"
    node.parentNode.insertBefore(currentH1,node);
    node.remove();

    console.log(node);
});
console.log(h2flans);
h2flans.forEach(node =>{
    let currentH2 = document.createElement("h2");
    currentH2.innerText= "There is only FLAN"
    node.parentNode.insertBefore(currentH2,node);
    node.remove();

    console.log(node);
});
console.log(h3flans);
h3flans.forEach(node =>{
    let currentH3 = document.createElement("h3");
    currentH3.innerText= "There is only FLAN"
    node.parentNode.insertBefore(currentH3,node);
    node.remove();

    console.log(node);
});
console.log(h4flans);
h4flans.forEach(node =>{
    let currentH4 = document.createElement("h4");
    currentH4.innerText= "There is only FLAN"
    node.parentNode.insertBefore(currentH4,node);
    node.remove();

    console.log(node);
});
console.log(h5flans);
h5flans.forEach(node =>{
    let currentH5 = document.createElement("h5");
    currentH5.innerText= "There is only FLAN"
    node.parentNode.insertBefore(currentH5,node);
    node.remove();

    console.log(node);
});
console.log(h6flans);
h6flans.forEach(node =>{
    let currentH6 = document.createElement("h6");
    currentH6.innerText= "There is only FLAN"
    node.parentNode.insertBefore(currentH6,node);
    node.remove();

    console.log(node);
});
console.log(liflans);
liflans.forEach(node =>{
    let currentLi = document.createElement("li");
    currentLi.innerText= "There is only FLAN"
    node.parentNode.insertBefore(currentLi,node);
    node.remove();

    console.log(node);
});
// console.log(spflans);
// spflans.forEach(node =>{
//     let currentSp = document.createElement("span");
//     currentSp.src= "https://media.istockphoto.com/photos/flan-picture-id175260776"
//     node.parentNode.insertBefore(currentSp,node);
//     node.remove();

//     console.log(node);
// });
console.log(bgflans);
bgflans.forEach(node =>{
    let currentBG = document.createElement("background-image");
    currentBG.src= "https://media.istockphoto.com/photos/flan-picture-id175260776"
    node.parentNode.insertBefore(currentBG,node);
    node.remove();

    console.log(node);
});


