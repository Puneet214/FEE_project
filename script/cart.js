
let label = document.querySelector('.label');
let shoppingCart = document.getElementById('shopping-cart')
let basket = JSON.parse(localStorage.getItem('data')) || []


let calculate = () => {
  let cartIcon = document.querySelector('#cart_amount .badge');
  if (cartIcon) {
    cartIcon.innerHTML=basket.length
  }
}
let generate_Cart_item = () => {
  if (basket.length !== 0) {
    shoppingCart.innerHTML = basket.map((x) => {
      let { id, name, price, item,rating, img } = x;
      return `
        <div class="cart_item">
          <p>${name}</p>
          <div class="cart_item_img">
            <img src='${img}' alt='hello' />
          </div>

          <p>${price}</p>
      
        <button  class="remove_button" onclick="remove_from_cart(${id})">Remove</button>
        </div>
      `;
    })  
  }
}


let remove_from_cart=(id)=>
{
  basket=basket.filter((x)=>x.id!=id)
  localStorage.setItem('data',JSON.stringify(basket ))
  calculate();
  generate_Cart_item();
}
let Total_amount = () => {
  let total_amount = 0;
  basket.map((item) => {
    total_amount += item.item * item.price;
  })
  label.innerHTML = `
  <div class="checkout_area">
  <h2>Total Price:${total_amount}</h2>
  <button class="update"onclick=window.location.reload()>Update</button>
  <a href="shoesfinal.html">
    <button class="checkout">Checkout</button>
    </a>
  </div>`
  
}
calculate();
generate_Cart_item();


Total_amount();