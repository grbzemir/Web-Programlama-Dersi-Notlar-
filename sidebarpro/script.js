//geçici kullanici verileri
const users = [];

//sidebar açılma ve kapanma fonksiyonlaarı
document.getElementById("sideBarToggle").addEventListener("click", function () {
    document.getElementById("sidebar").style.left = "0"; //sağa kaydırarak aç
    document.body.style.marginLeft = "250px"; // sidebarın görünmesini sağlar
});

document.getElementById("sidebarClose").addEventListener("click", function () {
    document.getElementById("sidebar").style.left = "-250px"; //sidebarı açtığı kadar gizler
    document.body.style.marginLeft = "0";  // sayfayi eski haline geri getirir.

});

//Giriş yapma
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Giris Basarili");
        window.location.href = "ders.html";
    }
    else {
        alert("kullanici adi veya şifre hatali");
    }
}
function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (username && password) {
        users.push({ username, password }); // yeni kullanci verisi diziye eklenecek
        alert("kayit basarili");
        closeRegisterModal();
    }
    else {
        alert("lütfen tüm alanları doldurunuz");
    }
}
function registerModal() {
    document.getElementById("registerModal").style.display = "flex";
}
function closeRegisterModal() {
    document.getElementById("registerModal").style.display = "none";
}

