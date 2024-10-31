let totalPrice = 0;
let cartItems = [];
let registeredUsers = {};
let isLoggedIn = false;

function sepeteEkle(name, price) {
    if (!isLoggedIn) {
        alert("Lütfen önce giriş yapınız!");
        return;
    }
    cartItems.push({ name, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ₺${item.price}`;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Çıkar";
        removeBtn.onclick = () => removeFromCart(index);
        listItem.appendChild(removeBtn);
        cartList.appendChild(listItem);
    });
    document.getElementById("cart-total").textContent = totalPrice;
}

function removeFromCart(index) {
    totalPrice -= cartItems[index].price;
    cartItems.splice(index, 1);
    updateCart();
}

function clearCart() {
    cartItems = [];
    totalPrice = 0;
    updateCart();
}

function openRegister() {
    document.getElementById("register-form").style.display = "block";
}
function kapatRegister() {
    document.getElementById("register-form").style.display = "none";
}
function openLogin() {
    document.getElementById("login-form").style.display = "block";
}
function kapatLogin() {
    document.getElementById("login-form").style.display = "none";
}

function openCart() {
    if (!isLoggedIn) {
        alert("Lütfen önce giriş yapınız!");
        return;
    }
    document.getElementById("cart-section").style.display = "block";
    updateCart();
}
function kapatSepet() {
    document.getElementById("cart-section").style.display = "none";
}

function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    if (username && password) {
        registeredUsers[username] = password;
        alert("Kayıt başarılı!");
        document.getElementById("register-form").style.display = "none";
    } else {
        alert("Kullanıcı adı ve şifre giriniz!");
    }
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (registeredUsers[username] === password) {
        alert("Giriş başarılı!");
        isLoggedIn = true;
        document.getElementById("login-form").style.display = "none";
    } else {
        alert("Geçersiz kullanıcı adı veya şifre!");
    }
}
