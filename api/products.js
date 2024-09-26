const express = require('express');
const router = express.Router();


// Sample product data
const products = [
    { id: 1, name: "Smartphone", category: "electronics", description: "Latest smartphone with advanced features.", image: "https://picsum.photos/200/300", price: 699 },
    { id: 2, name: "Laptop", category: "electronics", description: "High-performance laptop for professionals.", image: "https://picsum.photos/200/301", price: 1299 },
    { id: 3, name: "T-Shirt", category: "clothing", description: "Comfortable cotton T-shirt.", image: "https://picsum.photos/200/302", price: 19.99 },
    { id: 4, name: "Blender", category: "home", description: "High-speed blender for smoothies.", image: "https://picsum.photos/200/303", price: 49.99 },
    { id: 5, name: "Soccer Ball", category: "sports", description: "Durable soccer ball for outdoor play.", image: "https://picsum.photos/200/304", price: 29.99 },
    { id: 6, name: "Doll House", category: "toys", description: "Beautiful doll house with mini furniture.", image: "https://picsum.photos/200/305", price: 79.99 },
    { id: 7, name: "Organic Apples", category: "produce", description: "Fresh organic apples with a crisp bite.", image: "https://picsum.photos/200/306", price: 3.99 },
    { id: 8, name: "Whole Wheat Bread", category: "bakery", description: "Nutritious whole wheat bread.", image: "https://picsum.photos/200/307", price: 2.99 },
    { id: 9, name: "Greek Yogurt", category: "dairy", description: "Creamy Greek yogurt in various flavors.", image: "https://picsum.photos/200/308", price: 1.49 },
    { id: 10, name: "Skim Milk", category: "dairy", description: "Low-fat skim milk for a healthier option.", image: "https://picsum.photos/200/309", price: 2.49 },
    { id: 11, name: "Eggs (Dozen)", category: "dairy", description: "Fresh eggs, packed by the dozen.", image: "https://picsum.photos/200/310", price: 3.49 },
    { id: 12, name: "Chicken Breast", category: "meat", description: "Boneless, skinless chicken breasts.", image: "https://picsum.photos/200/311", price: 8.99 },
    { id: 13, name: "Ground Beef", category: "meat", description: "High-quality ground beef, perfect for burgers.", image: "https://picsum.photos/200/312", price: 5.99 },
    { id: 14, name: "Orange Juice", category: "beverages", description: "100% pure orange juice.", image: "https://picsum.photos/200/313", price: 3.99 },
    { id: 15, name: "Pasta (Spaghetti)", category: "pantry", description: "Traditional spaghetti pasta.", image: "https://picsum.photos/200/314", price: 1.99 },
    { id: 16, name: "Canned Tomatoes", category: "pantry", description: "Canned tomatoes for cooking.", image: "https://picsum.photos/200/315", price: 1.49 },
    { id: 17, name: "Frozen Pizza", category: "frozen", description: "Ready-to-cook frozen pizza with various toppings.", image: "https://picsum.photos/200/316", price: 7.99 },
    { id: 18, name: "Rice (Basmati)", category: "pantry", description: "Aromatic basmati rice.", image: "https://picsum.photos/200/317", price: 3.49 },
    { id: 19, name: "Cheddar Cheese", category: "dairy", description: "Sharp cheddar cheese.", image: "https://picsum.photos/200/318", price: 4.99 },
    { id: 20, name: "Coffee Beans", category: "beverages", description: "Freshly roasted coffee beans.", image: "https://picsum.photos/200/319", price: 12.99 },
    { id: 21, name: "Oatmeal", category: "pantry", description: "Healthy oatmeal for breakfast.", image: "https://picsum.photos/200/320", price: 2.99 },
    { id: 22, name: "Butter", category: "dairy", description: "Rich, creamy butter.", image: "https://picsum.photos/200/321", price: 3.99 },
    { id: 23, name: "Bagels", category: "bakery", description: "Soft, chewy bagels in different flavors.", image: "https://picsum.photos/200/322", price: 4.49 },
    { id: 24, name: "Almonds", category: "snacks", description: "Roasted almonds, great for snacking.", image: "https://picsum.photos/200/323", price: 6.99 },
    { id: 25, name: "Olive Oil", category: "pantry", description: "Extra virgin olive oil for cooking.", image: "https://picsum.photos/200/324", price: 8.99 },
    { id: 26, name: "Honey", category: "pantry", description: "Pure honey from local bees.", image: "https://picsum.photos/200/325", price: 5.99 },
    { id: 27, name: "Frozen Vegetables", category: "frozen", description: "Mixed vegetables for easy cooking.", image: "https://picsum.photos/200/326", price: 2.99 },
    { id: 28, name: "Toilet Paper", category: "household", description: "Essential household toilet paper.", image: "https://picsum.photos/200/327", price: 1.99 },
    { id: 29, name: "Dish Soap", category: "household", description: "Effective dish soap for cleaning.", image: "https://picsum.photos/200/328", price: 2.49 },
    { id: 30, name: "Laundry Detergent", category: "household", description: "Powerful laundry detergent for all fabrics.", image: "https://picsum.photos/200/329", price: 8.49 },
    { id: 31, name: "Pet Food (Dog)", category: "pets", description: "Nutritional dog food.", image: "https://picsum.photos/200/330", price: 24.99 },
    { id: 32, name: "Pet Food (Cat)", category: "pets", description: "Balanced cat food.", image: "https://picsum.photos/200/331", price: 19.99 },
    { id: 33, name: "Snacks (Chips)", category: "snacks", description: "Variety of potato chips.", image: "https://picsum.photos/200/332", price: 2.99 },
    { id: 34, name: "Granola Bars", category: "snacks", description: "Energy-boosting granola bars.", image: "https://picsum.photos/200/333", price: 4.99 },
    { id: 35, name: "Juice (Apple)", category: "beverages", description: "Refreshing apple juice.", image: "https://picsum.photos/200/334", price: 2.49 },
    { id: 36, name: "Frozen Fruit", category: "frozen", description: "Mixed frozen fruit for smoothies.", image: "https://picsum.photos/200/335", price: 3.49 },
    { id: 37, name: "Bread Rolls", category: "bakery", description: "Soft bread rolls for sandwiches.", image: "https://picsum.photos/200/336", price: 2.99 },
    { id: 38, name: "Pancake Mix", category: "pantry", description: "Easy-to-make pancake mix.", image: "https://picsum.photos/200/337", price: 3.99 },
    { id: 39, name: "Syrup", category: "pantry", description: "Maple syrup for pancakes.", image: "https://picsum.photos/200/338", price: 4.99 },
    { id: 40, name: "Cereal", category: "pantry", description: "Breakfast cereal in various flavors.", image: "https://picsum.photos/200/339", price: 3.49 },
    { id: 41, name: "Cooking Spray", category: "pantry", description: "Non-stick cooking spray.", image: "https://picsum.photos/200/340", price: 2.99 },
    { id: 42, name: "Nuts (Mixed)", category: "snacks", description: "Healthy mixed nuts.", image: "https://picsum.photos/200/341", price: 6.49 },
    { id: 43, name: "Chocolates", category: "snacks", description: "Assorted chocolates for a sweet treat.", image: "https://picsum.photos/200/342", price: 5.99 },
    { id: 44, name: "Energy Drinks", category: "beverages", description: "Revitalizing energy drinks.", image: "https://picsum.photos/200/343", price: 1.99 },
    { id: 45, name: "Canned Beans", category: "pantry", description: "Canned beans for quick meals.", image: "https://picsum.photos/200/344", price: 1.49 },
    { id: 46, name: "Pizza Rolls", category: "frozen", description: "Frozen pizza rolls, quick and easy snack.", image: "https://picsum.photos/200/345", price: 4.49 },
    { id: 47, name: "Frozen Dinner", category: "frozen", description: "Frozen dinner options, easy to prepare.", image: "https://picsum.photos/200/346", price: 5.99 },
    { id: 48, name: "Bacon", category: "meat", description: "Crispy bacon strips.", image: "https://picsum.photos/200/347", price: 6.99 },
    { id: 49, name: "Salmon", category: "meat", description: "Fresh salmon fillets.", image: "https://picsum.photos/200/348", price: 9.99 },
    { id: 50, name: "Vegetable Oil", category: "pantry", description: "Cooking oil for all your needs.", image: "https://picsum.photos/200/349", price: 3.99 },
];

// Define the /api/products route
router.get('/products', (req, res) => {
    res.json(products); // Send the product data as a JSON response
});

// Export the router
module.exports = router;
