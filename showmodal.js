console.log("showmodal.js loaded");

const myModal = new bootstrap.Modal(document.getElementById('promozioneModal'));

function openPromozioneModal() {
    var modalShown = sessionStorage.getItem('modalShown');
    setTimeout(() => {
        if (!document.getElementById("iubenda-cs-banner") && !modalShown) myModal.show();
    }, 500);
}

function waitForBanner(callback) {
    const observer = new MutationObserver(() => {
        const iubendaBanner = document.getElementById("iubenda-cs-banner");
        if (iubendaBanner) {
            observer.disconnect(); // smetti di osservare quando trovato
            //console.log("iubenda Banner", iubendaBanner)
            callback(iubendaBanner);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

waitForBanner((iubendaBanner) => {
    console.log("iubenda Banner trovato", iubendaBanner);
    myModal.hide();

    const parent = iubendaBanner.parentNode;

    const cookieBannerObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.removedNodes.forEach((removedNode) => {
                if (removedNode === iubendaBanner) {
                    //console.log("iubenda Banner rimosso", removedNode);
                    myModal.show();
                    openPromozioneModal();
                }
            });
        });
    });

    cookieBannerObserver.observe(parent, { childList: true})
});


const modalObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((removedNode) => {
            if (removedNode.classList[0] === 'modal-backdrop') {
                //console.log("Modal rimosso", removedNode);
                sessionStorage.setItem('modalShown', 'true');
            }
        });
    });
});

modalObserver.observe(document.body, { childList: true });
// commenta/decommenta per spegnere/attivare il modal
//openPromozioneModal();