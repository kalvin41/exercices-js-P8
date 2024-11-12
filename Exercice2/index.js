// Créez votre fonction ici
function calculate(num1, num2, operator) {
    // Conversion des entrées en nombres si elles sont des chaînes
    num1 = Number(num1);
    num2 = Number(num2);
  
    // Vérification que les entrées converties sont bien des nombres
    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input: Please enter valid numbers.";
    }
  
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) return "Division by zero is not allowed";
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  export default calculate;
  
  
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"


