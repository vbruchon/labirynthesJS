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
let y = 0;
let x = 0;
const positionStart = plateau[x][y];
const positionGoal = plateau[4][2];
let positionJoueur = plateau[x][y];
let lastPositionX;
let lastPositionY;

//CheminParcourue
let filArianneX = [0];
let filArianneY = [0];
//filArianneX[0] = x;
//filArianneY[0] = y;
let caseParcourue = 0;


//Parcours de tableau
let i;
let j = 0;

// Tant que je suis pas sur la case Goal
while (iAmInTheGoalCase(positionJoueur, positionGoal) == false) {
    j = filArianneX.length;
    print(plateau);
    console.log(filArianneX);
    console.log(filArianneY);
    console.log("Last Position X : ", lastPositionX, " ", "Last Position Y :", lastPositionY);

    //Si je suis A coter de la case Goal -> j'y vais 
    if (goalIsAtOneCase(positionJoueur, positionGoal) == true) {
        positionJoueur = positionGoal;

        //Sinnon si la prochaine case dépasse pas la longueur du tableau et que la case ne soit pas un mur ET QUE je ne suis jamais aller sur cette case -> j'avance
    } else if ((y + 1 <= yMax) && (plateau[x][y + 1] !== "X") && (plateau[x][y + 1] !== caseParcourue) && (iHaveAlreadyCome(x, y + 1, filArianneX, filArianneY, j) == false)) {

        j = filArianneX.length;
        
        lastPositionX = x;
        lastPositionY = y;
        y++;
        filArianneX[j] = x;
        filArianneY[j] = y;
        caseParcourue = caseParcourue + 1;
        plateau[x][y] = caseParcourue;
        positionJoueur = plateau[x][y];

        //Sinnon si la prochaine case dépasse pas la longueur du tableau et que la case ne soit pas un mur ET QUE je ne suis jamais aller sur cette case -> j'avance
    } else if (((y - 1 >= yMin) && (plateau[x][y - 1] !== "X")) && (plateau[x][y - 1] != caseParcourue) && iHaveAlreadyCome(x, y - 1, filArianneX, filArianneY, j) == false) {
        j = filArianneX.length;
        
        lastPositionX = x;
        lastPositionY = y;
        
        y--;
        filArianneX[j] = x;
        filArianneY[j] = y;
        caseParcourue = caseParcourue + 1;
        plateau[x][y] = caseParcourue;
        positionJoueur = plateau[x][y];

        //Sinnon si la prochaine case dépasse pas la longueur du tableau et que la case ne soit pas un mur ET QUE je ne suis jamais aller sur cette case -> j'avance
    } else if (((x + 1 <= xMax) && (plateau[x + 1][y] !== "X")) && (plateau[x + 1][y] !== "ici") && iHaveAlreadyCome(x + 1, y, filArianneX, filArianneY, j) == false) {
        j = filArianneX.length;
        
        lastPositionX = x;
        lastPositionY = y;
        x++;
        filArianneX[j] = x;
        filArianneY[j] = y;
        caseParcourue = caseParcourue + 1;
        plateau[x][y] = caseParcourue;
        positionJoueur = plateau[x][y];

        //Sinnon si la prochaine case dépasse pas la longueur du tableau et que la case ne soit pas un mur ET QUE je ne suis jamais aller sur cette case -> j'avance
    } else if (((x - 1 >= xMin) && (plateau[x - 1][y] !== "X")) && (plateau[x - 1][y] !== "ici") && iHaveAlreadyCome(x - 1, y, filArianneX, filArianneY, j) == false) {
        j = filArianneX.length;
        
        lastPositionX = x;
        lastPositionY = y;
        x--;
        filArianneX[j] = x;
        filArianneY[j] = y;
        caseParcourue = caseParcourue + 1;
        plateau[x][y] = caseParcourue;
        positionJoueur = plateau[x][y];

    } else {

        if ((y + 1 <= yMax) && (plateau[x][y + 1] == positionJoueur - 1)) {
            y = y + 1;
            positionJoueur = plateau[x][y];
        } else if ((y - 1 >= yMin) && (plateau[x][y - 1] == positionJoueur - 1)) {
            y = y - 1;
            positionJoueur = plateau[x][y];
        } else if ((x + 1 <= xMax) && (plateau[x + 1][y] == positionJoueur -1)) {
            x = x + 1;
            positionJoueur = plateau[x][y];
        } else if ((x - 1 >= xMin) && (plateau[x - 1][y] == positionJoueur -1)) {
            x = x + 1;
            positionJoueur = plateau[x][y];
        }

    }
}
console.log("Vous avez gagné !");


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
function iAmInTheGoalCase(positionJoueur, positionGoal) {
    if (positionJoueur == positionGoal) {
        return true;
    }
    return false;
}

function goalIsAtOneCase(positionJoueur, positionGoal) {
    if (positionGoal == plateau[x][y - 1]) {
        positionJoueur = positionGoal;
        return true

    } else if (positionGoal == plateau[x][y + 1]) {
        positionJoueur = positionGoal;
        return true

    } else if (positionGoal == plateau[x - 1]) {
        positionJoueur = positionGoal;
        return true

    } else if (positionGoal == plateau[x + 1]) {
        positionJoueur = positionGoal;
        return true

    }
    return false
}
function iHaveAlreadyCome(positionXFutureCase, positionYFutureCase, filArianneX, filArianneY, j) {
    while (((positionXFutureCase !== filArianneX[j]) || (positionYFutureCase !== filArianneY[j])) && j > 1) {
        j--;
    }
    if (j <= 1) {
        return false;
    }
    return true;
}

function returnBehind(positionXFutureCase, positionYFutureCase, filArianneX, filArianneY, j) {
    while ((positionXFutureCase !== filArianneX[j]) && (positionYFutureCase !== filArianneY[j]) && j !== 1) {
        j--;
        if (i == 0) {
            break
        }
    }
    if (positionXFutureCase == filArianneX[j]) {

        plateau[x][y] = caseParcourue;

        x = filArianneX[j];
        y = filArianneY[j];
        positionJoueur = plateau[x][y];

    } else if (positionYFutureCase == filArianneY[j]) {

        plateau[x][y] = caseParcourue;

        x = filArianneX[j];
        y = filArianneY[j];
        positionJoueur = plateau[x][y];
    }
}