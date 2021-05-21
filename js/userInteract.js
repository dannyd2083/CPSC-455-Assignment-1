let cardAddedName;
let cardAddedPrice;
let cardAddedURL;
let cardAddedTraits = [];
let form = document.getElementById("userInput");
console.log(form);

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); //prevents the form from autosubmitting
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

document.getElementById("DeleteAll").addEventListener("click", function() {
    let currentCard = document.getElementById("current-card-list");
    currentCard.innerHTML = '';
});


function addCard (){
    console.log("hello this is add card function!");
    console.log(cardAddedTraits,cardAddedName,cardAddedURL,cardAddedPrice)

    let currentCard = document.getElementById("current-card-list");

    console.log(currentCard);

    //clone a template then edit it
    let tempNode = document.querySelector("div[data-type='template']").cloneNode(true);

    //Deal with the Traits
    let traitDiv = tempNode.querySelector(".traits");
    for (let i=0; i < cardAddedTraits.length; i++) {
        console.log("into the loop");
        let newTrait = document.createElement('div');
        newTrait.className = "traits" + (i+1);
        newTrait.textContent = cardAddedTraits[i];
        traitDiv.appendChild(newTrait);
    }

    //====================
    //Coin and Name
    let nameCoinDiv = tempNode.querySelector(".name-coin");
    let name = nameCoinDiv.querySelector(".card-name");
    name.setAttribute("class",cardAddedName+"-name");
    name.textContent = cardAddedName;


    //deal with the price tag,delete the original one entirely then create new one
    let coin = nameCoinDiv.querySelector(".coin");
    coin.innerHTML = '';
    let coinIcon = document.createElement("img");
    coinIcon.setAttribute('src','coin.png');
    coinIcon.setAttribute('width','20');
    coinIcon.setAttribute('height', '20');
    coin.appendChild(coinIcon);
    coin.innerHTML += cardAddedPrice;

    //Replace the redundant from the template
    tempNode.removeAttribute("style");
    tempNode.removeAttribute("data-type");

    //set the new div name and the background, since the style can't inherit from css somehow
    tempNode.setAttribute("class", cardAddedName);
    tempNode.style.background = 'url('+cardAddedURL+')';
    tempNode.style.backgroundRepeat = "no-repeat";
    tempNode.style.backgroundSize = "cover";

    console.log(tempNode);

    currentCard.appendChild(tempNode);
}




