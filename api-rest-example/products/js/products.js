const PRODUCTS_API =
    "https://fakestoreapi.com/products?limit=5";

const productsContainer = document.getElementById(
    "products-container"
);

function createProductCard(product) {
    const card = document.createElement("article");

    card.classList.add("character-card");

    card.style.cursor = "pointer";

    card.innerHTML = `
        <img
            src="${product.image}"
            alt="${product.title}"
        >

        <h2>${product.title}</h2>

        <p>
            Categoría: ${product.category}
        </p>

        <p>
            Precio: $${product.price}
        </p>

        <p>
            <strong>
                Presiona para ver detalles
            </strong>
        </p>
    `;

    card.addEventListener("click", () => {
        window.location.href =
            `product-detail.html?id=${product.id}`;
    });

    return card;
}

async function getProducts() {
    try {
        const response = await fetch(
            PRODUCTS_API
        );

        if (!response.ok) {
            throw new Error(
                "No se pudieron obtener los productos"
            );
        }

        const data = await response.json();

        productsContainer.innerHTML = "";

        data.forEach(product => {
            const card = createProductCard(product);

            productsContainer.appendChild(card);
        });

    } catch (error) {
        console.error(error);

        productsContainer.innerHTML = `
            <p>
                No fue posible cargar los productos.
            </p>
        `;
    }
}

getProducts();