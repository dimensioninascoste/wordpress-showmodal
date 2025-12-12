// il modal viene lanciato quando l'oggetto 'areaziende' entra nel viewport
console.log("showmodal.js loaded");

const myModalEl = document.getElementById('promozioneModal');
const myModal = new bootstrap.Modal(myModalEl);

myModalEl.addEventListener('hidden.bs.modal', () => {
  localStorage.setItem('modaldismissed', true)
});

// controllo per mostrare il modal dopo lo scroll della pagina o un tempo di permanenza prolungato
// Selettore dell’elemento da osservare
const target = document.getElementById('areaziende');

// Opzioni dell'observer
const options = {
  root: null,            // viewport
  rootMargin: '0px',
  threshold: 0.4         // trigger quando almeno il 10% dell'elemento è visibile
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("L'elemento È entrato nel viewport");
      // ➜ azione quando entra
      //if (!document.getElementById("iubenda-cs-banner")) myModal.show();
      var modalDismissed = localStorage.getItem('modaldismissed');
      !modalDismissed ? myModal.show() : myModal.hide();    
    } else {
      // ➜ azione quando esce
      console.log("L'elemento È uscito dal viewport");
      myModal.hide();
    }
  });
}, options);

// Avvio osservazione
observer.observe(target);