let copyrightYear = document.querySelector('#copyright-year')

let photoBtn = document.querySelector('#photo-btn')
let photoModal = document.querySelector('.photo-modal')
let closePhoto = document.querySelector('#close-photo')

let newsletterBtn = document.querySelector('#newsletter-cta')
let newsletterModal = document.querySelector('.signup-modal')
let closeModal = document.querySelector('#close-modal')

// COPYRIGHT YEAR
let currentDate = new Date()
let year = currentDate.getFullYear()

copyrightYear.textContent = `© ${year}`

// PHOTO MODAL 
photoBtn.onclick = () => {
    photoModal.classList.remove('hidden')
}

closePhoto.onclick = () => {
    photoModal.classList.add('hidden')
}

// SIGN UP MODAL
newsletterBtn.onclick = () => {
    newsletterModal.classList.remove('hidden')
}

closeModal.onclick = () => {
    newsletterModal.classList.add('hidden')
}



