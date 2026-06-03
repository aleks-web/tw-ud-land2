import { Fancybox } from "@fancyapps/ui";

document.addEventListener('fetchLeadSuccess', (e) => {
    Fancybox.close();
    // openModal("#modal-success");
    window.location.href = '/success.html';
});