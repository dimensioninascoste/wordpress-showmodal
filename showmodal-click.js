// il modal viene lanciato se l'utente clicca un qualsiasi link della pagina
console.log("showmodal.js loaded");

const myModalEl = document.getElementById('promozioneModal');
const myModal = new bootstrap.Modal(myModalEl);

myModalEl.addEventListener('hidden.bs.modal', () => {
  localStorage.setItem('modaldismissed', true)
});


// Ascolta click solo su link <a> escludendo i link che già puntano a Mysteryfy o a Stripe e che hanno la classe "mysteryfy"
document.querySelectorAll("a:not(.mysteryfy").forEach(link => {
    link.addEventListener("click", (e) => {
      if(localStorage.getItem('modaldismissed') === true) {
        return;
      }

      e.preventDefault();
      const href = link.getAttribute('href');
      const target = link.getAttribute('target');

      myModal.show();

      myModalEl.addEventListener('hidden.bs.modal', () => {
        if (target === 'blank') {
          window.open(href, '_blank');
        } else {
          window.location.href = href;
        }
        localStorage.setItem('modaldismissed', true)
      }, { once: true }); // 'once: true' fa sì che l'evento si attivi una sola volta
    });
});
