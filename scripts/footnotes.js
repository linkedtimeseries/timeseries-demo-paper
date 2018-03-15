document.addEventListener('DOMContentLoaded', () => {
    var footnotes = document.getElementsByClassName('note');
    var links = document.getElementsByClassName('footnote');

    for (let i = 0; i < footnotes.length; i++) {
        footnotes[i].style.display = 'none';
        links[i].href = footnotes[i].childNodes[1].childNodes[2].href;
        links[i].onclick = () => {
            window.open(footnotes[i].childNodes[1].childNodes[2].href);
            return false;
        }
    }
});