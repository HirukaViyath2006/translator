const dictionary = {
    "si-en": {
        "හෙලෝ": "Hello",
        "ආයුබෝවන්": "Greetings",
        "කොහොමද": "How are you",
        "ස්තූතියි": "Thank you",
        "ඔයාගේ": "Your",
        "නම": "Name",
        // Add more Sinhala to English translations here
    },
    "en-si": {
        "Hello": "හෙලෝ",
        "Greetings": "ආයුබෝවන්",
        "How are you": "කොහොමද",
        "Thank you": "ස්තූතියි",
        "Your": "ඔයාගේ",
        "Name": "නම",
        // Add more English to Sinhala translations here
    }
};

function translate() {
    const inputText = document.getElementById('inputText').value;
    const languageSelect = document.getElementById('languageSelect').value;
    const outputText = document.getElementById('outputText');
    const errorMessage = document.getElementById('errorMessage');
    const loadingSpinner = document.getElementById('loadingSpinner');

    // Show loading spinner
    loadingSpinner.classList.remove('d-none');

    setTimeout(() => {
        if (dictionary[languageSelect][inputText]) {
            outputText.innerText = dictionary[languageSelect][inputText];
            errorMessage.innerText = '';  // Clear any previous error messages
        } else {
            outputText.innerText = '';
            errorMessage.innerText = "Translation not found.";
        }

        // Hide loading spinner
        loadingSpinner.classList.add('d-none');
    }, 1000);  // Simulate a delay for loading animation
}

document.getElementById('toggleTheme').addEventListener('click', () => {
    const themeButton = document.getElementById('toggleTheme');
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeButton.innerText = 'Dark Theme';
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeButton.innerText = 'Light Theme';
    }
});
