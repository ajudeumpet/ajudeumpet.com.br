const imagemin = require('imagemin')
const ImageminGm = require('imagemin-gm')
const imageminGm = new ImageminGm()


let plugins = [
  imageminGm.resize({
    width: 200,
    height: 200,
    gravity: 'Center'
  }),
//   imageminGm.convert('jpg')
]

imagemin(['src/assets/img/apoio/*'], 'output/apoio', {
    use: plugins
  })
  .then(() => console.log('Images converted'))
  .catch(err => console.error(err))




let plugins2 = [
    imageminGm.resize({
      width: 180,
      height: 140,
      gravity: 'Center'
    }),
  //   imageminGm.convert('jpg')
  ]
  
  imagemin(['src/assets/img/team/*'], 'output/team', {
      use: plugins2
    })
    .then(() => console.log('Images converted'))
    .catch(err => console.error(err))
  