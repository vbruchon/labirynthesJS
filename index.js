//Labyrinthe
const plateau = [
    ["S", "_", "_", "_", "_", "_"],
    ["X", "X", "X", "_", "X", "X"],
    ["_", "_", "_", "_", "_", "_"],
    ["_", "X", "X", "_", "X", "_"],
    ["_", "X", "G", "X", "_", "_"],
    ["_", "_", "_", "X", "_", "X"],
    ["_", "X", "_", "_", "_", "_"],
];

//PositionMin, PositionMax
const yMin = 0;
const yMax = 5;
const xMin = 0;
const xMax = 6;

//PositionJoueur, PositionStart, positionGoal
let y = 2;
let x = 0;
const positionStart = plateau[x][y];
const positionGoal = plateau[4][2];
let positionJoueur = plateau[x][y];
let lastPosition;
const ici = "ici"

//CheminParcourue
let filArianneX = [];
let filArianneY = [];
filArianneX[0] = x;
filArianneY[0] = y;
const caseParcourue = "I";

//Parcours de tableau
let i;
let j = 0;

// Tant que je suis pas sur la case Goal
for (i = 0; i < 56; i++) {
    j = filArianneX.length;
    print(plateau);
    console.log(filArianneX);

    console.log(filArianneY);

    //Si je suis A coter de la case Goal -> j'y vais 
    if (goalIsAtOneCase(positionJoueur, positionGoal) == true) {
        positionJoueur = positionGoal;

        //Sinnon si la prochaine case dépasse pas la longueur du tableau et que la case ne soit pas un mur ET QUE je ne suis jamais aller sur cette case -> j'avance
    } else if ((y + 1 <= yMax) && (plateau[x][y + 1] !== "X") && (plateau[x][y + 1] !== "ici") && (iHaveAlreadyCome(x, y + 1, filArianneX, filArianneY, j) == false)) {
        if (plateau[x][y] != caseParcourue)
            j = filArianneX.length
        console.log(j);
        y++;
        plateau[x][y] = caseParcourue;
        lastPosition = plateau[x][y]
        filArianneX[j] = x;
        filArianneY[j] = y;
        positionJoueur = plateau[x][y];
        plateau[x][y] = "ici";

        //Sinnon si la prochaine case dépasse pas la longueur du tableau et que la case ne soit pas un mur ET QUE je ne suis jamais aller sur cette case -> j'avance
    } else if (((y - 1 >= yMin) && (plateau[x][y - 1] !== "X"))&& (plateau[x][y - 1] != "ici") && iHaveAlreadyCome(x, y - 1, filArianneX, filArianneY, j) == false) {
        j = filArianneX.length
        y--;
        console.log(caseParcourue);
        plateau[x][y] = caseParcourue;
        lastPosition = plateau[x][y];
        filArianneX[j] = x;
        filArianneY[j] = y;
        positionJoueur = plateau[x][y];
        plateau[x][y] = "ici";

        //Sinnon si la prochaine case dépasse pas la longueur du tableau et que la case ne soit pas un mur ET QUE je ne suis jamais aller sur cette case -> j'avance
    } else if (((x + 1 <= xMax) && (plateau[x + 1][y] !== "X"))&& (plateau[x + 1][y] !== "ici") && iHaveAlreadyCome(x + 1, y, filArianneX, filArianneY, j) == false) {
        j = filArianneX.length
        x++;
        plateau[x][y] = caseParcourue;
        lastPosition = plateau[x][y];
        filArianneX[j] = x;
        filArianneY[j] = y;
        positionJoueur = plateau[x][y];
        plateau[x][y] = "ici";
        //Sinnon si la prochaine case dépasse pas la longueur du tableau et que la case ne soit pas un mur ET QUE je ne suis jamais aller sur cette case -> j'avance
    } else if (((x - 1 >= xMin) && (plateau[x - 1][y] !== "X"))&& (plateau[x - 1][y] !== "ici") && iHaveAlreadyCome(x - 1, y, filArianneX, filArianneY, j) == false) {
        j = filArianneX.length
        x--;
        plateau[x][y] = caseParcourue;
        lastPosition = plateau[x][y];
        filArianneX[j] = x;
        filArianneY[j] = y;
        positionJoueur = plateau[x][y];
        plateau[x][y] = "ici";

    } else {
        while ((j != 0) || (filArianneX[j] !== plateau[x - 1]) || (filArianneX[j] !== plateau[x + 1]) || (filArianneY[j] !== plateau[y + 1]) || (filArianneY[j] !== plateau[y - 1])) {

            j = filArianneX.length

            if ((filArianneX[j] == plateau[x - 1]) || (filArianneX[j] == plateau[x + 1])) {

                if (plateau[x - 1][y] != lastPosition) {

                    plateau[x] = filArianneX[j];
                    plateau[y] = filArianne[j];
                    positionJoueur = plateau[x][y];

                } else {

                    plateau[x] = filArianneX[j];
                    plateau[y] = filArianne[j];
                    positionJoueur = plateau[x][y];

                }

            } else if ((filArianneY[j] == plateau[y - 1]) || (filArianneY[j] == plateau[y + 1])) {

                if (plateau[x][y - 1] != lastPosition) {

                    plateau[x] = filArianneX[j];
                    plateau[y] = filArianneY[j];
                    positionJoueur = plateau[x][y];

                } else {

                    plateau[x] = filArianneX[j];
                    plateau[y] = filArianneY[j];
                    positionJoueur = plateau[x][y];

                }
            }
        }
    }
}
    /*   Sinnon je remonte mon fil d'arianne et je retourne à la dernière position
   *
    Sauvegarder Variable de la position d'avant
    
    LastPosition = plateau[x][y]
    * 
    * 
    * 
    *  
    * 
    * 
    * 
    * ET (filArianneY[j] == plateau[y -1] OU plateau[y + 1]))
    * 
    * j = filArianneX.length
    * 
    * if filArianneX[j] == plateau[x - 1] && filArianneY[j] == plateau[y] {
    *      
    * 
    *      plateau[x] = filArianneX[j];
    *      plateau[y] = filArianne[j];
    *      positionJoueur = plateau[x][y];
    * }
    */


    function iHaveAlreadyCome(positionXFutureCase, positionYFutureCase, filArianneX, filArianneY, j) {
        while ((positionXFutureCase !== filArianneX[j]) && (positionYFutureCase !== filArianneY[j]) || j > 1) {
            j--;

        }
        if (j <= 1) {
            return false;
        }

        return true;

    }

    function returnBehind(positionXFutureCase, positionYFutureCase, filArianneX, filArianneY, j) {
        while ((positionXFutureCase !== filArianneX[j]) && (positionYFutureCase !== filArianneY[j]) && j > 1) {
            j--;
        }

        plateau[x] = filArianneX[j];
        plateau[y] = filArianneY[j];
        positionJoueur = plateau[x][y];
    }

    /*while (iAmInTheGoalCase(positionJoueur, positionGoal) == false) {
        if (goalIsAtOneCase(positionJoueur, positionGoal) == true) {
            positionJoueur = positionGoal;
        }
    /*if (plateau[y + 1 != "undefined"] && plateau[y +1][x] == "_") {
        i = filArianne.length
        while (("case du bas" !== filArianne[i]) || (i == 0)) {
            i--
        }
        if (i == 0) {
            i = filArianne.length + 1;
            //filArianne[i].push(positionJoueur);
            y++;
            positionJoueur = plateau[y][x];
            plateau[y][x] = "I"
            console.table(plateau)
        } else {
            positionJoueur = positionJoueur;
        }
    }
    }*/


    console.table(plateau);
    console.log();

    function iAmInTheGoalCase(positionJoueur, positionGoal) {
        if (positionJoueur == positionGoal) {
            return true;
        }
        return false;
    }

    function goalIsAtOneCase(positionJoueur, positionGoal) {
        if (positionGoal == positionJoueur[y - 1]) {
            positionJoueur = positionGoal;
            return true

        } else if (positionGoal == positionJoueur[y + 1]) {
            positionJoueur = positionGoal;
            return true

        } else if (positionGoal == positionJoueur[x - 1]) {
            positionJoueur = positionGoal;
            return true

        } else if (positionGoal == positionJoueur[x + 1]) {
            positionJoueur = positionGoal;
            return true

        }
        return false
    }
    function print(plateau) {
        let newPlateau = [];
        for (let i = 0; i < plateau.length - 1; i++) {
            let tab = [];
            for (let j = 0; j < plateau[i].length + 1; j++) {
                tab.push(plateau[j][i]);
            }
            newPlateau.push(tab);;
        }
        console.table(newPlateau)
    }
