//variables

let btn = document.querySelector('#newQuote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.person');

const quotes =  [
    { 
    quote: "The only way to do great work is to love what you do.", 
    author: "Steve Jobs" 
  },
  { 
    quote: "In the middle of difficulty lies opportunity.", 
    author: "Albert Einstein" 
  },
  { 
    quote: "Strive not to be a success, but rather to be of value.", 
    author: "Albert Einstein" 
  },
  { 
    quote: "The future belongs to those who believe in the beauty of their dreams.", 
    author: "Eleanor Roosevelt" 
  },
  { 
    quote: "The future belongs to those who believe in the beauty of their dreams.", 
    author: "Eleanor Roosevelt" 
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  { 
    quote: "The only way to do great work is to love what you do.", 
    author: "Steve Jobs" 
  },
  { 
    quote: "In the middle of difficulty lies opportunity.", 
    author: "Albert Einstein" 
  },
  { 
    quote: "Strive not to be a success, but rather to be of value.", 
    author: "Albert Einstein" 
  },
  { 
    quote: "The future belongs to those who believe in the beauty of their dreams.", 
    author: "Eleanor Roosevelt" 
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
];

btn.addEventListener('click', function(){
    let random= Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;/*here quote and author are variables defined above,they are used to replace the text in html*/
    author.innerHTML = quotes[random].author;
});
