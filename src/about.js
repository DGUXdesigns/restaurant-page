export function displayAbout() {
    const content = document.querySelector('#content');
    content.innerHTML = ''

    const about = createAboutContainer();

    content.appendChild(about);
}

function createAboutContainer() {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const welcome = createWelcome();
    const coreValues = createCoreValues();
    const join = createJoin();

    aboutContainer.appendChild(welcome);
    aboutContainer.appendChild(coreValues);
    aboutContainer.appendChild(join);

    return aboutContainer;
}

function createWelcome() {
    const welcomeContainer = document.createElement('div');
    welcomeContainer.classList.add('welcome');

    const headline = document.createElement('h2');
    headline.textContent = 'Welcome to the burger Lab';

    const message = document.createElement('p');
    message.textContent = 'What started as a small idea in a home kitchen has grown into a full-fledged burger revolution. Our founder, a food enthusiast with a love for experimentation, spent years perfecting the art of the burger. Drawing inspiration from international flavors and a deep appreciation for local ingredients, The Burger Lab was born. Each burger on our menu is a carefully crafted creation, blending unexpected flavors and techniques to surprise and delight your taste buds';

    welcomeContainer.appendChild(headline);
    welcomeContainer.appendChild(message);

    return welcomeContainer;
}

function createCoreValues() {
    const coreValues = document.createElement('div');
    coreValues.classList.add('core-values');

    const quality = createQuality();
    const philosophy = createPhilosophy();

    coreValues.appendChild(quality);
    coreValues.appendChild(philosophy);

    return coreValues;
}

function createQuality() {
    const qualityContainer = document.createElement('div');
    qualityContainer.classList.add('quality');

    const headline = document.createElement('h3');
    headline.textContent = 'Qaulity Ingredients, Unmatched Flavour';

    const message = document.createElement('p');
    message.textContent = "We believe that great burgers start with great ingredients. That's why we use only the freshest, locally sourced produce, handpicked meats, and artisan buns. Our dedication to quality extends beyond just the food - from the condiments we create in-house to the hand-cut fries that accompany every meal, everything at The Burger Lab is designed with love and care.";

    qualityContainer.appendChild(headline);
    qualityContainer.appendChild(message);

    return qualityContainer;
}

function createPhilosophy() {
    const philosophyContainer = document.createElement('div');
    philosophyContainer.classList.add('philosophy');

    const headline = document.createElement('h3');
    headline.textContent = 'The Perfect Burger';

    const message = document.createElement('p');
    message.textContent = "A perfect burger is about balance - it's the harmony between the flavors, textures, and ingredients. From our classic burgers to our wild and experimental creations, we strive for that ideal combination. Whether you're a fan of smoky barbecue, spicy heat, or savory umami, we've got something that will make your burger dreams come true.";

    philosophyContainer.appendChild(headline);
    philosophyContainer.appendChild(message);

    return philosophyContainer;
}

function createJoin() {
    const joinContainer = document.createElement('div');
    joinContainer.classList.add('join');

    const headline = document.createElement('h3');
    headline.textContent = 'Join the Lab';

    const message = document.createElement('p');
    message.textContent = "Come visit us at The Burger Lab, where the experiments never stop. Each visit is an opportunity to try something new, whether it's a limited-time special or an all-time favorite. We encourage you to be bold, try something outside your comfort zone, and explore a world of flavors that are always fresh and exciting.";

    joinContainer.appendChild(headline);
    joinContainer.appendChild(message);

    return joinContainer;
}

