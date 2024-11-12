// Créez votre fonction ici
function calculateAverage(numbers = []) {
    // Vérification si le tableau est vide ou non fourni
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return "No numbers to calculate average";
    }
  
    // Calcul de la somme des nombres
    const sum = numbers.reduce((acc, num) => acc + num, 0);
  
    // Calcul de la moyenne
    return sum / numbers.length;
  }
  
  export default calculateAverage;
  
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average
