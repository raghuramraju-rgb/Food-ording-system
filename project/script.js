let cart = [];
let orderHistory = [];

const vegItems = [
{ name:"Paneer Butter Masala", price:220, image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" },
{ name:"Veg Biryani", price:180, image:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a" },
{ name:"Dal Fry", price:140, image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d" },
{ name:"Mix Veg Curry", price:160, image:"https://images.unsplash.com/photo-1547592180-85f173990554" },
{ name:"Mushroom Masala", price:190, image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
{ name:"Aloo Gobi", price:130, image:"https://images.unsplash.com/photo-1512058564366-18510be2db19" },
{ name:"Chole Bhature", price:120, image:"https://images.unsplash.com/photo-1626500155537-93690b17e7f8" },
{ name:"Palak Paneer", price:210, image:"https://images.unsplash.com/photo-1604908176997-431b4b6b87db" },
{ name:"Paneer Tikka", price:230, image:"https://images.unsplash.com/photo-1565557623262-b51c2513a641" },
{ name:"Veg Noodles", price:150, image:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841" },
{ name:"Veg Fried Rice", price:160, image:"https://images.unsplash.com/photo-1512058564366-18510be2db19" },
{ name:"Manchurian", price:170, image:"https://images.unsplash.com/photo-1547592180-85f173990554" },
{ name:"Dosa", price:100, image:"https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
{ name:"Idli", price:80, image:"https://images.unsplash.com/photo-1610192244261-3f33de3f55e4" },
{ name:"Poori Bhaji", price:90, image:"https://images.unsplash.com/photo-1626500155537-93690b17e7f8" },
{ name:"Pav Bhaji", price:120, image:"https://images.unsplash.com/photo-1601050690597-df0568f70950" },
{ name:"Rajma Rice", price:140, image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
{ name:"Veg Pizza", price:250, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591" },
{ name:"Cheese Sandwich", price:130, image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af" },
{ name:"Spring Roll", price:140, image:"https://images.unsplash.com/photo-1547592180-85f173990554" }
];

const nonVegItems = [
{ name:"Chicken Curry", price:250, image:"https://images.unsplash.com/photo-1604908176997-431b4b6b87db" },
{ name:"Chicken Biryani", price:280, image:"https://images.unsplash.com/photo-1628294895950-9805252327bc" },
{ name:"Mutton Curry", price:350, image:"https://images.unsplash.com/photo-1544025162-d76694265947" },
{ name:"Mutton Biryani", price:380, image:"https://images.unsplash.com/photo-1628294895950-9805252327bc" },
{ name:"Fish Fry", price:260, image:"https://images.unsplash.com/photo-1559847844-5315695dadae" },
{ name:"Prawn Curry", price:320, image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
{ name:"Chicken Tikka", price:240, image:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143" },
{ name:"Butter Chicken", price:290, image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" },
{ name:"Tandoori Chicken", price:300, image:"https://images.unsplash.com/photo-1610057099443-fde8c4d50f91" },
{ name:"Egg Curry", price:180, image:"https://images.unsplash.com/photo-1518492104633-130d0cc84637" },
{ name:"Egg Biryani", price:200, image:"https://images.unsplash.com/photo-1628294895950-9805252327bc" },
{ name:"Chicken Noodles", price:190, image:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841" },
{ name:"Chicken Fried Rice", price:200, image:"https://images.unsplash.com/photo-1512058564366-18510be2db19" },
{ name:"Fish Curry", price:280, image:"https://images.unsplash.com/photo-1559847844-5315695dadae" },
{ name:"Crab Curry", price:350, image:"https://images.unsplash.com/photo-1559847844-5315695dadae" },
{ name:"Chicken Lollipop", price:220, image:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143" },
{ name:"Chicken Burger", price:180, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
{ name:"Chicken Pizza", price:300, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591" },
{ name:"Grilled Chicken", price:270, image:"https://images.unsplash.com/photo-1610057099443-fde8c4d50f91" },
{ name:"Chicken Shawarma", price:160, image:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783" }
];

function showVeg() {
    displayMenu(vegItems);
}

function showNonVeg() {
    displayMenu(nonVegItems);
}

function displayMenu(items) {
    let menu = document.getElementById("menu");
    menu.innerHTML = "";

    items.forEach(item => {
        menu.innerHTML += `
        <div>
            <img src="${item.image}" width="200" height="150">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
            <button type="button" onclick="addToCart('${item.name}', ${item.price})">
                Add to Cart
            </button>
        </div>`;
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " added to cart");
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Please select your order item.");
        return;
    }

    orderHistory.push(...cart);

    alert("Congratulations! Your order has been confirmed.");

    cart = [];
}

function showHistory() {
    if (orderHistory.length === 0) {
        alert("No order history found.");
        return;
    }

    let historyText = "Your Order History:\n\n";

    orderHistory.forEach((item, index) => {
        historyText += (index + 1) + ". " + item.name + " - ₹" + item.price + "\n";
    });

    alert(historyText);
}