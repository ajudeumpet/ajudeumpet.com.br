const fs = require('fs');

const ENV = {
  PORT: process.env.PORT || 9000,
  PORT_SSL: process.env.PORT_SSL || 9001,
  EMAIL: process.env.EMAIL || '',
  PASSWORD: process.env.PASSWORD || '',
  HOST: process.env.host || ''
};

Main();

async function Main() {
  try {
    const result = await createServer();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// ======================================================================

function createServer() {
  // serverHTTP();
  // serverHTTPS();

  const http2 = require('spdy');

  const options = {
    // key: fs.readFileSync(`${__dirname}/certificate/server.key`),
    // cert: fs.readFileSync(`${__dirname}/certificate/server.crt`),
    spdy: {
      plain: true,
      ssl: false
    }
  };

  return new Promise(async (resolve) => {
    http2
      .createServer(options, await webService())
      .listen(ENV.PORT, (err) => {
        if (err) {
          throw new Error(err);
        }
        resolve('Listening on port: ' + ENV.PORT + '.');
      });
  });
};


function serverHTTP() {
  const {
    lex,
    LEX
  } = letsencrypt();

  const http = require('http');

  http.createServer(LEX.createAcmeResponder(lex, function redirectHttps(req, res) {
    res.setHeader('Location', 'https://' + req.headers.host + req.url);
    res.statusCode = 302;
    res.end('<!-- Hello Developer Person! Please use HTTPS instead -->');
  })).listen(ENV.PORT);
}

async function serverHTTPS() {
  const {
    lex,
    LEX
  } = letsencrypt();

  const https = require('spdy');

  https.createServer(
      lex.httpsOptions,
      LEX.createAcmeResponder(lex, await webService())
    )
    .listen(ENV.PORT_SSL);
}

function letsencrypt() {
  const LEX = require('letsencrypt-express');
  const help = require('./config/helper');

  const lex = LEX.create({
    configDir: help.root('certificate'),
    approveRegistration: function (hostname, cb) {
      cb(null, {
        domains: [hostname],
        email: ENV.EMAIL,
        agreeTos: true
      });
    }
  });
  return {
    lex,
    LEX
  };
}
async function webService() {
  const express = require('express');
  const compression = require('compression');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const path = require('path');
  const app = new express();

  app.use(compression({
    level: 7
  }));

  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    next();
  });

  app.use('/', express.static(path.resolve(__dirname, 'build')));

  app.set('views', path.join(__dirname, 'build'));
  app.set('view engine', 'index');

  app.get('/pushy', (req, res) => {
    var stream = res.push('/main.js', {
      status: 200,
      method: 'GET',
      request: {
        accept: '*/*'
      },
      response: {
        'content-type': 'application/javascript'
      }
    })
    stream.on('error', function () {})
    stream.end('alert("hello from push stream!");')
    res.end('<script src="/main.js"></script>')
  });


  app.post('/api/v1/contact', (req, res) => {
    return sendEmail(req.body, res);
  });

  app.get('/*', (req, res) => {
    return res.send('HTTP2');
  });

  return app;
}


function sendEmail(data, res) {
  const nodemailer = require('nodemailer');
  const name = data.nome;
  const email = data.email;
  const mensagem = data.mensagem;
  const title = data.title;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: ENV.EMAIL,
      pass: ENV.PASSWORD
    }
  });

  const mailOptions = {
    from: ENV.EMAIL,
    to: ENV.EMAIL,
    subject: title,
    html: `
    <br>
    <h3>${title}</h3>
    <p><b>nome: </b>${name}</p>
    <p><b>email: </b>${email}</p>
    ${mensagem ? `<p><b>mensagem: </b>${mensagem}</p>` : ''}
    `
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      res.status(200).send();
    else
      res.status(200).send();
  });
}
