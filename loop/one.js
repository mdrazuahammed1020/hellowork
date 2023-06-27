let boxes = document.getElementById("boxes");
let arr = [
    {
        name: "tomato",
        price: 12,
        color: "#154c79"
    },
    {
        name: "apple",
        price: 10,
        color: "#FFF3E0"
    },
    {
        name: "mango",
        price: 15,
        color: "#abdbe3"
    },
    {
        name: "orange",
        price: 12,
        color: "#abdce0"
    },
    {
        name: "potato",
        price: 22,
        color: "#abcbe1"
    },
    {
        name: "trees",
        price: 12,
        color: "#abdbe3"
    }
  
]

function myFunc() {
    return (boxes.innerHTML = arr.map((x) => {
        let {name, price, color} = x;
        return `<div class="box">
        <h2>${name}</h2>
        <p>${price}</p> 
         <div class="c-box" style="background-color: ${color};">
        
        </div>
        </div>`
    }).join(" "));
}

myFunc();
// boxes.innerHTML = `arr.map(x => {
//     <div class="box">
// <h2>tomato</h2>
// <p>$20</p> 
// <div class="c-box">

// </div>
// </div>
// })`;