import { Site } from './classes/site';
import { model } from './model';
import './styles/main.css';
import { Sidebar } from './classes/sidebar';

const site = new Site('#site');

new Sidebar('#panel');

site.render(model);
