import createAboutPage from "./about";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


const createTabs = () =>  {
    const navigation = document.getElementById("navigation");

    // create buttons
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");

    // set ids for buttons
    button1.setAttribute("id", "home-button");
    button2.setAttribute("id", "menu-button");
    button3.setAttribute("id", "about-button");

    // set classes on buttons for styling
    button1.classList.add("button");
    button2.classList.add("button");
    button3.classList.add("button");

    // add text
    button1.textContent = "Home";
    button2.textContent = "Menu";
    button3.textContent = "About";

    navigation.appendChild(button1);
    navigation.appendChild(button2);
    navigation.appendChild(button3);

    button1.addEventListener("click", () => {
        clearContent();
        createRestaurantHomePage();
    })
    button2.addEventListener("click", () => {
        clearContent();
        createMenuPage();
    })
    button3.addEventListener("click", () => {
        clearContent();
        createAboutPage();
    })
}

function clearContent() {
    const content = document.getElementById("content");
    content.textContent = "";
}


export default createTabs;