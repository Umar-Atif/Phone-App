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
    <span class = "quantity" id = "quantity-${index}"> ${item.quantity} </span>
    <button class = "btn plus-minus-btn" onclick = "minus(${index})">-</button>
    </span></h4>
    <div class = "d-flex gap-2">
    <button class = "btn btn-success" onclick = "buy(${index})">Order</button>
    <button class="btn btn-danger" onclick="deleteItem()">Delete</button></div>
    </div>`
})

function plus(index) {
    const quantity = document.getElementById(`quantity-${index}`);
    quantity.innerHTML++
}

function minus(index) {
    const quantity = document.getElementById(`quantity-${index}`);
        quantity.innerHTML--;

    if(quantity.innerHTML == 0){
        const collectData = localStorage.getItem("mobile");
        const cart = JSON.parse(collectData);
        cart.splice(index, 1);
        localStorage.setItem("mobile", JSON.stringify(cart));
        location.reload();
    }
}

function buy() {
    Swal.fire({
        icon: "success",
        title: "Order Placed!",
        timer: 1500
    });
}

function deleteItem(index) {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            const collectData = localStorage.getItem("mobile");
            const cart = JSON.parse(collectData);
            cart.splice(index, 1);
            localStorage.setItem("mobile", JSON.stringify(cart));
            location.reload();
        }
      });
}