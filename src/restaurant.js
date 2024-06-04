const createRestaurantHomePage = () => {
    const content = document.getElementById("content");

    const divHeader = document.createElement("h1");
    divHeader.innerText = "&feast";
    content.appendChild(divHeader);

    const divDescription = document.createElement("p");
    divDescription.innerText = "Get your daily coffee and pastry here";
    content.appendChild(divDescription);
}

export default createRestaurantHomePage;