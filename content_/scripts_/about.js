const profilePhoto = document.querySelector('#profilePhoto');

const closeModal = document.querySelector('#closeModal');
const spanImgProfile = document.querySelector('#spanImgProfile');

closeModal.addEventListener('click', () => {

    spanImgProfile.style.display = 'none';
    profilePhoto.style.transform = 'scale(1.0)';
})

profilePhoto.addEventListener('click', () => {

    profilePhoto.style.transform = 'scale(1.2)';
    spanImgProfile.style.display = 'block';

})

document.querySelector('body').onload(spanImgProfile.style.display = 'none');