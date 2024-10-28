// Parole divise per categorie
const words = {
  nouns: [
    { greek: "Χρόνος", italian: "Tempo" },
    { greek: "Κύμα", italian: "Onda" }
  ],
  adjectives: [
    { greek: "Ωραίος", italian: "Bello" },
    { greek: "Δυνατός", italian: "Forte" }
  ],
  verbs: [
    { greek: "Πηγαίνω", italian: "Andare" },
    { greek: "Τρέχω", italian: "Correre" }
  ]
};

let mode = 'greek-italian';
let currentCategory = 'all';
let currentWordIndex = 0;
let currentWordList = getWordsByCategory(currentCategory);

// Funzione per mostrare la traduzione
function showTranslation() {
  const text = document.getElementById("text");
  const currentWord = currentWordList[currentWordIndex];
  
  text.textContent = mode === 'greek-italian' ? currentWord.italian : currentWord.greek;
}

// Cambia modalità Greco → Italiano o viceversa
document.getElementById("toggle-mode").addEventListener("click", () => {
  mode = mode === 'greek-italian' ? 'italian-greek' : 'greek-italian';
  document.getElementById("toggle-mode").textContent = 
    `Modalità: ${mode === 'greek-italian' ? 'Greco → Italiano' : 'Italiano → Greco'}`;
  resetWord();
});

// Cambia categoria e resetta le parole
function changeCategory() {
  currentCategory = document.getElementById("category").value;
  currentWordList = getWordsByCategory(currentCategory);
  resetWord();
}

// Ottieni le parole in base alla categoria selezionata
function getWordsByCategory(category) {
  if (category === 'all') {
    return [...words.nouns, ...words.adjectives, ...words.verbs];
  } else {
    return words[category];
  }
}

// Resetta l'indice delle parole e visualizza la prima parola della lista selezionata
function resetWord() {
  currentWordIndex = 0;
  const initialWord = currentWordList[currentWordIndex];
  document.getElementById("text").textContent = mode === 'greek-italian' ? initialWord.greek : initialWord.italian;
}

// Funzione per inviare messaggi nella chat
function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;
  if (!username || !message) return;
  
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<p><strong>${username}</strong>: ${message}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  
  document.getElementById("message").value = '';
}
