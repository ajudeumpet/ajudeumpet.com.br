// tslint:disable
import swal from 'sweetalert2';

jQuery('#slick-pequeno').slick({
  autoplay: true,
  autoplaySpeed: 2800,
  centerMode: false,
  cssEase: 'linear',
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  initialSlide: 0,
  arrows: true,
  prevArrow: `
    <button type="button" 
    class="slick-prev chevron-left" style="left: -25px;height: 30px;
    width: 30px;z-index:10"><img style="transform:rotate(180deg);width:30px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MDcuNDM2IDQwNy40MzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwNy40MzYgNDA3LjQzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+Cjxwb2x5Z29uIHBvaW50cz0iMTEyLjgxNCwwIDkxLjU2NiwyMS4xNzggMjczLjUxMiwyMDMuNzE4IDkxLjU2NiwzODYuMjU4IDExMi44MTQsNDA3LjQzNiAzMTUuODY5LDIwMy43MTggIiBmaWxsPSIjNDQ0NDQ0Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" /></button>`,
  nextArrow: `<button type="button" 
    class="slick-next chevron-right" style="right:-25px;height: 30px;
    width: 30px;"><img style="width:30px" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MDcuNDM2IDQwNy40MzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwNy40MzYgNDA3LjQzNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+Cjxwb2x5Z29uIHBvaW50cz0iMTEyLjgxNCwwIDkxLjU2NiwyMS4xNzggMjczLjUxMiwyMDMuNzE4IDkxLjU2NiwzODYuMjU4IDExMi44MTQsNDA3LjQzNiAzMTUuODY5LDIwMy43MTggIiBmaWxsPSIjNDQ0NDQ0Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" /></button>`,
  'responsive': [{
    'breakpoint': 2000,
    'settings': {
      'slidesToShow': 5,
      'slidesToScroll': 1
    }
  }, {
    'breakpoint': 1440,
    'settings': {
      'slidesToShow': 4,
      'slidesToScroll': 1
    }
  }, {
    'breakpoint': 1024,
    'settings': {
      'slidesToShow': 3,
      'slidesToScroll': 1
    }
  }, {
    'breakpoint': 768,
    'settings': {
      'slidesToShow': 2,
      'slidesToScroll': 1
    }
  }, {
    'breakpoint': 426,
    'settings': {
      'slidesToShow': 1,
      'slidesToScroll': 1
    }
  }]
});

jQuery('#querofazerparte').bind('click', function (e) {
  e.preventDefault();
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
  })
});
