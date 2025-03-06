

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        var i=0;
        items = data.products;
        items.forEach(product => {
            if (i<10) {
                const product_section = document.getElementById("products-section");
                const container = document.createElement("div");
                const title = document.createElement("h2");
                const image = document.createElement("img");
                const price = document.createElement("h3");
                const rating = document.createElement("h3");
                const paragraph = document.createElement("p");
                    
                title.textContent = product.title;
                image.src = product.thumbnail;
                paragraph.textContent = product.description;
                price.textContent = "Price: " + product.price;
                rating.textContent = "Rating: " + product.rating;
    
                container.appendChild(title);
                container.appendChild(image);
                container.appendChild(price);
                container.appendChild(rating);
                container.appendChild(paragraph);

                product_section.appendChild(container);
                i++;
            }
        });
    });