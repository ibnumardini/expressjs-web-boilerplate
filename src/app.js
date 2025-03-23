import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts';
import env from './config/env.js';
import routes from './routes.js';
import middlewares from './middlewares.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages/views'));
app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'pages/layout/main'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(middlewares);

app.use('/web', routes);

app.get('/', (req, res) => res.redirect('/v2'));
app.use((req, res) => res.status(404).send('404 - Page Not Found'));

app.listen(env.port, () =>
  console.log(`Server is running on http://localhost:${env.port}`)
);
