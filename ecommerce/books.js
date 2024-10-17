const filClass=[
    {'id':0,'title':'Nursery'},
    {'id':1,'title':'KG'},
    {'id':2,'title':'1st'},
    {'id':3,'title':'2nd'},
    {'id':4,'title':'3rd'},
    {'id':5,'title':'4th'},
    {'id':6,'title':'5th'},
    {'id':7,'title':'6th'},
    {'id':8,'title':'7th'},
    {'id':9,'title':'8th'},
    {'id':10,'title':'9th'},
    {'id':11,'title':'10th'},
    {'id':12,'title':'11th'},
    {'id':13,'title':'12th'},
];
document.getElementById('searchClass').addEventListener('keyup', (e) => {
    const filterSearchData = e.target.value.toLowerCase();
    const filterData = filClass.filter((item) => {
        return item.title.toLowerCase().includes(filterSearchData);
    });
    displayItem(filterData);
});
const displayItem = (items) => {
    document.getElementById('Classes').innerHTML = items.map((item) => {
        const { title } = item;
        return (
            `<div class='class_item'>
                <input type='checkbox' name='class'>${title}
            </div>`
        );
    }).join('');
    attachCheckboxListeners();
};
displayItem(filClass);

const filSchool=[

    {'id':0,'title':'Delhi public school'},
    {'id':1,'title':'Satluj public school'},
    {'id':2,'title':'A.V international school'},
    {'id':3,'title':'GRG national school'},
    {'id':4,'title':'BR global school'},
    {'id':5,'title':'St Xavier public school'},
    {'id':6,'title':'Arya public school'},
    {'id':7,'title':'Sainik national school'},
];
document.getElementById('searchSchool').addEventListener('keyup', (e) => {
    const filterSearchData = e.target.value.toLowerCase();
    const filterData = filSchool.filter((item) => {
        return item.title.toLowerCase().includes(filterSearchData);
    });
    displaySchools(filterData);
});
const displaySchools = (items) => {
    document.getElementById('schools').innerHTML = items.map((item) => {
        const { title } = item;
        return (
            `<div class='class_item'>
                <input type='checkbox' name='class'>${title}
            </div>`
        );
    }).join('');
};
displaySchools(filSchool);

const product=[
{'id':0,'title':'Delhi public school class-1','price':3000,'image':'set.jpg','category':'Delhi public school','class':1},
{'id':1,'title':'Satluj public school class-2','price':2000,'image':'set.jpg','category':'Satluj public school','class':2}, 
{'id':2,'title':'A.V international school class-3','price':1500,'image':'set.jpg','category':'A.V international school','class':3},
{'id':3,'title':'GRG national school class-4','price':3400,'image':'set.jpg','category':'GRG national school','class':4},
{'id':4,'title':'BR global school class-5','price':3300,'image':'set.jpg','category':'BR global school','class':5},
{'id':5,'title':'St Xavier public school class-6','price':2000,'image':'set.jpg','category':'St Xavier public school','class':6},
{'id':6,'title':'Arya public school class-7','price':3000,'image':'set.jpg','category':'Arya public school','class':7},
{'id':7,'title':'Sainik national school class-8','price':4000,'image':'set.jpg','category':'Sainik national school','class':8}, 
{'id':8,'title':'BR global school class-7','price':3500,'image':'set.jpg','category':'BR global school','class':7},
{'id':9,'title':'Delhi public school class-9','price':1200,'image':'set.jpg','category':'Delhi public school','class':9},
{'id':10,'title':'St Xavier public school class-10','price':1200,'image':'set.jpg','category':'St Xavier public school','class':10},
{'id':11,'title':'Satluj public school class-10','price':1200,'image':'set.jpg','category':'Satluj public school','class':10},
{'id':12,'title':'GRG national school class-10','price':1200,'image':'set.jpg','catgeory':'GRG national school','class':10},
{'id':13,'title':'Sainik national school class-10','price':1200,'image':'set.jpg','category':'Sainik national school','class':10},
{'id':14,'title':'Delhi public school class-10','price':1200,'image':'set.jpg','category':'Delhi public school','class':10},
{'id':15,'title':'A.V international school class-10','price':1200,'image':'set.jpg','category':'A.V international school','class':10},
{'id':16,'title':'GRG national school class-10','price':1200,'image':'set.jpg','category':'GRG national school','class':10},
{'id':17,'title':'Sainik national school class-10','price':1200,'image':'set.jpg','category':'Sainik national school','class':10},
];

document.getElementById('searchProducts').addEventListener('keyup', (e) => {
    const filterSearchData = e.target.value.toLowerCase();
    const filterData = product.filter((item) => {
        return item.title.toLowerCase().includes(filterSearchData);
    });
    displayProducts(filterData);
});
const displayProducts = (items) => {
    document.getElementById('books_cards').innerHTML = items.map((item) => {
        const { title ,price,image} = item;
        return (
            `<div class="book_item card col-sm-4">
            <div class="card-img-container">
            <img class="card-img-top rounded mx-auto d-block item_image" src="${image}">
            <span class="heart-icon">
           <i class="fas fa-cart-plus">
            </i>
            </span>
            </div>
            <div class='card-body'>
            <p class='text-center'>${title}</p>
            <p class="text-center">&#8377;${price}</p>
            <div class="star-rating text-center">
                    <i id="star" class="fas fa-star"></i>
                    <i id="star" class="fas fa-star"></i>
                    <i id="star" class="fas fa-star"></i>
                    <i id="star" class="fas fa-star"></i>
                    <i id="star" class="fas fa-star-half-alt"></i>
            </div>
            </div>
            </div>`
        );
    }).join('');
};
displayProducts(product);

  



