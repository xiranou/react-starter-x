import express from 'express';
import morgan from 'morgan';
import path from 'path';
import React from 'react';
import { StaticRouter, matchPath } from 'react-router';
import { renderToString } from 'react-dom/server';
import render from './render';
import Routes from 'app/shared/Routes';

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use('/build', express.static('build'));

const router = (req) => (
  <StaticRouter context={{}} location={req.url}>
    <Routes />
  </StaticRouter>
);

app.get('*', (req, res) => {
  res
  .status(200)
  .send(render(renderToString(router(req))));
});

export default app;
