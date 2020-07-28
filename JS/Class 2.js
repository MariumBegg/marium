// FUNCTIONS EXERCISE

// Functions that count down 
for (i=0; i<11; i++){
    console.log ("this number is " + i);
}


// CODE ALONG 

for (i=10; i>0;i--){
    console.log ("this number is " + i);
}

// //EXERCISE: FUNCTIONS - Name

function myName (){
    return prompt("Name please! ");
}

var name = myName ();
console.log (name)

//EXERCISE: ARGUMENTS - Movie

function movieDetails (title, released){
    return title + " was released in " + released + ".";
}

var movie = movieDetails ("The Terminal", 2004);
console.log (movie)


function shoppingBasket (item, cost, balance) {
    if (cost<= balance){
        return "you can afford the" + item
    } else {
        return "The" + item + " is too expensive, you need to start saving!"
    }
}

var Layla = shoppingBasket (" 2nd hand copy of book: Wool", 2, 100);
console.log (Layla);

var Haya = shoppingBasket (" Ford ", 3000, 2400);
console.log (Haya);



// 1. Write a function that reverses a string


function reverse (word) {
    var splitString = word.split ("");
    var reverseArray = splitString.reverse ();
    var joinArray = reverseArray.join ("");
    return joinArray
}
console.log (reverse ("hello")) 

// method 2 - Using a Loop

function reverseString (word){
    var newString = "";
    for ( var i=word.length-1; i>=0; i--){
        newString += word [i];
    }
    return newString;
}
console.log (reverseString ("anatomically"))




// 2. Write a function that sorts a string in alphabetical order
//Method 1: function

function alphabeticalString(string){
    var splitString = string.split("");
        sortString.sort();
    var joinString =splitString.join("");
    return joinString
}


//method 2: loop

var array = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

var alphabeticalOrder = array.sort (function (a,b){
    if (a<b) return -1;
    else if (a>b) return 1;
    return 0
});

console.log (array)

// 3. Write a function that loops over an array or Strings and capitalises each one before returning the array 

function cap (str){
    var splitString =str.toLowerCase().split("");
    for (var i=0; i<splitString.length; i++){
        splitString [i]= splitString[i].charAt(0).toUpperCase ()+splitString[i].substring(1);
    }
    return splitString.join ("");
}

console.log (cap ("i love coding"));

// 4. Write a function that console logs the data type of the aruments
function getDataType (data1,data2,data3){
    var dataTypeArray = `The data types are ${typeof(data1)}, ${typeof(data2)}, and ${typeof(data3)}.`;
    return dataTypeArray;
}
console.log(getDataType("hello", 21, true))



// 5. Write a function that returns the length of the longest word in a sentence

function findLongestWord (str){
    var strSplit = str.split ("");
    var longestWord = 0;
    for (var i=0; i<strSplit.length; i++){
        if (strSplit [i].length>longestWord){
            longestWord=strSplit[i].length;
        }
    }
    return longestWord;
}

console.log (findLongestWord ("I will wear a large dress tomorrow!"))



