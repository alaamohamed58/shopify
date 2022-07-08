const products = [...document.querySelectorAll(".products")],
  addToCartBtn = document.querySelectorAll(".products button"),
  cartItems = document.querySelector("#cart-items .items ul");

let cartIcons = document.querySelectorAll(".cart-items"),
  totalAmount = document.querySelector(".total-content .total-price");

//create Array of Products
let arrayOfProducts = [];
let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
updateCartItems();
updateTotalAmount();
for (let i = 0; i < products.length; i++) {
  let product = products[i],
    title = product.querySelector("h3").textContent,
    price = product.querySelector("span.price").textContent,
    id = i + 1,
    quantity = +1,
    img = product.querySelector("img").src;

  price = parseInt(price.replace("$", ""));
  let productObj = {
    title: title,
    price: price,
    id: id,
    quantity: quantity,
    imgSrc: img,
  };

  arrayOfProducts.push(productObj);

  addToCartBtn[i].onclick = () => {
    if (cartArray.some((item) => item.id === arrayOfProducts[i].id)) {
      // alert("the item already exits");
      arrayOfProducts[i].quantity++;
    } else {
      cartArray.push(arrayOfProducts[i]);
      console.log(cartArray);
    }
    updateCartItems();
    updateTotalAmount();
    addToLocal();
  };
}
function addToLocal() {
  localStorage.setItem("cart", JSON.stringify(cartArray));
}
function updateCartItems() {
  cartItems.innerHTML = "";

  cartArray.forEach((cart) => {
    cartItems.innerHTML += `
    <li>
    <div>
      <picture>
        <img src=${cart.imgSrc} />
      </picture>
      <div class="info">
      <div>  <h4>${cart.title}</h4>
      <span> ${cart.price} </span>
      <strong class="quantity"> x<span> ${cart.quantity} </span></strong> </div>
        <input class="val" style = "width : 50%; " type="number" min="1" value= ${cart.quantity}  />
      </div>
      <button id="delete" onclick = "removeItem(${cart.id})" >X</button>
    </div>
  </li>`;
  });
  if (cartItems.children.length === 0) {
    let p = document.createElement("p");
    let paragraphText = document.createTextNode("no items");
    p.appendChild(paragraphText);
    cartItems.appendChild(p);
  }
  let quantityChange = document.querySelectorAll("#cart-items input"),
    quantityValue = document.querySelectorAll("#cart-items .quantity span ");

  for (let i = 0; i < quantityChange.length; i++) {
    let input = quantityChange[i],
      quantity = quantityValue[i];
    input.addEventListener("input", () => {
      cartArray[i].quantity = input.value;
      quantity.textContent = input.value;
      updateTotalAmount();
    });
  }
  updateTotalAmount();
}

function updateTotalAmount() {
  let totalPrice = 0,
    totalItems = 0;
  cartArray.forEach((item) => {
    totalPrice += item.quantity * item.price;
    totalItems += +item.quantity;
  });
  totalAmount.innerHTML = `$${totalPrice}`;
  cartIcons.forEach((icon) => {
    icon.innerHTML = totalItems;
  });
  addToLocal();
}

function removeItem(id) {
  cartArray = cartArray.filter((el) => el.id !== id);
  updateCartItems();
  addToLocal();
}
