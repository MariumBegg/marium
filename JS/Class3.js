// //Write an object here

// Var Film = {
//     Name: "Lord of The Rings";
//     Director: "Peter Jackson";
//     YearReleased: "2002" 
//     Actors: ["Person1", "Person2"];
//     plotIntro: function plot (){

//     }

    
// }


document.addEventListener ("DOMContentLoaded", function () {


var myHeaderOne= document.getElementsByTagName("h1");
myHeaderOne= myHeaderOne [0]
myHeaderOne.style.color = "green"
myHeaderOne.style.fontSize = "40px"
myHeaderOne.style.border = "3px dashed orange"
myHeaderOne.style.padding = "20px"

var newParagraph= document.createElement("p")
newParagraph.innerText = "I have been created with JS"

document.body.appendChild (newParagraph)

newParagraph.addEventListener("mouseover", function () {
    console.log(event);
    console.log(event.target);
    event.target.style.fontSize = "100px"
}

)

var paragraph2 = document.createElement("p")
paragraph2.innerText= "My name is Marium! I am 25. I am really struggling with JavaScript!!"
paragraph2.style.fontSize = "18px"
paragraph2.style.fontFamily = "sans-serif"
paragraph2.style.width = "100px"
paragraph2.style.border = "1px solid orange"
paragraph2.style.padding = "30px"
document.body.appendChild (paragraph2)

paragraph2.addEventListener("click", function () {
    console.log(event);
    console.log(event.target);
    event.target.style.color = "red"


    setTimeout(function name(params) {
        
    })
    
})

});