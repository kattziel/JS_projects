// gdy tylko włączy się strona, dochodzi do uruchomienia funkcji init w obrębie aplikacji
window.onload = function() {
    app.init();
}

class App {

    // tutaj zapisuję, jakie warianty wygrywają - horyzontalnie / wertykalnie / na skos
    winningVariants = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // defaultowo pierwszy zawsze rozpoczyna gracz X
    currentPlayer = "X";

    // funkcja, która włącza się przy uruchomieniu strony
    // ilekroć naciśniemy na którykolwiek div o klasie cell (w praktyce - na dowolny kafelek w gridzie), wówczas uruchamia się funkcja cellClick;
    init() {
        document.querySelectorAll(".cell").forEach(
            cell => cell.addEventListener("click", this.cellClick)
        );

        // jezeli dojdzie do kliknięcia na element o id restart-game, wówczas uruchamia się funkcja restartGame;
        document.getElementById("restart-game").addEventListener("click",
            () => this.restartGame() );
    }

    cellClick = (e) => {
        //console.log(e.target);
        this.playerTurn(e.target)
    }

    //funkcja uruchamiana po wciśnięciu przycisku restartGame = wywołaniu funkcji restart;
    initGame() {
        this.currentPlayer = "X";

        document.querySelectorAll(".cell").forEach(
            el => { el.innerHTML = ""; }
        );
    }

    // funkcja, która pozwala na zmianę osoby, która właśnie ma ruch; this.currentPlayerem jest X, jezeli poprzednio był O, albo O, jezeli poprzednio był X;
    // dodatkowo nie pozwala drugi raz kliknąć w kafelek, w którym znajduje się X lub O;
    // funkcja ta wywołuje rowniez funkcję checkWinner, która sprawdza, czy nie doszło do 3 X / O obok siebie / po skosie;
    playerTurn(el) {
        if(el.innerHTML == "X" || el.innerHTML == "O") return;
        el.innerHTML = this.currentPlayer;

        this.currentPlayer = this.currentPlayer == "X" ? "O" : "X";

        this.checkWinner();
    }

    checkWinner() {
        for(let i = 0; i < this.winningVariants.length; i++) {
            const variant = this.winningVariants[i];
            const a = this.getCellValue(variant[0]);
            const b = this.getCellValue(variant[1]);
            const c = this.getCellValue(variant[2]);

            if(a == "" || b == "" || c =="") continue;

            if(a == b && b == c) {
                console.log("Winner: " + a);
                this.setWinner(" - the winner is: " + a);
                this.restartGame();
            }
        }
    }

    // funkcja restartGame wywołuje funkcję initGame, która ustawia inner HTML wszystkich divów na puste = nie ma zadnego O ani X w zadnym kafelku
    restartGame() {
        this.initGame();
    }

    setWinner(str) {
        document.getElementById("winner").innerHTML = str;
    }

    getCellValue(index) {
        return document.querySelector(`.cell[data-index='${index}']`).innerHTML;
    }
}

const app = new App();
