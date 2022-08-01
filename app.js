const texts = document.getElementsByClassName('paths');

for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
    const delay = i < 5 ? 0.3 * i : 0.2 * (i - 5);

    text.setAttribute('stroke', '#F98A96');

    text.style.strokeDasharray = Math.ceil(text.getTotalLength());
    text.style.strokeDashoffset = Math.ceil(text.getTotalLength());

    text.style.animation = "fade-inside 0.6s ease-in forwards";
    text.style.animationDelay = `${delay}s`;
}

const lastText = texts[texts.length - 1];
const animationPage = document.getElementsByClassName('animation')[0];
lastText.addEventListener('animationend', () => {
    animationPage.style = "transition: all 0.6s ease 0.3s; opacity: 0; z-index: -10;";
});