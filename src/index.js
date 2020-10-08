import './css/styles.css';
import menuData from './menu.json';
import menuMarkup from './js/menu';
import refs from './js/refs';
import onThemeSwitchClick from './js/theme';

refs.menuList.innerHTML = menuMarkup(menuData);
refs.themeSwitch.addEventListener('change', onThemeSwitchClick);