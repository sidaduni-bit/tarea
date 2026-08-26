const API_URL = "https://www.demonslayer-api.com/api/v1/characters";

const characterDetailContainer = document.getElementById("character-detail");
const params = new URLSearchParams(window.location.search);
const characterId = params.get("id");


async function getCharacterDetail() {

    const response = await fetch(API_URL + "?id=" + characterId);
    const data = await response.json();
    console.log("Respuesta de la API:", data);

    characterDetailContainer.innerHTML = "";

    data.content.forEach(character => {
        const card = createCharacterCard(character);
        characterDetailContainer.appendChild(card);
    });
}


function createCharacterCard(character) {
    const card = document.createElement("article");
    card.classList.add("character-card");

    card.innerHTML = `
        <img
            src="${character.img}"
            alt="${character.name}"
        >

        <h2>${character.name}</h2>
        <h3>${character.id}</h3>

        <p>
            Edad: ${character.age}
        </p>
    `;



    return card;
}

getCharacterDetail();