const quotes = [
    {
      quote: "You can't go back and change the beginning but you can start where you are and change the ending",
      author: "C.S.Lewis"
    },
    {
      quote: "Be happy for what you have while working for what you want",
      author: "Hellen Keller"
    },
    {
      quote: "Just keep swimming",
      author: "Dory,Finding Nemo"
    },
    {
      quote: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author: "Oprah Winfrey"
    },
  ];
  
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');
  const newQuoteBtn = document.getElementById('new-quote-btn');
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function renderQuote() {
    const { quote, author } = getRandomQuote();
    quoteEl.innerHTML = quote;
    authorEl.innerHTML = `- ${author}`;
  }
  
  newQuoteBtn.addEventListener('click', renderQuote);
  
  renderQuote();
  