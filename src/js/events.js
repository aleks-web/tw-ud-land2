import { Fancybox } from "@fancyapps/ui";

document.addEventListener('fetchLeadSuccess', (e) => {
    Fancybox.close();
    ym(97164229,'reachGoal','send_form')

    setTimeout(() => {
        window.location.href = '/success.html';
    }, 200);
});