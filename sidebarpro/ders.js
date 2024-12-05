// Sistem dersleri
const systemCourses = [
    "Matematik",
    "Türkçe",
    "Fizik",
    "Kimya",
    "Biyoloji"
];

document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.getElementById("register-btn");
    const loginBtn = document.getElementById("login-btn");
    const studentPanel = document.getElementById("student-panel");
    const authSection = document.getElementById("auth-section");
    const studentNameSpan = document.getElementById("student-name");
    const courseList = document.getElementById("course-list");
    const addedCourses = document.getElementById("added-courses");
    const generateReportBtn = document.getElementById("generate-report-btn");
    const logoutBtn = document.getElementById("logout-btn");

    const registerName = document.getElementById("register-name");
    const registerPassword = document.getElementById("register-password");
    const loginName = document.getElementById("login-name");
    const loginPassword = document.getElementById("login-password");

    // Dersleri ekrana yükleme
    systemCourses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course;
        const addButton = document.createElement("button");
        addButton.textContent = "Dersi Ekle";
        addButton.onclick = () => addCourse(course);
        li.appendChild(addButton);
        courseList.appendChild(li);
    });

    // Kayıt işlemi
    registerBtn.addEventListener("click", () => {
        const name = registerName.value.trim(); /*trim boşluk karakterini temizler*/
        const password = registerPassword.value.trim();
        if (name && password) {
            localStorage.setItem("student", JSON.stringify({ name, password }));
            alert("Kayıt başarılı!");
            registerName.value = "";
            registerPassword.value = "";
        } else {
            alert("Lütfen tüm alanları doldurun.");
        }
    });

    // Giriş işlemi
    loginBtn.addEventListener("click", () => {
        const name = loginName.value.trim();
        const password = loginPassword.value.trim();
        const storedStudent = JSON.parse(localStorage.getItem("student"));
        if (storedStudent && storedStudent.name === name && storedStudent.password === password) {
            authSection.style.display = "none";
            studentPanel.style.display = "block";
            studentNameSpan.textContent = name;
        } else {
            alert("Geçersiz giriş bilgileri.");
        }
    });

    // Ders ekleme
    function addCourse(courseName) {
        const li = document.createElement("li");
        li.textContent = courseName;

        const vizeInput = document.createElement("input");
        vizeInput.type = "number";
        vizeInput.placeholder = "Vize";

        const finalInput = document.createElement("input");
        finalInput.type = "number";
        finalInput.placeholder = "Final";

        const calculateButton = document.createElement("button");
        calculateButton.textContent = "Hesapla";
        calculateButton.onclick = () => {
            const vize = parseFloat(vizeInput.value) || 0;
            const final = parseFloat(finalInput.value) || 0;
            const average = vize * 0.3 + final * 0.7;
            if (average >= 55) {
                li.className = "passed";
                li.textContent = `${courseName} - Geçti (${average.toFixed(2)})`;
            } else {
                li.className = "failed";
                li.textContent = `${courseName} - Kaldı (${average.toFixed(2)})`;
            }
        };

        li.appendChild(vizeInput);
        li.appendChild(finalInput);
        li.appendChild(calculateButton);
        addedCourses.appendChild(li);
    }

    // Rapor oluştur ve gönder
    generateReportBtn.addEventListener("click", () => {
        const report = generateReport();
        sendReportByEmail(report);
    });

    // Rapor oluşturma
    function generateReport() {
        let reportContent = `Öğrenci: ${studentNameSpan.textContent}\n\nDersler:\n`;
        const courses = document.querySelectorAll("#added-courses li");
        courses.forEach(course => {
            reportContent += `${course.textContent}\n`;
        });
        return reportContent;
    }

    // E-posta gönderme (mailto ile yönlendirme)
    function sendReportByEmail(report) {
        const email = prompt("Raporu göndermek için e-posta adresinizi girin:");
        if (email) {
            const subject = "Öğrenci Ders Raporu";
            const body = encodeURIComponent(report);
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        }
    }

    // Çıkış yap
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("student");
        studentPanel.style.display = "none";
        authSection.style.display = "block";
    });
});
