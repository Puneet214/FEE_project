let basket=JSON.parse(localStorage.getItem('data'))||[];
let generateFilterOptions = () => {
    const classContainer = document.getElementById('class_container');
    const filterOptions = [
      { id: 1, name: 'GIRLS' },
      { id: 2, name: 'BOYS' },
      { id: 3, name: 'UNISEX' },
      { id: 4, name: '8C' },
      { id: 5, name: '9C' },
      { id: 6, name: '10C' },
      { id: 7, name: '11C' },
      { id: 8, name: '12C' },
      { id: 9, name: '13C' },
      { id: 10, name: '1' },
      { id: 11, name: '2' },
      { id: 12, name: '3' },
      { id: 13, name: '4' },
      { id: 14, name: '5' },
    ];
    classContainer.innerHTML = filterOptions.map((x) => {
      return `
        <div class="class_item">
          <input type="checkbox" name="class">${x.name}
        </div>
      `;
    }).join('');
  };
  
  // Function to generate school options
  let generateMaterialGridItems = () => {
    const materialGrid = document.getElementById('Material');
    materialGrid.innerHTML = shopItemsData.map((x) => {
      return `
        <div class="book_item card col-sm-4">
          <img class="card-img-top rounded mx-auto d-block" src="${x.img}" alt="${x.name}">
          <span class="heart-icon">
            <a href="product.html" target="_blank">
              <i class="fas fa-cart-plus"></i>
            </a>
          </span>
          <div class="card-body">
            <p class="text-center">${x.name}</p>
            <p class="text-center">&#8377;${x.price}</p>
            <div class="star-rating">
             ( ${x.rating})
            </div>
            <div class="d-flex justify-content-center mt-3">
              <button onclick="add_to_cart('${x.id}','${x.name}','${x.price}','${x.rating}','${x.img}')" type="button" class="btn btn-primary" data-toggle="modal" data-target="#signupModal">
                Click here
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  };
    
    
  
  let add_to_cart=(id,name,price,img)=>
  {
    basket.push(
      {
        id:id,
        item:1,
        name:name,
        price:price,
        img:img
      }
    )
    console.log(basket);
   localStorage.setItem('data',JSON.stringify(basket))
    
  calculate();
  }
  let calculate=()=>
    {
      let cart_icon = document.querySelector('.badge');
  
      let cart_amount=basket.length
      cart_icon.innerHTML=cart_amount;
    }
 

     generateFilterOptions();
 
  generateMaterialGridItems();