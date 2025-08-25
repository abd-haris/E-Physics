import '../styles/styles.css';
import App from './pages/app';

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.getElementById('main-content'),
    headerList: document.getElementById('header-list'),
    navigationDrawer: document.getElementById('navigation-drawer'),
    headerPoint: document.getElementById('header-point'),
  });
  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });
});
