// tslint:disable
const youtube = <HTMLElement[]><any>document.querySelectorAll('.youtube');

for (let i = 0; i < youtube.length; i++) {

    const source = 'https://img.youtube.com/vi/' + youtube[i].dataset.embed + '/sddefault.jpg';

    const image = new Image();
    image.src = source;
    image.addEventListener('load', () => {
        youtube[i].appendChild(image);
    });

    youtube[i].addEventListener('click', clickYoutube);

    function clickYoutube() {
        window.console.log();
        const iframe = document.createElement('iframe');

        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.dataset.embed + '?rel=0&showinfo=0&autoplay=1');

        this.innerHTML = '';
        this.appendChild(iframe);
    }
};
