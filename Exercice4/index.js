// Sélectionner le bouton à l'aide de son id
const button = document.getElementById('myButton');

// Ajouter un observateur d'événement pour le clic
button.addEventListener('click', () => {
  // Vérifier si un paragraphe existe déjà pour éviter la duplication
  let messageParagraph = document.getElementById('message');

  if (!messageParagraph) {
    // Créer un nouvel élément <p> pour afficher le message
    messageParagraph = document.createElement('p');
    messageParagraph.id = 'message';
    messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
    document.body.appendChild(messageParagraph);
  } else {
    // Mettre à jour le texte si le paragraphe existe déjà
    messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
  }
});
