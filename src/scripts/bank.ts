// tslint:disable
declare var Waypoint: any;

import swal from 'sweetalert2';

import 'waypoints/lib/jquery.waypoints.js';
import { setTimeout } from 'core-js/library/web/timers';
const CountUp = require('countup.js');

let isStarted = false;

new Waypoint({
    element: document.querySelector('#querofazerparte'),
    handler: () => {
        if (!isStarted) {
            isStarted = true;
            new CountUp('doacoes', 0, 86, 0, 2.5).start();
            new CountUp('arrecadados', 0, 7215, 0, 3).start();
            new CountUp('seguidores', 0, 5870, 0, 3).start();
        }
    },
    offset: 0,
});


function bancoContent(_banco: any, _agencia: any, _cc: any, _cpf: any, _titular: any) {
    jQuery('#banco').text(_banco);
    jQuery('#agencia').text(_agencia);
    jQuery('#cc').text(_cc);
    jQuery('#cpf').text(_cpf);
    jQuery('#titular').text(_titular);
}

jQuery('#banco-brasil').bind('click', (e) => {
    e.preventDefault();


    if (jQuery('.banco-content-wrapper').hasClass('bb') && jQuery('.banco-content-wrapper').hasClass('opened')) {
        jQuery('.banco-content-wrapper').removeClass('opened');

    } else {
        jQuery('.banco-content-wrapper').addClass('opened');
    }




    bancoContent('BANCO DO BRASIL', 'AGÊNCIA: 0210-0', 'CONTA CORRENTE: 49898-x',
        'CPF: 116.323.076-69', 'Gabriela Freitas Pinto');


    jQuery('.banco-content-wrapper').addClass('bb');

    if (jQuery('.banco-content-wrapper').hasClass('caixa')) {
        jQuery('.banco-content-wrapper').removeClass('caixa')
    }
    if (jQuery('.banco-content-wrapper').hasClass('santander')) {
        jQuery('.banco-content-wrapper').removeClass('santander')
    }
})
jQuery('#banco-caixa').bind('click', (e) => {
    e.preventDefault();

    if (jQuery('.banco-content-wrapper').hasClass('caixa') && jQuery('.banco-content-wrapper').hasClass('opened')) {
        jQuery('.banco-content-wrapper').removeClass('opened');

    } else {
        jQuery('.banco-content-wrapper').addClass('opened');
    }

    bancoContent('BANCO CAIXA', 'AGÊNCIA: 6026', 'CONTA CORRENTE: 10056-8',
        'CPF: 072.980.946-37', 'Jordana de Souza Germano');
    jQuery('.banco-content-wrapper').addClass('caixa');

    if (jQuery('.banco-content-wrapper').hasClass('bb')) {
        jQuery('.banco-content-wrapper').removeClass('bb')
    }
    if (jQuery('.banco-content-wrapper').hasClass('santander')) {
        jQuery('.banco-content-wrapper').removeClass('santander')
    }

})
jQuery('#banco-santander').bind('click', (e) => {
    e.preventDefault();

    if (jQuery('.banco-content-wrapper').hasClass('santander') && jQuery('.banco-content-wrapper').hasClass('opened')) {
        jQuery('.banco-content-wrapper').removeClass('opened');
    } else {
        jQuery('.banco-content-wrapper').addClass('opened');
    }

    bancoContent('BANCO SANTANDER', 'AGÊNCIA: 3980', 'CONTA CORRENTE: 01002539-4',
        'CPF: 014.356.286-08', 'Richard Maxwell Pereira');

    jQuery('.banco-content-wrapper').addClass('santander');

    if (jQuery('.banco-content-wrapper').hasClass('caixa')) {
        jQuery('.banco-content-wrapper').removeClass('caixa')
    }
    if (jQuery('.banco-content-wrapper').hasClass('bb')) {
        jQuery('.banco-content-wrapper').removeClass('bb')
    }

});

$('#maior').bind('click', function (e) {
    e.preventDefault();
    swal({
        customClass: 'height100',
        width: '1200px',
        imageUrl: 'assets/img/modal/modal3.png',
        imageWidth: 90,
        background: '#ffff',
        showConfirmButton: false,
        showCloseButton: true,
        title: require('html-loader!./../partials/modal-doadores.html')
    });
    setTimeout(() => {
        document.getElementsByClassName('colaborador')[0].addEventListener('click', function () {
            swal.close();
            swal({
                width: '400px',
                imageUrl: 'assets/img/modal/modal2.png',
                imageWidth: 80,
                background: '#ffff',
                showConfirmButton: false,
                showCloseButton: true,
                title: '<h1 class="parteequipe-title bold"> Quer fazer parte da nossa equipe?</h1>',
                html: require('html-loader!./../partials/modal-querofazerparte.html'),
            });
        });
    }, 1000);
})