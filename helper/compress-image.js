const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');


process('build/assets/img/*.{jpg,png}', 'build/assets/img', 45);
process('build/assets/img/apoio/*.{jpg,png}', 'build/assets/img/apoio', 45);
process('build/assets/img/banner/*.{jpg,png}', 'build/assets/img/banner', 60);
process('build/assets/img/modal/*.{jpg,png}', 'build/assets/img/modal', 50);
process('build/assets/img/team/*.{jpg,png}', 'build/assets/img/team', 60);

function process(src, dist, quality) {
  imagemin([src], dist, {
    plugins: [
      imageminMozjpeg({
        quality: quality,
      }),
      imageminPngquant({
        quality: quality.toString()
      })
    ]
  }).then(files => {
    console.log('done compress!');
  });
}
