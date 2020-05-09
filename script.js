let choix;


do {
    
    choix = prompt("Que voulez-vous faire ? \n\n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division");
    choix = parseInt(choix);

} while (choix > 5 || choix == 0);

function choixUtilisateur(choix) {
    
}