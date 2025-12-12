# wordpress-showmodal
Script per la gestione di un modal in un framework Bootstrap

Il modal viene inserito nella pagina dove deve comparire, oppure subito dopo il <body> in <head> perché sia presente in ogni pagina.

L'oggetto modal avrà id='promozioneModal'

La gestione dell'apertura e chiusura è gestita dalla localStorage 'modaldismissed' così una volta visualizzato e chiuso, non comparirà in altre pagine.

È importante che il modal compaia dopo un comportameno esplicito dell'utente, ai fini della compliance SEO. Per esempio restare per un certo tempo sulla pagina, fare uno scroll o cliccare su un qualsiasi link.

## File nel progetto
`` showmodal.js `` il modal compare appena chiuso il cookie banner di Iubenda (no SEO compliant)
`` showmodal-scroll.js `` compare quando un oggetto compare nel viewport
`` showmodal-click.js `` compare quando l'utente fa click su un link

## Il link al file in footer.php
Deve essere inserita la chiamata allo script da mettere nella cartella assett/js nel footer appena sotto la chiamata agli script di bootstrap.

Nel caso di temi child di Wordpress, showmodal.js sarà nella cartella assets/js del tema padre come la chiamata allo script sarà nel footer.php del tema padre.