// tslint:disable
interface Window {
    sendForm: (type: string) => any;
};

window.sendForm = function (type: string) {
    const url = '/api/v1/contact';
    let data: any = {};

    if (type === 'precadastro') {
        data = jQuery('#formPrecadastro').serialize();
    } else if (type === 'contact') {
        data = jQuery('#formContato').serialize();
    } else if (type === 'querofazerparte') {
        data = jQuery('#formQuero').serialize();
    }
    else {
        return;
    }
    send(data, url);
}

function send(data: any, url: string) {
    jQuery.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: function (data) {
            const swal = require('sweetalert2');
            swal.close();
            swal({
                title: 'Obrigado!',
                text: 'Entraremos em contato em breve!',
                type: 'success',
                timer: 5000
            });
        }
    });
}