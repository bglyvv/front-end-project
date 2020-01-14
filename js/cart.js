let addtocart = document.querySelector("header nav .icons .cartdiv");
let dropdown = document.querySelector("header nav .icons .cart-dropdown");
let cart_header = document.querySelector("header nav .icons .cart-dropdown .cart-header")

addtocart.onmouseenter = function () {
    let cart = JSON.parse(localStorage.getItem("cart"))
    if (cart.length == 0) {
        document.querySelector("header nav .icons .cart-dropdown").style.display = "block"
        document.querySelector("header nav .icons .cart-dropdown .cart-bottom").style.display = "none"
        let no_product = document.createElement("p")
        no_product.classList.add("text-center")
        no_product.innerText = "No product in the cart"
        document.querySelector("header nav .icons .cart-dropdown .cart-header").append(no_product)
    }


    for (let product of cart) {
        let img = document.createElement("img")
        img.setAttribute("src", product.Src)

        let name = document.createElement("h6")
        name.classList.add("product-name")
        name.innerText = product.Name

        let count = document.createElement("span")
        count.classList.add("quantity")
        count.innerText = product.Count

        let price = document.createElement("span")
        price.classList.add("amount")
        price.innerText = product.Price

        let remove = document.createElement("a")
        remove.setAttribute("href", "")
        remove.innerText = "x"
        remove.classList.add("remove")

        let image_holder = document.createElement("div")
        image_holder.classList.add("image-holder")
        image_holder.append(img)

        let info_holder = document.createElement("div")
        info_holder.classList.add("info-holder")
        info_holder.append(name, count, price, remove)

        let li = document.createElement("li")
        li.append(image_holder, info_holder)



        let ul = document.createElement("ul")
        ul.append(li)
        cart_header.append(ul)
        document.querySelector("header nav .icons .cart-dropdown").style.display = "block"
        document.querySelector("header nav .icons .cart-dropdown .cart-bottom").style.display = "block"



    }

    let remove = document.querySelectorAll(".remove")
    for (let x of remove) {
        x.onclick = function (event) {
            name = this.parentElement.firstElementChild.innerText
            for (let product of cart) {
                if (name.toLowerCase() == product.Name.toLowerCase()) {
                    let index = cart.indexOf(product)
                    cart.splice(index, 1)
                    localStorage.setItem("cart", JSON.stringify(cart));
                }
            }
        }

    }
}

addtocart.onmouseleave = function () {
    document.querySelector("header nav .icons .cart-dropdown .cart-header").innerText = ""
    document.querySelector("header nav .icons .cart-dropdown").style.display = "none"
}

