const createMenuPage = () => {
    const content = document.getElementById("content");

    const divHeader = document.createElement("h1");
    divHeader.innerText = "Our Menu";
    content.appendChild(divHeader);

    const menuList = document.createElement("ul");
    content.appendChild(menuList);

    const menuItem1 = document.createElement("li");
    const menuItem2 = document.createElement("li");
    const menuItem3 = document.createElement("li");
    const menuItem4 = document.createElement("li");
    const menuItem5 = document.createElement("li");
    const menuItem6 = document.createElement("li");

    menuItem1.textContent = "Latte";
    menuItem2.textContent = "Cappuccino";
    menuItem3.textContent = "Americano";
    menuItem4.textContent = "Espresso";
    menuItem5.textContent = "Tea";
    menuItem6.textContent = "Hot Chocolate";

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);
    menuList.appendChild(menuItem5);
    menuList.appendChild(menuItem6);
}

export default createMenuPage;