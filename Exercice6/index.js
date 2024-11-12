// Sélectionne l'élément d'affichage
const display = document.getElementById('display');

// Fonction pour ajouter un caractère à l'affichage
function appendToDisplay(value) {
  display.value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
  display.value = '';
}

// Fonction pour calculer le résultat de l'expression
function calculateResult() {
  try {
    // Vérifie si l'expression contient une division par zéro
    if (display.value.includes('/0')) {
      display.value = 'Division by zero is not allowed';
    } else {
      // Évaluer l'expression entrée par l'utilisateur
      const result = eval(display.value);
      display.value = result;
    }
  } catch (error) {
    // Si une erreur survient, afficher un message d'erreur
    display.value = 'Erreur';
  }
}
