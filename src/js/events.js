import { Fancybox } from "@fancyapps/ui";

document.addEventListener('fetchLeadSuccess', (e) => {
    Fancybox.close();
    window.location.href = '/success.html';
});