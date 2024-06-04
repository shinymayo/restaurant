const createAboutPage = () => {
    const content = document.getElementById("content");

    const divHeader = document.createElement("h1");
    divHeader.innerText = "About us";
    content.appendChild(divHeader);

    const divDescription = document.createElement("p");
    divDescription.innerText =
      "For special orders see the menu and booking form below";
    content.appendChild(divDescription);
}

export default createAboutPage;