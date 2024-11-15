var quote = [
    "The best way to predict the future is to create it.",
    "Life is what happens when you're busy making other plans.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Do not watch the clock. Do what it does. Keep going.",
    "You miss 100% of the shots you don’t take."
  ];
  
  function show() {
    var num = Math.floor(Math.random() * quote.length);
    document.getElementById("words").innerText = quote[num];
  }
  
  document.getElementById("btn").onclick = show;