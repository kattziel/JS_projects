const reviewContainer = document.getElementById('review-container')

const reviews = [
    {
        img: "https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        alt: "Profile picture of Katarzyna Zielińska",
        text: "I really enjoyed this course, it was fun and interactive as well as educational! I learnt alot!",
        name: "Katarzyna Zielińska"
    },
    {
        img: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        alt: "Profile picture of Gabrielle Welt",
        text: "A well thought out course with the student in mind! Thanks for creating this for the community!",
        name: "Gabrielle Welt"
    },
    {
        img: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        alt: "Profile picture of Hieronim Levy",
        text: "I managed to do this course in my spare time after hours and have only positive things to say! Thank you.",
        name: "Hieronim Levy"
    }
]

function populateDisplay() {
    reviews.forEach(review => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')

        cardElement.addEventListener('mouseover', showCard)
        cardElement.addEventListener('mouseout', blurCard)

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src', review.img)
        imageElement.setAttribute('alt', review.alt)
        imageContainer.append(imageElement)

        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = review.text
        const nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent = review.name

        cardElement.append(imageContainer, paragraphElement, nameContainer)

        reviewContainer.append(cardElement)
    })
}

populateDisplay();

function showCard() {
    this.classList.add('active')
}

function blurCard() {
    this.classList.remove('active')
}