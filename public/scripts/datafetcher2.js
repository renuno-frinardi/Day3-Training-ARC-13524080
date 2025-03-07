fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        var i=0;
        items = data.products;
        items.forEach(product => {
            if (i<10) {
                const product_section = document.getElementById("products-section");
                const container = document.createElement("div");
                const uname = document.createElement("h2");
                const comment = document.createElement("h3");
                    
                uname.textContent = product.username;
                comment.textContent = product.comment;
    
                container.appendChild(uname);
                container.appendChild(comment);

                product_section.appendChild(container);
                i++;
            }
        });
    });