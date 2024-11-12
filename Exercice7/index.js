function convertToBinary() {
    // Récupérer la valeur saisie par l'utilisateur
    const decimalInput = document.getElementById('decimalInput').value;
    const resultElement = document.getElementById('binaryResult');
    
    // Vérifier si l'entrée est vide ou contient des caractères non numériques
    if (decimalInput.trim() === '' || !/^\d+$/.test(decimalInput)) {
        resultElement.textContent = '';  // Aucun résultat si ce n'est pas un nombre valide
        return;
    }
    
    // Convertir la saisie en entier
    const decimalNumber = parseInt(decimalInput);
    
    // Vérifier si l'utilisateur a entré un nombre entier positif
    if (decimalNumber < 0) {
        resultElement.textContent = 'Veuillez entrer un nombre positif';
        return;
    }

    // Convertir le nombre décimal en binaire
    const binaryResult = decimalNumber.toString(2);
    
    // Afficher le résultat binaire
    resultElement.textContent = `Représentation binaire : ${binaryResult}`;
}
