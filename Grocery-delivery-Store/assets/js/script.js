let Products = JSON.parse(localStorage.getItem("Product List")) || [];

let cart = JSON.parse(localStorage.getItem("Cart List")) || [];

let editIndex = null;

saveProducts = () =>{
    localStorage.setItem("Product List" ,JSON.stringify(Products));
};
saveCart = () =>{
    localStorage.setItem("Cart List" ,JSON.stringify(cart));
};

if (Products.length === 0) {
    Products = [
        {
            id: 1,
            Name: "Fresh Apples",
            category: "Fruits",
            price: 200,
            unit: "kg",
            image: "./assets/image/product/apple.jpg",
            desc: "Crisp and juicy apples straight from the farm."
        },
        {
            id: 2,
            Name: "Organic Carrots",
            category: "Vegetables",
            price: 80,
            unit: "kg",
            image: "./assets/image/product/carrot.jpg",
            desc: "Healthy and crunchy carrots for your daily meals."
        },
        {
            id: 3,
            Name: "Fresh Milk",
            category: "Dairy",
            price: 80,
            unit: "liter",
            image: "./assets/image/product/mik.jpg",
            desc: "Farm fresh milk packed with nutrients and calcium."
        },
        {
            id: 4,
            Name: "Mixed Nuts",
            category: "Snacks",
            price: 1199,
            unit: "pack",
            image: "./assets/image/product/nuts.avif",
            desc: "Healthy and tasty mixed nuts for a quick snack."
        }
    ];
    saveProducts();
};
addProduct = () =>{
    const form = document.getElementById("addProduct");
    const btn = document.getElementById("formBtn"); 
    const formTitle = document.getElementById("formTitle");
    if(!form){
        return;
    }

    form.addEventListener("submit" , function(e){
        e.preventDefault();
        const id = document.getElementById("productId").value.trim();
        const Name = document.getElementById("productName").value.trim();
        const category = document.getElementById("productCategory").value;
        const price = document.getElementById("productPrice").value.trim();
        const unit = document.getElementById("productUnit").value;
        const image = document.getElementById("productImage").value.trim();
        const desc = document.getElementById("productDescription").value.trim();

        if(id === "" ||Name === "" || category ==="" || price === "" || image === "" || desc === "" || unit===""){
            alert("Please Fill all Details");
            return;
        }
        let Product ={id , Name, category, price,unit,image,desc};

        if (editIndex === null) {
                Products.push(Product);
                alert("product Added Successfully...");
            }
            else {
                Products[editIndex] = Product;
                alert("product Updated successfully....");
                editIndex = null;

            }
            btn.textContent = "Add Product";
            formTitle.textContent = "Add New Product";
        form.reset();
        saveProducts();
        viewProduct();
        
    });

};

updateProduct = (index) =>{
    // document.getElementById("formTitle").textContent = "Update Product";
    document.getElementById("productId").value = Products[index].id;
    document.getElementById("productName").value = Products[index].Name;
    document.getElementById("productCategory").value = Products[index].category;
    document.getElementById("productPrice").value = Products[index].price;
    document.getElementById("productUnit").value = Products[index].unit;
    document.getElementById("productImage").value = Products[index].image;
    document.getElementById("productDescription").value = Products[index].desc;

    editIndex = index;

    document.getElementById("formBtn").textContent = "Update Product";
    document.getElementById("formTitle").textContent = "Update Product";

}

deleteProduct = (index) =>{
    Products.splice(index, 1);
    saveProducts();
    viewProduct();

}

viewProduct = () => {
    const productList = document.getElementById("productTable");
    if(!productList){
        return;
    }
    productList.innerHTML="";

    Products.forEach((p,index) => {
        const row = `
      <tr>
        <td>${p.id}</td>
        <td>${p.Name}</td>
        <td>${p.category}</td>
        <td>₹${p.price} / ${p.unit}</td>
        <td style="width: 125px;">
          <img src="${p.image}" class="img-fluid rounded w-100 object-fit-contain">
        </td>
        <td class="w-25">
            <div class="desc-text">${p.desc}</div>
        </td>
        <td>
          <a class="btn btn-sm btn-warning" href = "#productForm" onclick = "updateProduct(${index})">
                <i class="bi bi-pencil-square"></i> Edit 
          </a>
          <button class="btn btn-sm btn-danger" onclick = "deleteProduct(${index})">
            <i class="bi bi-trash"></i> Delete
          </button>
        </td>
      </tr>
    `;
    productList.innerHTML += row;
    });

};

displayProductsOnHome = () =>{
    const container = document.getElementById("homeProductList");

    if(!container){
        return;
    }
    container.innerHTML ="";

    Products.forEach(p =>{
        let card =`
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-img overflow-hidden h-100">
                                <img src="${p.image}"class="card-img-top w-100" alt="${p.Name}">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${p.Name}</h5>
                                <p class="card-text">${p.desc}.</p>
                                <p class="fw-bold text-success">${p.price} / ${p.unit}</p>
                                <div class="d-flex gap-3">
                                    <a href="#" class="btn btn-success w-100" onclick="addToCart('${p.id}')">Add to Cart</a>
                                    <a href="#" class="btn btn-outline-primary btn-custom flex-fill w-100" onclick="singleProductPage('${p.id}')">View Product</a>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
    container.innerHTML += card;
    })
};

addToCart = (id) =>{
    const cartProduct = Products.find(item => item.id == id);
    if(!cartProduct){
        return;
    }

    const existInCart = cart.find(c => c.id == id);

    if (existInCart) {
        existInCart.qty = (existInCart.qty || 1) + 1;
    }
    else{
        cart.push({
            ...cartProduct, qty: 1
        })
    }
    saveCart();
    alert(`${cartProduct.Name} Is Added In Cart`);
};

displayCart = () => {
    const cartTable = document.getElementById("cartTable");
    const grandTotalEl = document.getElementById("grandTotal");

    if (!cartTable) return;

    cartTable.innerHTML = "";
    let grandTotal = 0;

    if(cart.length === 0){
        cartTable.innerHTML =`
    <tr>
        <td colspan="7" class="text-center py-4 fs-5"><b>Your Cart Is Empty...<a href="index.html">Shop Now...</a></b></td>
    </tr>
    `;
    }

    cart.forEach((item, index) => {
        let total = item.price * item.qty;
        grandTotal += total;

        let row = `
          <tr>
            <td><img src="${item.image}" class="img-fluid rounded object-fit-cover" style="width:60px;height:60px;"></td>
            <td>${item.Name}</td>
            <td>${item.category}</td>
            <td>₹${item.price} / ${item.unit}</td>
            <td>
              <button class="btn btn-sm btn-outline-success" onclick="updateQty(${index}, -1)">-</button>
              <span class="mx-2">${item.qty}</span>
              <button class="btn btn-sm btn-outline-success" onclick="updateQty(${index}, 1)">+</button>
            </td>
            <td>₹${total}</td>
            <td>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteFromCart(${index})">
                    <i class="bi bi-x-lg"></i>
                </button>
            </td>
          </tr>
        `;
        cartTable.innerHTML += row;
    });

    grandTotalEl.textContent = grandTotal;
};

updateQty = (index,change) =>{
    if (cart[index].qty + change > 0) {
        cart[index].qty += change;
    }
    saveCart(); 
    displayCart();
};

deleteFromCart = (index) =>{
    if(!confirm(`Remove ${cart[index].Name} from Cart ?`)){
        return;
    }
    cart.splice(index, 1);
    saveCart();
    displayCart();
};

clearCart = () =>{
    if(!confirm(`Are You Sure To Clear All Cart..?`)){
        return;
    }
    cart = [];
    grandTotal = 0;

    saveCart();
    displayCart();
};

function loadSingleProductPage() {
    const detailsContainer = document.getElementById("productDetails");
    if (!detailsContainer){ 
        return;
    }; 

    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
    const product = Products.find(p => p.id == productId);

    if (product) {
        detailsContainer.innerHTML = `
          <div class="col-md-10">
            <div class="row product-card">
              <div class="col-md-5 p-3">
                <img src="${product.image}" alt="${product.Name}" class="product-image w-100 h-100 rounded-4 ">
              </div>
              <div class="col-md-7 product-body ps-4 ">
                <span class="badge-custom">Best Seller</span>
                <h2 class="product-title pt-3">${product.Name}</h2>
                <p class="product-category">${product.category}</p>
                
                <div class="rating mb-3">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                  <span class="text-muted">(120 reviews)</span>
                </div>

                <p>${product.desc}</p>
                <p><span class="text-success fw-bold"><i class="bi bi-check-circle"></i> In Stock</span></p>
                <p><i class="bi bi-truck"></i> Free Delivery in 2-3 days</p>
                
                <div class="product-price">₹${product.price} / ${product.unit}</div>
                
                <div class="d-flex gap-3 mt-4">
                  <button class="btn btn-success btn-custom flex-fill rounded-pill" onclick="addToCart(${product.id})">
                    <i class="bi bi-cart-plus"></i> Add to Cart
                  </button>
                  <a href="index.html" class="btn btn-outline-primary btn-custom flex-fill rounded-pill ">
                    <i class="bi bi-arrow-left"></i> Back to Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        `;
    }
}
document.addEventListener("DOMContentLoaded", loadSingleProductPage);
singleProductPage = (id) => {
  window.location.href = `singleProductPage.html?id=${id}`;
  
};

