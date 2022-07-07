function iAmInTheGoalCase (positionJoueur,positionGoal){
    if (positionJoueur == positionGoal){
        return true;
    }
    return false;
}

function goalIsAtOneCase (positionJoueur,positionGoal){
    if (positionGoal == positionJoueur[y - 1][x]){
        positionJoueur = positionGoal;
        return true

    } else if (positionGoal == positionJoueur[y + 1][x]){
        positionJoueur = positionGoal;
        return true

    } else if (positionGoal == positionJoueur[y][x - 1]){
        positionJoueur = positionGoal;
        return true

    } else if (positionGoal == positionJoueur[y][x + 1]){
        positionJoueur = positionGoal;
        return true

    } 
    return false
}

/*function caseIsset(positionCase){
    if (positionJoueur[y - 1][x] != "X" && positionJoueur[y - 1][x] != "I" && positionJoueur[y - 1][x] ne sors pas du tableau){
        return true;
    }
    if (positionJoueur[y + 1][x] != "X" && positionJoueur[y + 1][x] != "I" && positionJoueur[y + 1][x] ne sors pas du tableau){
        return true;
    }
    if (positionJoueur[y][x - 1] != "X" && positionJoueur[y][x - 1] != "I" && positionJoueur[y][x - 1] ne sors pas du tableau){
        return true;
    }
    if (positionJoueur[y][x + 1] != "X" && positionJoueur[y][x + 1] != "I" && positionJoueur[y][x + 1] ne sors pas du tableau){
        return true;
    }
    return false;
}*/

function outDeadEnd (){
    if (filArianne[i] == positionJoueur - 1){
        positionJoueur = filArianne[i]
    } else if (i > 0){
            i-1
        }
}