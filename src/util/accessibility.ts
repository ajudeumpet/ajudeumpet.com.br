// tslint:disable

const btnContraste = document.getElementById('btn-contraste');
let isConstrasted = false;
const setId = 'contrast';

jQuery('#fontAdd').click(() => {
  fontResize(true);
});

jQuery('#fontRemove').click(() => {
  fontResize(false);
});

function fontResize(isAdd: boolean) {
  jQuery('.acessibilidade').each((i, el) => {
    const $el = jQuery(el);
    let size = parseInt($el.css('font-size'));
    if (isAdd) {
      size += 1;
    } else {
      size -= 1;
    }
    $el.css('fontSize', size);
  });
}
// tslint:disable


btnContraste.addEventListener('click', function () {
  if (isConstrasted) {
    removeContrast();
  } else {
    setContrast();
  }
});

function setContrast() {
  isConstrasted = true;
  document.querySelector("html").setAttribute("id", setId);
  document.cookie = "contrast=" + setId + "";
}

function removeContrast() {
  isConstrasted = false;
  document.getElementById(setId).removeAttribute('id');
  document.cookie = 'contrast=; Max-Age=-99999999;';
}

function loadCookie() {
  let contrast = document.cookie.indexOf('contrast');
  if (contrast != -1) {
    setContrast();
  }
}

loadCookie();