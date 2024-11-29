export function displayMenu() {
    console.log('i am running');
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const menu = createMenu();

    content.appendChild(menu);
}

function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const itemOne = createItemOne();
    const itemTwo = createItemTwo();
    const itemThree = createItemThree();
    const itemFour = createItemFour();
    const itemFive = createItemFive();

    menuContainer.appendChild(itemOne);
    menuContainer.appendChild(itemTwo);
    menuContainer.appendChild(itemThree);
    menuContainer.appendChild(itemFour);
    menuContainer.appendChild(itemFive);

    return menuContainer;
}

function createItemOne() {
    const menuItemOne = document.createElement('div');
    menuItemOne.classList.add('menu-item1');

    const burgerOne = document.createElement('h3');
    burgerOne.textContent = 'The Classic Chemist';

    const burgerOneDescription = document.createElement('p');
    burgerOneDescription.textContent = 'A juicy beef patty, crisp lettuce, vine-ripened tomatoes, cheddar cheese, and our signature Lab Sauce, all on a toasted brioche bun';

    menuItemOne.appendChild(burgerOne);
    menuItemOne.appendChild(burgerOneDescription);

    return menuItemOne;
}

function createItemTwo() {
    const menuItemTwo = document.createElement('div');
    menuItemTwo.classList.add('menu-item2');

    const burgerTwo = document.createElement('h3');
    burgerTwo.textContent = 'Atomic Bliss';

    const burgerTwoDescription = document.createElement('p');
    burgerTwoDescription.textContent = 'A flame-grilled patty topped with crispy onion rings, melted smoked gouda, tangy BBQ sauce, and pickles';

    menuItemTwo.appendChild(burgerTwo);
    menuItemTwo.appendChild(burgerTwoDescription);

    return menuItemTwo;
}

function createItemThree() {
    const menuItemThree = document.createElement('div');
    menuItemThree.classList.add('menu-item3');

    const burgerThree = document.createElement('h3');
    burgerThree.textContent = 'Double Helix Deluxe';

    const burgerThreeDescription = document.createElement('p');
    burgerThreeDescription.textContent = 'A spicy beef patty infused with jalapeños, pepper jack cheese, chipotle mayo, fresh avocado slices, and a dash of hot sauce.';

    menuItemThree.appendChild(burgerThree);
    menuItemThree.appendChild(burgerThreeDescription);

    return menuItemThree;
}

function createItemFour() {
    const menuItemFour = document.createElement('div');
    menuItemFour.classList.add('menu-item4');

    const burgerFour = document.createElement('h3');
    burgerFour.textContent = 'The Lab Reactor';

    const burgerFourDescription = document.createElement('p');
    burgerFourDescription.textContent = 'Two stacked patties, American cheese, caramelized onions, crispy bacon, and garlic aioli, sandwiched between a buttery pretzel bun.';

    menuItemFour.appendChild(burgerFour);
    menuItemFour.appendChild(burgerFourDescription);

    return menuItemFour;
}

function createItemFive() {
    const menuItemFive = document.createElement('div');
    menuItemFive.classList.add('menu-item5');

    const burgerFive = document.createElement('h3');
    burgerFive.textContent = 'The Veggie Experiment';

    const burgerFiveDescription = document.createElement('p');
    burgerFiveDescription.textContent = 'A savory black bean patty, arugula, roasted red peppers, feta cheese, and basil aioli, served on a whole grain bun.';

    menuItemFive.appendChild(burgerFive);
    menuItemFive.appendChild(burgerFiveDescription);

    return menuItemFive;
}