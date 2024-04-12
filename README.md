**Milestone 1:**
1. Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
    - [x] prelevo dalla pagina elemento contenitore delle immagini grandi (*carouselImagesElem*)
    - [x] Inserisco dinamicamente le immagini all'interno dell'elemento: 
        - [x] attraverso forEach leggo tutti gli elementi dentro l'array
        - [x] Inserisco in pagina gli elementi dentro gli oggetti dell'array tramite innerHTML

2. Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva con i relativi titolo e testo diventerà visibile.
    - [x] Prelevo dalla pagina gli elementi prev e next
    - [x] Dichiaro variabile per le immagini attive (*imgActive*) e la imposto a 0
    - [x] Prelevo dalla pagina tutti gli elementi immagini tramite querySelectorAll e li salvo in una variabile (*imgListElem*)
    - [x] Al click di next o prev si attiva una funzione
        - [x] Rimuovo classe active dall'immagine
        - [x] Condizione per incremento di *imgActive*
        - [x] Aggiungo classe all'immagine
 



<!-- **Milestone 2:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
**BONUS 1:**
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
**BONUS 2:**
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
**BONUS 3:**
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. -->