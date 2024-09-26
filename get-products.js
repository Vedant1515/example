window.onload = function() {
    fetch('/get-products')
        .then(response => response.json())
        .then(products => displayProducts(products))
        .catch(error => console.error('Error fetching products:', error));
};

function displayProducts(products) {
    const productList = document.getElementById('productList');
    const noProductsMessage = document.getElementById('noProductsMessage');
    
    productList.innerHTML = '';

    if (products.length === 0) {
        noProductsMessage.style.display = 'block';
        return;
    } else {
        noProductsMessage.style.display = 'none';
    }

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = `https://picsum.photos/seed/${product.id}/200`; 
        img.alt = product.name;

        const name = document.createElement('h2');
        name.innerText = product.name;

        const price = document.createElement('p');
        price.innerText = `Price: $${product.price}`;
        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(price);

        productList.appendChild(productDiv);
    });
}

// filter products by name
function filterProducts() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const name = product.querySelector('h2').innerText.toLowerCase();
        if (name.includes(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
