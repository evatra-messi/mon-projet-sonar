// Ajoute ça dans ton index.js
var x = 10; 
if (x == 10) {
    if (x == 10) {
        if (x == 10) {
            console.log("Trop de niveaux d'imbrication !");
        }
    }
}
eval("var secret = 'mauvaise_pratique'"); // Sonar déteste 'eval'