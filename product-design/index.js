
let shop = document.getElementById("shop");

let shopData = [
    {
        id: "eiworwrio",
        name: "strawberry",
        price: 10,
        desc: "weks lkoiwo awiowqkq lqoilkskli lawiodn lwoidjsnk",
        img: "/photos/1.png"
    },
    {
        id: "eiworwriods",
        name: "onion",
        price: 20,
        desc: "weks lkoiwo awiowqkq lqoilkskli lawiodn lwoidjsnk",
        img: "/photos/2.png"
    },
    {
        id: "eiworwriodfs",
        name: "lime",
        price: 15,
        desc: "weks lkoiwo awiowqkq lqoilkskli lawiodn lwoidjsnk",
        img: "/photos/3.png"
    },
    {
        id: "eiworwriofghd",
        name: "apple",
        price: 10,
        desc: "weks lkoiwo awiowqkq lqoilkskli lawiodn lwoidjsnk",
        img: "/photos/5.png"
    }
];

let basket = JSON.parse(localStorage.getItem("data")) || []; 

let generateShop = () => {
    return (shop.innerHTML = shopData.map((x) => {
        let {id, name, desc, img, price} = x;
        let search = basket.find((y) => y.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
        <img width="200" src=${img} alt="">
        <div class="details">
            <h2>${name}</h2>
            <p>${desc}</p>
           
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <div onclick="decrement(${id})" class="minus">-</div>
                    <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
                    <div onclick="increment(${id})" class="plus">+</div>
                </div>
            </div>
        </div>
    </div>
        `
    }).join(" "))
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if(search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1
        })
    } else {
        search.item += 1;
    }
    
    
    console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if(search === undefined) return;

    else if(search.item === 0) return;
    else {
        search.item -= 1;
    }
    
    
    
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item)
    document.getElementById(id).innerHTML = search.item;
};

