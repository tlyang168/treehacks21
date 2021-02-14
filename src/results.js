let foodItems = [];

const addFoodItem = (ev) => {
    ev.preventDefault();
    let foodItem = {
        item : document.getElementById('food-item').value
    }
    foodItems.push(foodItem);
    document.forms[0].reset();

    console.warn('added', {foodItems})

    localStorage.setItem('foodItemList', JSON.stringify(foodItems))
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addFoodItem)
});