const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];
const quoteText = document.getElementById("para");
const authorName = document.getElementById("author");
const genButton = document.getElementById("genbtn");
const pauseButton = document.getElementById("pausebtn");
let intervalID = null;

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteText.classList.remove("fade");
  void quoteText.offsetWidth;
  quoteText.classList.add("fade");
  quoteText.textContent = `${quote.text}`;
  authorName.textContent = `${quote.author}`;
}
function auto_quote() {
  intervalID = setInterval(showRandomQuote, 5000);
}
pauseButton.addEventListener("click", () => {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
    pauseButton.textContent = "resume";
  } else {
    auto_quote();
    pauseButton.textContent = "pause";
  }
});
genButton.addEventListener("click", showRandomQuote());
showRandomQuote();
auto_quote();
