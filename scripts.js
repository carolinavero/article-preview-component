let shareBtn = document.querySelector('[data-share]');
let shareContent = document.querySelector('.footer__share-active');
let avatarContent = document.querySelector('.footer__avatar');
let cardFooter = document.querySelector('.card__footer');

console.log(shareBtn);

shareBtn.addEventListener('click', (e) => {
    e.preventDefault();

     shareContent.classList.toggle('hidden');

   /*  if(shareContent.hasAttribute('display: flex')) {

    } */

    avatarContent.classList.toggle('hidden');

    cardFooter.classList.toggle('active');

});