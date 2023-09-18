// Seleziono il container e lo salvo in una variabile
const container = document.querySelector('.container');

// Faccio un reset
reset();
function reset () {
    container.innerHTML = '' ;
}

// Creo un ciclo da 1 a 100.
function init() {
    // Modifico il ciclo per generare 100 quadrati
    for (let i = 1; i <= 100; i++) { 

        // Creo un nuovo elemento quadrato utilizzando la funzione createSquare(i)
        const square = createSquare(i);

        // Aggiungo un gestore di eventi 'click' all'elemento quadrato
        square.addEventListener('click', function () {
            // Quando il quadrato viene cliccato, eseguo le seguenti operazioni:
            
            // Aggiungo o rimuovo la classe 'clicked' per cambiare il suo stile
            this.classList.toggle('clicked');
            
            // Stampo il testo contenuto nell'elemento (numero del quadrato) nella console
            console.log(this.innerText);
        });

        // Aggiungo l'elemento quadrato al container
        container.append(square);

    }
}
