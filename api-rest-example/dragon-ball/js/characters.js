const API_URL = "https://dragonball-api.com/api/characters";
const charactersContainer = document.getElementById("characters-container");

function createCharacterCard(character) {
    const card = document.createElement("article");
    card.classList.add("character-card");

    card.innerHTML = `
        <img
            src="${character.image}"
            alt="${character.name}"
        >

        <h3>${character.id}</h3>
        <h2>${character.name}</h2>

        <p>
            Género: ${character.gender}
        </p>
    `;

    card.addEventListener(
        "click", 
        () => { 
            window.location.href = `character-detail.html?identifier=${character.id}`; });

    return card;
}


async function getCharacters() {

    const response = await fetch(API_URL);

    const data = await response.json();

    console.log("Respuesta de la API:", data);

    charactersContainer.innerHTML = "";

    data.items.forEach(character => {
        const card = createCharacterCard(character);
        charactersContainer.appendChild(card);
    });
}

getCharacters();