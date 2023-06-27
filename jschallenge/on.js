
// let users = {
//     apple: 23,
//     pineapple: 21,
//     orange: 12

// }

// function countOnline(userObj) {
//     let arr = [];
//   for(let obj in userObj) {
//     if(userObj[obj].online === true) {
//         arr.push(userObj[obj].online);
//     }
// }
//     return arr.length;
// }

// console.log(countOnline(users));

// let input = document.querySelector('input');
// let div = document.querySelector('div');
// div.innerHTML = input.value;

// var el_down = document.getElementById("GFG_DOWN");
// var inputF = document.getElementById("id1");

// function gfg_Run() {
//     inputF.value = prompt("Enter products name");
//     el_down.innerHTML =
//         "Value = " + "'" + inputF.value + "'";
// }

// var el_down = document.getElementById("GFG_DOWN");
// var inputF = document.getElementById("id1");

// function gfg_Run() {
//     inputF.setAttribute('value', '');
//     // el_down.innerHTML = inputF.value;
//     let item = inputF.value;
//     if(users.hasOwnProperty(item)) {
//         el_down.innerHTML = item + " " + users[item];
//     } else {
//         el_down.innerHTML = 'try another fruits';
//     }
// }

let btn = document.querySelector('button');
let input = document.querySelector('input');
let item = document.querySelector('.item');
let sox = document.querySelector(".sox");

let books = [
    {
        id: 00001,
        name: "Badshah-Namdar",
        author: "Humayun-Ahmed",
        img: "Badsha-Namdar.jpg"
    },
    {
        id: 00002,
        name: "Bristi-Bilash",
        author: "Humayun-Ahmed",
        img: "Bristi-Bilash.jpg"
    },
    {
        id: 00003,
        name: "Lilaboti",
        author: "Humayun-Ahmed",
        img: "Lilaboti.jpg"
    },
];


btn.addEventListener("click", myFunc);

function myFunc() {
    input.setAttribute("value", "");
    let myValue = input.value;
    // let regEx = ;

    for(let i = 0; i < books.length; i++) {
        if(input.value === books[i].name) {
            return item.innerHTML = `<div class="book">
            <img width="150" src=${books[i].img} alt="">
            <div class="details">
                <h3>${books[i].name}</h3>
                <p>${books[i].author}</p>
            </div>
        </div>
            `
        }
    }
}



