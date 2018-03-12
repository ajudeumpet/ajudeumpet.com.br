// tslint:disable
import swal from 'sweetalert2';

jQuery('.precadastro-btn').bind('click', function (e) {
    e.preventDefault();
    swal({
        width: '400px',
        imageUrl: 'assets/img/modal/modal.png',
        imageWidth: 300,
        background: '#ffff',
        showConfirmButton: false,
        showCloseButton: true,
        customClass: 'parteequipe-modal',
        title: `<h1 class="precadastro-title bold"> Receba notícias do projeto e seja um dos possíveis usuários da versão beta*</h1>`,
        html: require('html-loader!./../partials/modal-precadastro'),
    });
});