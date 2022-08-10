


let addButton = document.querySelector("#mySaddButton");
let inputText = document.querySelector("#mySinputText");

let numberOfToDos = 0;

let getInput = function(){
    return inputText.value;
};

let addTodo = function(userInput){
    
    numberOfToDos++;

    let cardId = Math.random();
    let deleteButtonId = Math.random();


    let card = document.createElement("div");
    card.classList.add("card");
    card.id = cardId;


    let headerDiv = document.createElement("div");
    headerDiv.classList.add("card-header");
    headerDiv.innerText = "To Do Number #" +String(numberOfToDos);

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    let text = document.createElement("p");
    text.classList.add("card-text");
    text.innerText = userInput;

    let deleteButton = document.createElement("a");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.id=deleteButtonId;
    deleteButton.href="#";
    deleteButton.innerText = "Delete";



    card.appendChild(headerDiv);
    card.appendChild(cardBodyDiv);

    cardBodyDiv.appendChild(text);
    cardBodyDiv.appendChild(deleteButton);
    

    document.querySelector("#mySlistArea").append(card);

    

    deleteButton.addEventListener("click", ()=> {
        document.getElementById(cardId).remove();
        numberOfToDos--;
    })

};

addButton.addEventListener("click",()=>addTodo(getInput()));