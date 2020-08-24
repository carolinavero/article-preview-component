let shareBtn = document.querySelector('[data-share]');
let shareContent = document.querySelector('.footer__share-active');
let avatarContent = document.querySelector('.footer__avatar');
let cardFooter = document.querySelector('.card__footer');
let iconImage = document.querySelector('.icon-share img');

console.log(shareBtn);

shareBtn.addEventListener('click', (e) => {
    e.preventDefault();

    shareContent.classList.toggle('hidden');

    if(cardFooter.classList.contains('active')) {
      shareBtn.style.backgroundColor = 'hsl(210, 46%, 95%)';
      iconImage.src = 'images/icon-share.svg';
    } else {
      shareBtn.style.backgroundColor = '#6f859d';
      iconImage.src = 'images/icon-share-active.svg';
    }

    avatarContent.classList.toggle('hidden');
    cardFooter.classList.toggle('active');

});