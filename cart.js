const collectData = localStorage.getItem("mobile");
const convert = JSON.parse(collectData)

const output2 = document.querySelector(".container")

convert.map((item , index) => {
    output2.innerHTML +=`
    <div id = "card">
    <img src = "${item.image}" width="100px">
    <h3>${item.brand} ${item.model}</h3>
    <h4>Storage: ${item.ram} / ${item.rom}</h4>
    <h4>Camera: ${item.camera}</h4>
    <h4>Price: <span class="price-span">$${item.price}</span></h4>
    <h4>Quantity: <span class = "btn-span">
    <button class = "btn plus-minus-btn" onclick = "plus(${index})">+</button>
    <span class = "quantity" id = "quantity-${index}"> 1 </span>
    <button class = "btn plus-minus-btn" onclick = "minus(${index})">-</button>
    </span></h4>
    <button class = "btn addToCart-btn" onclick = "buy()">Order</button>
    </div>`
})

function plus(index) {
    const quantity = document.getElementById(`quantity-${index}`);
    quantity.innerHTML++
}

function minus(index) {
    const quantity = document.getElementById(`quantity-${index}`);
    if (quantity.innerHTML > 1) {
        quantity.innerHTML--;
    }
}

function buy() {
    Swal.fire({
        icon: "success",
        title: "Order Placed!",
        timer: 1500
    });
}