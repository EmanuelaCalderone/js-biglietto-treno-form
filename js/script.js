//assegno le variabili di input
const nomeField = document.getElementById('nome_field');
const etaField = document.getElementById('eta_field');
const kmField = document.getElementById('km_field');
const form = document.querySelector('form');

//assegno le variabili di output
const nome = document.getElementById('nome_utente');
const eta = document.getElementById('eta_utente');
const km = document.getElementById('chilometri_utente');
const costo_biglietto = document.getElementById('costo_biglietto');
const carrozza = document.getElementById('carrozza')
const codice_prenotazione = document.getElementById('codice_prenotazione')
const download = document.getElementById('download');


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
    nome.innerHTML = nomeField.value.trim();
    km.innerHTML = kmField.value.trim();
    eta.innerHTML = etaField.value.trim();
    costo_biglietto.innerHTML = "€ " + prezzo.toFixed(2);

    //genero numero random per n.carrozza
    carrozza.innerHTML = Math.floor(Math.random() * 20) + 1;

    //genero numero random per codice di prenotazione
    codice_prenotazione.innerHTML = Math.floor(Math.random() * 10000) + 1;

    //mostro la sezione download
    download.classList.remove('hidden');
    download.classList.add('show');

    //aggiungo condizione per svuotare i campi dopo il click

    //inizializzo la variabile a true
    let submitted = true;
    //creo le condizioni
    if (submitted) {
        nomeField.value = "";
        etaField.value = "";
        kmField.value = "";
    } else {
        nomeField.value = nome.innerHTML;
        kmField.value = km.innerHTML;
        etaField.value = eta.innerHTML;
    }
    //cambio lo stato della variabile
    submitted=false;

});

//stampo il costo in console
console.log("Pagherai € " + prezzo.toFixed(2));

//funzione per resettare i valori dei campi al refresh della pagina
window.onload = function() {
    document.getElementById('form').reset();
};