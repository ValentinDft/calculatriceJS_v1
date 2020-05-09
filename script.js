let choix;
let nb1;
let nb2;
let verif_nb1;
let verif_nb2;
let result

function demandeUtilisateur() {
    do {
    
        choix = prompt("Que voulez-vous faire ? \n\n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division");
        choix = parseInt(choix);
    
    } while (choix > 5 || choix == 0);
    return choix;
}

demandeUtilisateur();


function demande2Nombre() {
    
    do {
        nb1 = prompt("Premier nombre : ");
        nb2 = prompt("Deuxième nombre : ");

        verif_nb1 = isNaN(nb1);
        verif_nb2 = isNaN(nb2);

    } while (verif_nb1 && verif_nb2 != true);
    return nb1, nb2;
}

demande2Nombre();

function addition(nb1, nb2) {
    result = nb1 + nb2;
    return result;
}