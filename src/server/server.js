import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import Router from 'react-router';
import 'babel/register';
import User from './handlers/UserHandler';

const app = express();

app.set('views', './views');

var engineOptions = { transformViews: false };
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine(engineOptions));
app.use(bodyParser.json());

import routes from '../shared/routes';

app.get('/user', User.getUser);
app.post('/user', User.updateUser);

app.get('/*', function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content });
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
