// Array di prodotti
const listaSpesa = ['Frutta', 'Pane', 'Latte', 'Formaggio', 'Pasta'];

// Inizializzazione del contatore
let i = 0;

// Collegamento all'elemento <ul>
const ul = document.getElementById('shopping-list');

// Ciclo while per creare gli elementi di lista
while (i < listaSpesa.length) {
    const item = listaSpesa[i];

    // Creazione elemento di lista <li>
    const li = document.createElement('li');
    li.textContent = item;

    // Aggiunta elemento di lista a elemento <ul>
    ul.appendChild(li);

    // Stampa elemento nella console
    console.log(item);

    // Incremento del contatore
    i++;
}