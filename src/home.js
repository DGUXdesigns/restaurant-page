export function displayHome() {
    const content = document.querySelector('#content');

    content.innerHTML = ''; // Clear existing content
    

    const heroSection = document.createElement('section');
    heroSection.id = 'hero-section';

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'The Burger Lab';

    heroSection.appendChild(title);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    heroSection.appendChild(cardDiv);

    const headline = document.createElement('h2');
    headline.innerHTML = 'Where Innovation<br>Meets Flavor';

    const description = document.createElement('p');
    description.textContent = "At The Burger Lab, we're passionate about pushing the boundaries of flavor. From our signature blends to bold, innovative toppings, every burger is a delicious experiment worth tasting."

    const cta = document.createElement('div');
    cta.classList.add('cta');

    const reservationButton = document.createElement('button');
    reservationButton.classList.add('reservation');
    reservationButton.textContent = 'Book A Reservation';

    const orderButton = document.createElement('button');
    orderButton.classList.add('order');
    orderButton.textContent = 'Order Online';

    const footer = document.createElement('footer');

    const schedule = document.createElement('div');
    schedule.classList.add('hours');

    const workingDays = document.createElement('p');
    workingDays.innerHTML = '<p>Monday - Saturday<br>11:00 - 23:00</p>';

    const location = document.createElement('div');
    location.innerHTML = '<p>24 Forest Hill Dr, Richmond hill<br>ON L4B 3C1</p>';


    content.appendChild(heroSection);
    cardDiv.appendChild(headline);
    cardDiv.appendChild(description);
    cardDiv.appendChild(cta);
    cta.appendChild(reservationButton);
    cta.appendChild(orderButton);
    content.appendChild(footer);
    footer.appendChild(schedule);
    schedule.appendChild(workingDays);
    footer.appendChild(location);
}