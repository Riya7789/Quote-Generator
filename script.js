

const quotes = ['"All progress takes place outside the comfort zone"',
    '"Friendship is the golden thread that ties the heart of all the world"',
    '"Don’t let yesterday take up too much of today"',
    '"Art is the tree of life. Science is the tree of death"',
    '"The science of today is the technology of tomorrow"',
    '"The art and science of asking questions is the source of all knowledge"'];

let currentIndex = 0;

// const category = document.getElementById("category");
const previousButton = document.getElementById("btn1");
const nextButton = document.getElementById("btn2");
// const randomButton = document.getElementById("btn3");

//Toggle Mode
const toggleButton = document.getElementById('toggleButton');
const content = document.querySelector('body');
//Change Font Size
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const quoteText = document.querySelector('.quote');

function displayQuote(index) {
    const quote = quotes[index];
    quoteText.textContent = quote;
}


previousButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayQuote(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < quotes.length - 1) {
        currentIndex++;
        displayQuote(currentIndex);
    }
})
displayQuote(currentIndex);

toggleButton.addEventListener('click', () => {
    content.classList.toggle('dark-mode');
})

increaseButton.addEventListener('click', () => {
    const currentSize = parseFloat(getComputedStyle(quoteText).fontSize);
    quoteText.style.fontSize = (currentSize + 1) + 'px';
});

decreaseButton.addEventListener('click', () => {
    const currentSize = parseFloat(getComputedStyle(quoteText).fontSize);
    quoteText.style.fontSize = (currentSize - 1) + 'px';
});

