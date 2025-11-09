
// Fonctions de manipulation de chaînes de caractères 

// Une chaîne de caractères inverser 
function reverseString(str) {
	return str.split("").reverse().join("");
}

// Compte le nombre de caractères
function countChars(str) {
	return str.length;
}

//  Première lettre de chaque mot en majuscule
function majusculesMots(sentence) {
	return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// utilisation
console.log(reverseString("bonjour")); // "ruojnob"
console.log(countChars("bonjour"));    // 7
console.log(majusculesMots("salut tout le monde")); // "Salut Tout Le Monde"


//Fonctions de tableau 

// Trouve le maximum dans un tableau
function obtenirMax(arr) {
	return Math.max(...arr);
}

// Trouve le minimum dans un tableau
function getMin(arr) {
	return Math.min(...arr);
}

// Calcule la somme de tous les éléments du tableau
function sumArray(arr) {
	return arr.reduce((acc, val) => acc + val, 0);
}

// Filtre un tableau selon une condition donnée
function filterArray(arr, conditionFn) {
	return arr.filter(conditionFn);
}

// Utilisation
const bravo = [3, 7, 2, 9, 4];
console.log(obtenirMax(bravo)); // 9
console.log(getMin(bravo)); // 2
console.log(sumArray(bravo)); // 25
console.log(filterArray(bravo, x => x > 5)); // [7, 9]


//Fonctions mathématiques 

// Calcule la factorielle du nombre
function factorielle(n) {
	if (n < 0) return undefined;
	let res = 1;
	for (let i = 2; i <= n; i++) {
		res *= i;
	}
	return res;
}

// Vérifie si un nombre est premier
function estPremier(n) {
	if (n <= 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0) return false;
	}
	return true;
}

// Générer la suite de Fibonacci jusqu'à n termes
function fibonacci(n) {
	if (n <= 0) return [];
	if (n === 1) return [0];
	let seq = [0, 1];
	for (let i = 2; i < n; i++) {
		seq.push(seq[i - 1] + seq[i - 2]);
	}
	return seq;
}

// Utilisation
console.log(factorielle(5)); // 120
console.log(estPremier(7)); // true
console.log(estPremier(10)); // false
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
