// In products.js
let products = [
    // Your products array here
];

// Export the products for global access if needed
module.exports = products;


function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function showModal(category) {
    const modal = document.getElementById('product-modal');
    const title = modal.querySelector('#modal-title');
    const description = modal.querySelector('#modal-description');
    title.textContent = category;
    description.textContent = `This is more information about ${category}.`;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}

window.onload = function() {
    fetch('/get-products')
        .then(response => response.json())
        .then(products => {
            const productGrid = document.querySelector('.product-grid');
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.dataset.category = product.category;

                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <input type="number" id="quantity${product.id}" value="1" min="1">
                    <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                    <button onclick="showModal('${product.name}')">More Info</button>
                `;

                productGrid.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error loading products:', error));

    document.querySelector('#search-bar button').addEventListener('click'), () => {
        const searchTerm = document.querySelector('#search-bar input').value.toLowerCase();
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            const name = product.querySelector('h3').textContent.toLowerCase();
            const category = product.dataset.category.toLowerCase();
            if (name.includes(searchTerm) || category.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
};

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id'); // Get product ID
        const quantity = document.querySelector(`#quantity${productId}`).value; // Get quantity
        const productName = this.parentElement.querySelector('h4').textContent; // Get product name
        const productPrice = this.parentElement.querySelector('strong').textContent; // Get product price

        let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve current cart from localStorage

        // Check if product is already in the cart
        const existingProductIndex = cart.findIndex(item => item.id === productId);
        if (existingProductIndex > -1) {
            // If product is already in the cart, update the quantity
            cart[existingProductIndex].quantity = parseInt(cart[existingProductIndex].quantity) + parseInt(quantity);
        } else {
            // If product is not in the cart, add it
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                quantity: quantity
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
        alert(`${productName} has been added to the cart!`);
    });
});
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const quantity = this.getAttribute('data-quantity');

        fetch('/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId, quantity })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // Optional: Log success message
            updateCartDisplay(data.cart); // Call a function to update cart display
        })
        .catch(error => console.error('Error:', error));
    });
});

function updateCartDisplay(cart) {
    // Logic to update your cart display in the UI
    console.log(cart); // Display cart contents
}

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    document.getElementById('product-container').addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = event.target.dataset.id;
            const product = products.find(item => item.id == productId);

            if (product) {
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`${product.name} has been added to your cart!`);
            }
        }
    });
});
