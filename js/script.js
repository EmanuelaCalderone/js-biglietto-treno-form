//assegno le variabili di input
const etaField = document.getElementById('eta_field');
const kmField = document.getElementById('km_field');
const form = document.querySelector('form');

//assegno le variabili di output
const eta = document.getElementById('eta_utente');
const km = document.getElementById('chilometri_utente');
const costo_biglietto = document.getElementById('costo_biglietto');

//creo l'evento al click del bottone per associare le variabili di input e output

form.addEventListener('submit', (event) => {
   
    //blocco l'invio del form
    event.preventDefault();

    //calcolo il prezzo
    let prezzo = (0.21 * kmField.value);

    if (etaField.value < 18) {
        prezzo = prezzo - (prezzo * 0.20);
    }

    else if (etaField.value > 65) {
        prezzo = prezzo - (prezzo * 0.40);
    }

    //associo i valori di input con quelli di output
    km.innerHTML = kmField.value.trim();
    eta.innerHTML = etaField.value.trim();
    costo_biglietto.innerHTML = "€ " + prezzo.toFixed(2);

})

//stampo il costo in console
console.log("Pagherai € " + prezzo.toFixed(2));

