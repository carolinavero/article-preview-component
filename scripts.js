let shareBtn = document.querySelector('[data-share]');
let shareContent = document.querySelector('.footer__share-active');
let avatarContent = document.querySelector('.footer__avatar');
let cardFooter = document.querySelector('.card__footer');

console.log(shareBtn);

shareBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("clicou!!");
    console.log(shareContent);

    shareContent.classList.toggle('hidden');
    avatarContent.classList.toggle('hidden');

    cardFooter.classList.toggle('active');


})