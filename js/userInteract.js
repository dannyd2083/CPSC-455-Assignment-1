let cardAddedName;
let cardAddedPrice;
let cardAddedURL;
let cardAddedTraits = [];
let form = document.getElementById("userInput");
console.log(form);

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault() //prevents the form from autosubmitting
        cardAddedName = document.getElementById('Name').value;
        console.log(cardAddedName);
        cardAddedPrice = document.getElementById('Price').value;
        cardAddedURL = document.getElementById('URL').value;
        let tempString = document.getElementById('Traits').value;
        console.log(tempString);
        cardAddedTraits = tempString.split(',');
        console.log(cardAddedTraits);
        addCard();
    })
}

function addCard (){
    console.log("hello this is add card function!");
    console.log(cardAddedTraits,cardAddedName,cardAddedURL,cardAddedPrice)

    let currentCard = document.getElementById("current-card-list");

    console.log(currentCard);

    let tempNode = document.querySelector("div[data-type='template']").cloneNode(true);

    console.log(tempNode);

    let traitDiv = tempNode.querySelector(".traits");

    console.log(traitDiv);
    console.log(cardAddedTraits.length);

    for (let i=0; i < cardAddedTraits.length; i++) {
        console.log("into the loop");
        let newTrait = document.createElement('div');
        newTrait.className = "traits" + (i+1);
        newTrait.textContent = cardAddedTraits[i];
        traitDiv.appendChild(newTrait);
    }

    console.log(traitDiv);

    let nameCoinDiv = tempNode.querySelector(".name-coin");
    let name = nameCoinDiv.querySelector(".card-name");
    name.setAttribute("class",cardAddedName+"-name");
    name.textContent = cardAddedName;
    let coin = nameCoinDiv.querySelector(".coin");
    coin.childNodes[1] = cardAddedPrice;

    tempNode.removeAttribute("style");
    tempNode.removeAttribute("data-type");
    tempNode.setAttribute("class", cardAddedName);

    console.log(tempNode);

    currentCard.appendChild(tempNode);

}
