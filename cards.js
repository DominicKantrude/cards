
document.querySelector("#containerElement").addEventListener("click", notSurewhatToNameYet);

let uniqueButtonID = 0;
document.querySelector("#create").addEventListener("click", factory);

function factory(event) {
    document.querySelector("#containerElement").appendChild(createNewDeleteButtonElement());
    uniqueButtonID++;
    document.querySelector("#textToInsert").value = "";

}

const createNewDeleteButtonElement = () => {
    let texttoinsert = document.querySelector("#textToInsert").value;
    var newElement = document.createElement("section");
    newElement.setAttribute("class", "newContainer");
    newElement.setAttribute("id", `delete-section--${uniqueButtonID}`);
    newElement.innerHTML = `<p>${texttoinsert}</p>
    <button id="delete-button--${uniqueButtonID}"class="deleteButton">Delete</button>`;

    return newElement;
}

function notSurewhatToNameYet() {

    if (event.target.id.split("--")[0] === "delete-button") {
        let element = document.querySelector(`#delete-section--${event.target.id.split("--")[1]}`).remove();
    }
}



