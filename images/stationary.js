const fil = [
    { id: 0, title: 'Art&Craft' },
    { id: 1, title: 'map' },
    { id: 2, title: 'geometry' },
    { id: 3, title: 'Cover' },
    { id: 4, title: 'Card' },
    { id: 5, title: 'Files&Folders' },
    { id: 6, title: 'Kit' },
    { id: 7, title: 'Pens' }
];

const product = [
    { id: 0, title: 'A4-size sheets', price: '200', image: 'sheets.jpg', category: 'Art&Craft' },
    { id: 1, title: 'Map book india', price: '50', image: 'map.jpeg', category: 'map' },
    { id: 2, title: 'Map book france', price: '60', image: 'map.jpeg', category: 'map' },
    { id: 3, title: 'Map book world', price: 90, image: 'map.jpeg', category: 'map' },
    { id: 4, title: 'Ball Pen', price: '30', image: 'pen.jpeg', category: 'Pens' },
    { id: 5, title: 'Correction pen', price: '40', image: 'correction.jpeg', category: 'Pens' },
    { id: 6, title: 'Geometry Box', price: '100', image: 'geometry.jpeg', category: 'geometry' },
    { id: 7, title: 'Marker', price: '80', image: 'marker.jpeg', category: 'Pens' }
];

// Event listener for the search bar to filter categories
document.getElementById('filter_searchBar').addEventListener('keyup', (e) => {
    const filterSearchData = e.target.value.toLowerCase();
    const filterData = fil.filter((item) => item.title.toLowerCase().includes(filterSearchData));
    displayItem(filterData);
});

// Function to display category items
const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        const { title } = item;
        return (
            `<div class='class_item'>
                <input type='checkbox' name='class' value='${title}' class='filter-checkbox'>${title}
            </div>`
        );
    }).join('');
    attachCheckboxListeners();
};

// Attach event listeners to checkboxes
const attachCheckboxListeners = () => {
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', filterProducts);
    });
};

// Function to filter products based on selected categories
const filterProducts = () => {
    const selectedCategories = Array.from(document.querySelectorAll('.filter-checkbox:checked')).map(cb => cb.value.toLowerCase());
    if (selectedCategories.length > 0) {
        const filteredProducts = product.filter((item) => selectedCategories.includes(item.category.toLowerCase()));
        displayProduct(filteredProducts);
    } else {
        displayProduct(product);
    }
};

// Initial display of all category items
displayItem(fil);

// Function to display product items
const displayProduct = (items) => {
    document.getElementById('Book_item').innerHTML = items.map((item) => {
        const { title, price, image } = item;
        return (
            `<div class="book_item card col-sm-4">
                <div class="card-img-container">
                    <img class="card-img-top rounded mx-auto d-block item_image" src="${image}">
                    <span class="heart-icon">
                        <i class="fas fa-cart-plus"></i>
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

// Initial display of all products
displayProduct(product);

// Event listener for the product search bar
document.getElementById('searchProducts').addEventListener('keyup', (e) => {
    const filterSearchData = e.target.value.toLowerCase();
    const filterData = product.filter((item) => item.title.toLowerCase().includes(filterSearchData));
    displayProduct(filterData);
});