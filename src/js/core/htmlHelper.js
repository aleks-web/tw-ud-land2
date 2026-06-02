import themeConfig from './../../../tailwind.config.mjs';
import "./scss/helper.scss";

document.addEventListener("DOMContentLoaded", function() {
    if (import.meta.env.DEV) {
        insertHtml();
        initJs();
    }
});

function isTailwindUsed() {
    const elements = document.querySelectorAll('*');
    const tailwindClasses = ['bg-', 'text-', 'border-', 'rounded-', 'shadow-'];
    for (let element of elements) {
        const classList = Array.from(element.classList);
        for (let tailwindClass of tailwindClasses) {
            if (classList.some(cls => cls.startsWith(tailwindClass))) {
                return true;
            }
        }
    }
    return false;
}

function insertHtml() {
    const htmlConatiner = document.createElement('div');
    htmlConatiner.setAttribute('class', 'dev-helper');

    if (isTailwindUsed()) {
        const html = `
            <div class="dev-helper__btn dev-helper__btn-tw">
                <span class="flex sm:hidden">none</span>
                <span class="hidden sm:flex md:hidden">sm</span>
                <span class="hidden md:flex lg:hidden">md</span>
                <span class="hidden lg:flex xl:hidden">lg</span>
                <span class="hidden xl:flex 2xl:hidden">xl</span>
                <span class="hidden 2xl:flex">2xl</span>
            </div>
        `;
        htmlConatiner.innerHTML = html;
    }
    document.body.append(htmlConatiner);

    initQuiz();
}

function initJs() {
    const devHelper = document.querySelector('.dev-helper');
    devHelper.addEventListener('click',  e => {
        //console.log(e);
    });
    devHelper.style.zIndex = findHighestZIndex() + 1;
}

function initQuiz() {
    if (!window.quiz) { return; }

    const htmlConatiner = document.querySelector('.dev-helper');
    const quizNode = document.createElement('div');
    const quizNodeClasses = `dev-helper__btn dev-helper__btn-quiz`;
    quizNode.setAttribute('class', quizNodeClasses);

    quizNode.innerHTML = `
        <div>Quiz</div>
    `;

    htmlConatiner.prepend(quizNode);

    document.querySelector('.dev-helper__btn-quiz').addEventListener('click', (e) => {
        window.quiz.setStep(5);
    });
}