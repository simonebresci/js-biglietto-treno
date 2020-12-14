// Dichiarazione variabili
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

function compra(){
  var km, eta;        //Km da  percorrere ed età passeggero.
  var costoKm;         //Costo fisso al km
  var scontoPerc;      //Sconto in percentuale
  var prezzo;         //Prezzo senza sconto
  var prezzoFinale;

  // Inizializza variabili
  costoKm = 0.21;     //0.21€ al km

  // Acquisci dati utente
  // Acquisci km da percorrere
  km = prompt('Inserisci km');
  console.log(km);

  // Controlla km è un valore numerico
  if (isNaN(km) === true){
    // Alert errore
    alert('errore - dato non valido');
  }else{

    // Acquisisci età utente
    eta = prompt('Inserisci eta');
    console.log(eta);

    // Controlla se età utente è un valore numerico
    if (isNaN(eta) === true){
      // Alert errore
      alert('errore - dato non valido');
    }else{

    // Trasforma input del prompt in valori Int
    km = parseInt(km);
    eta = parseInt(eta);
    console.log(km);
    console.log(eta);

    // Applica eventuale sconto
    //Inizializza sconto come numero
    sconto= 0;

    // Sconto minorenni
    if (eta < 18){
      sconto = 20;
    }

    // Sconto anziani
    if (eta >= 65){
      sconto = 40;
    }

    // Calcola prezzoFinale
    prezzo = costoKm * km;
    prezzoFinale = prezzo * (100 - sconto) / 100;

    // Debug
    console.log('Prezzo senza sconto:' + prezzo);
    console.log('Sconto applicato:' + sconto);
    console.log('Prezzo finale:' + prezzoFinale);
    }

    // Scrivi risultato sulla pagina html
    document.getElementById('js-km').innerText = km +'km';
    document.getElementById('js-eta').innerText = eta;
    document.getElementById('js-prezzo').innerText = prezzo +'€';
    document.getElementById('js-sconto').innerText = sconto + '%';
    document.getElementById('js-prezzoFinale').innerText = prezzoFinale + '€';

    // Evidenzia in rosso sconto se > 0

    if (eta < 18 || eta >= 65){
      document.getElementById('js-eta').style.color = 'green';
    }else{
      document.getElementById('js-eta').style.color = '#999';
    }

    if (sconto > 0){
      document.getElementById('js-sconto').style = 'font-weight: bold';
      document.getElementById('js-sconto').style.color = 'green';
    }else{
      document.getElementById('js-sconto').style = 'font-weight: normal';
      document.getElementById('js-sconto').style.color = '#999';
    }

  }
}
