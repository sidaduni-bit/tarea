const params = new URLSearchParams(
    window.location.search
);

const productId = params.get("id");

const productDetailContainer =
    document.getElementById("product-detail");

async function getProductDetail() {
    try {
        if (!productId) {
            throw new Error(
                "No se seleccionó ningún producto"
            );
        }

        const response = await fetch(
            `https://fakestoreapi.com/products/${productId}`
        );

        if (!response.ok) {
            throw new Error(
                "No se encontró el producto"
            );
        }

        const product = await response.json();

        productDetailContainer.innerHTML = `
            <article class="character-card">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                    style="object-fit: contain;"
                >

                <h1>${product.title}</h1>

                <p>
                    <strong>Categoría:</strong>
                    ${product.category}
                </p>

                <p>
                    <strong>Precio:</strong>
                    $${product.price}
                </p>

                <p>
                    <strong>Descripción:</strong>
                    ${product.description}
                </p>

                <p>
                    <strong>Calificación:</strong>
                    ${product.rating.rate} de 5
                </p>

                <p>
                    <strong>Opiniones:</strong>
                    ${product.rating.count}
                </p>

            </article>
        `;

    } catch (error) {
        console.error(error);

        productDetailContainer.innerHTML = `
            <p>No fue posible cargar el producto.</p>
        `;
    }
}

getProductDetail();