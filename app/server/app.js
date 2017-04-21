import express from 'express';
import morgan from 'morgan';
import path from 'path';
import React from 'react';
import { StaticRouter, matchPath } from 'react-router';
import render from './render';
import Routes from 'app/shared/Routes';

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use('/build', express.static('build'));

app.get('*', (req, res) => {
  res
  .status(200)
  .send(render(
    (
      <StaticRouter context={{}} location={req.url}>
        <Routes />
      </StaticRouter>
    )
  ));

  res.sendFile(path.resolve('views/index.html'));
});

export default app;
