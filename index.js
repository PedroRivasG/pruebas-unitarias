import { listen, get } from './app.js';
import DB from './database.js';

listen(get('puerto'), () => console.log("Servidor en línea " + get('puerto')));