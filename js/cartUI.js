let overLay = document.getElementById("overlay"),
  cartButton = document.querySelector(".cart "),
  cartList = document.getElementById("cart-items"),
  closeBtn = document.querySelector("#cart-items button");
cartButton.addEventListener("click", () => {
  cartList.classList.add("active");
  overLay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  cartList.classList.remove("active");

  overLay.classList.remove("active");
});
overLay.addEventListener("click", () => {
  cartList.classList.remove("active");
});

document.querySelector(".cart-mobile").addEventListener("click", () => {
  cartList.classList.toggle("active");
});
/*************************************************************************** */
export default overLay;
