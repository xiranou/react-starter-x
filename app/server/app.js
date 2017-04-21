import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('views/index.html'));
});

export default app;
