const nextIcon = document.querySelector('.next');
const prevIcon = document.querySelector('.prev');

const imageContainer = document.querySelector('.ImageContainer');
const imgs = document.querySelectorAll('img');

//gorselin sırasını tutalım
let currentImg = 1;

let timeout;

prevIcon.addEventListener('click', ()=> {
    currentImg--;
    clearTimeout(timeout); // otomatik kaydirmayi sifilar
    updateImage();
});

nextIcon.addEventListener('click', ()=> {
    currentImg++;
    clearTimeout(timeout); // otomatik kaydirmayi sifilar
    updateImage();
});

function updateImage()
{
    if(currentImg > imgs.length)
    {
        currentImg = 1; // en basa döndür tekrardan başlat
    }
    else if(currentImg < 1)
    {
        currentImg = imgs.length; // en sona kadar dönmeye devam eder.
    }
    imageContainer.style.transform = `translateX(-${(currentImg-1)*700}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        updateImage();
    }, 5000);
}
updateImage(); // sayfa her yüklendiğinde otomatik olarak kaydırma başlasın