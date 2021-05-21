
let aatroxString = '{"name": "Aatrox", "Traits": ["Redeemed", "Legionnaire"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/aatrox.jpg"}';
let gragasString = '{"name": "Gragas", "Traits": ["Dawnbringer", "Brawler"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/gragas.jpg"}';
let leonaString =  '{"name": "Lenoa", "Traits": ["Redeemed", "Knight"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/leona.jpg"}';
let kalistaString = '{"name": "Kalista", "Traits": ["Abomination", "Legionnaire"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/kalista.jpg"}';
let khazixString = '{"name": "KhaZix", "Traits": ["Dawnbringer", "Assassin"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/khazix.jpg"}';
let kledString = '{"name": "Kled", "Traits": ["Hellion", "Cavalier"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/kled.jpg"}';
let lissandraString = '{"name": "Lissandra", "Traits": ["Coven", "Renewer"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/lissandra.jpg"}';
let poppyString = '{"name": "Poppy", "Traits": ["Hellion", "Knight"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/poppy.jpg"}';
let udyrString = '{"name": "Udyr", "Traits": ["Draconic", "Skirmisher"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/udyr.jpg"}';
let vayneString = '{"name": "Vayne", "Traits": ["Forgotten", "Ranger"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/vayne.jpg"}';
let vladimirString = '{"name": "Vladimir", "Traits": ["Nightbringer", "Renewer"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/vladimir.jpg"}';
let warwickString = '{"name": "Warwick", "Traits": ["Forgotten", "Brawler"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/warwick.jpg"}';
let ziggsString = '{"name": "Ziggs", "Traits": ["Dawnbringer", "Assassin"], "Price": "1", "URL": "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set5/ziggs.jpg"}';

let aatrox = JSON.parse(aatroxString);
let gragas = JSON.parse(gragasString);
let leona = JSON.parse(leonaString);
let kalista = JSON.parse(kalistaString);
let khazix = JSON.parse(khazixString);
let kled = JSON.parse(kledString);
let lissandra = JSON.parse(lissandraString);
let poppy = JSON.parse(poppyString);
let udyr = JSON.parse(udyrString);
let vayne = JSON.parse(vayneString);
let vladimir = JSON.parse(vladimirString);
let warwick = JSON.parse(warwickString);
let ziggs = JSON.parse(ziggsString);

let initialCardArray = []

initialCardArray.push(aatrox,gragas,leona,kalista,khazix,kled,lissandra,poppy,udyr,vladimir,warwick,ziggs)

console.log(aatrox,gragas,leona,kalista,khazix,kled,lissandra,poppy,udyr,vayne,vladimir,warwick,ziggs);


document.getElementById("Reload").addEventListener("click", function() {
    resetInitialCard();
});


function resetInitialCard(){
    for (let card of initialCardArray) {
        let currentCard = document.getElementById("current-card-list");
        let tempNode = document.querySelector("div[data-type='template']").cloneNode(true);
        let traitDiv = tempNode.querySelector(".traits");

        for (let i=0; i < card['Traits'].length; i++) {
            let newTrait = document.createElement('div');
            newTrait.className = "traits" + (i+1);
            newTrait.textContent = cardAddedTraits[i];
            traitDiv.appendChild(newTrait);
        }

        let nameCoinDiv = tempNode.querySelector(".name-coin");
        let name = nameCoinDiv.querySelector(".card-name");
        name.setAttribute("class",card['name']+"-name");
        name.textContent = card['name'];
        let coin = nameCoinDiv.querySelector(".coin");
        coin.childNodes[1] = card['Price'];

        tempNode.removeAttribute("style");
        tempNode.removeAttribute("data-type");
        tempNode.setAttribute("class", card['name']);
        tempNode.style.background = 'url('+card['URL']+')';
        tempNode.style.backgroundRepeat = "no-repeat";
        tempNode.style.backgroundSize = "cover";

        currentCard.appendChild(tempNode);
    }
}


