const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const ingredientsEl = document.querySelector('#ingredients')
const tegEl = ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
    return itemEl
});
ingredientsEl.append(...tegEl);
console.log(ingredientsEl)