let quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "- Nelson Mandela",
        place: "-Google"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "- Walt Disney",
        place: "- Google"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of the people's thinking.",
        author: "- Steve Jobs",
        place: "- Apple, Inc."
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "- Eleanor Roosevelt",
        place: "- Google"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "- John Lennon",
        place: "- Google"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "- James Cameron",
        place: "- Google"
    },
]

const container = document.querySelector('#container');
const blockQ = document.querySelector('#quote');
const author = document.querySelector('#author');
const place = document.querySelector('#place');
const btn = document.querySelector('#btn');

btn.addEventListener('click', getQuote)

function randomNum() {
    let random = Math.floor(Math.random() * quotes.length)
    return random;
}

function getQuote() {
    let getRandomNum = randomNum();
    blockQ.innerText = quotes[getRandomNum].quote;
    author.innerText = quotes[getRandomNum].author;
    place.innerText = quotes[getRandomNum].place;

    container.appendChild(blockQ);
    container.appendChild(author);
    container.appendChild(place);
}
