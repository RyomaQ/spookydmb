let scrollnBtn = document.getElementById('scroll-btn');
let pageHeight = window.innerHeight;

scrollnBtn.addEventListener('click', function(){
    window.scrollBy(0, pageHeight);
})


