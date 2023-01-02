const hiddenFeaturedSpeakers = document.querySelectorAll('.hidden-speaker');
const showMoreButton = document.querySelector('.show-more');

console.log(hiddenFeaturedSpeakers);

showMoreButton.addEventListener('click', () => {
    console.log('click')
    hiddenFeaturedSpeakers.forEach(speaker => {
        speaker.classList.remove('desktop-only');
    });

    showMoreButton.classList.add('hidden');
})