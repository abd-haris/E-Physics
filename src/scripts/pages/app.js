import {
  getActiveRoute,
  parseActivePathname,
  getActivePathname,
  parsePathname,
  getRoute,
} from './routes/url-parser';
import { routes } from './routes/routes';
import {
  generateHeaderListTemplate,
  generateNavigationDrawerTemplate,
  generateHeaderPointTemplate,
  generateHeaderLogoutTemplate,
} from '../template';
import { getAccessToken, getLogout } from './auth/check-user-auth';
import { transitionHelper } from './utils';

export default class App {
  #content;
  #headerList;
  #navigationDrawer;
  #headerPoint;
  #currentPath;

  constructor({ content, headerList, navigationDrawer, headerPoint }) {
    this.#content = content;
    this.#headerList = headerList;
    this.#navigationDrawer = navigationDrawer;
    this.#headerPoint = headerPoint;
    this.#currentPath = getActivePathname();
  }

  #setupNavigationList(currentPage) {
    const isLogin = !!getAccessToken();
    const navList = this.#headerList;
    const navDrawer = this.#navigationDrawer.children.namedItem('drawer');
    const navPoint = this.#headerPoint;

    navList.innerHTML = generateHeaderListTemplate(currentPage);
    navDrawer.innerHTML = generateNavigationDrawerTemplate(currentPage);

    if (!isLogin) {
      navPoint.innerHTML = generateHeaderPointTemplate();
      return;
    }

    navPoint.innerHTML = generateHeaderLogoutTemplate();

    document.getElementById('logout-btn').addEventListener('click', (event) => {
      event.preventDefault();

      if (confirm('apakah anda yakin untuk keluar?')) {
        getLogout();

        location.hash = '/login';
      }
    });
  }

  async renderPage() {
    const routeName = getActiveRoute();
    // const params = parseActivePathname();
    const route = routes[routeName] || routes['/'];

    let currentPage = routeName;
    if (routeName.startsWith('my-class')) {
      currentPage = 'my-class';
    } else if (routeName === '/') {
      currentPage = 'dashboard';
    }

    const page = route();
    // if (page.setParams) {
    //   page.setParams = params;
    // }

    if (!document.startViewTransition) {
      this.#content.innerHTML = await page.render();
      await page.afterRender();
      this.#setupNavigationList(currentPage);
      return;
    }

    const navigationType = this.#getNavigationType();
    let targetThumbnail = null;
    let detailImage = null;

    if (navigationType === 'list-to-detail' && route) {
      const parsedPathname = parseActivePathname();
      targetThumbnail = document.querySelector(`
        .card[data-courseId="${parsedPathname.id}"] .vt-item-image
        `);

      if (targetThumbnail) {
        targetThumbnail.style.viewTransitionName = 'detail-image';
      }
    }

    if (navigationType === 'detail-to-list' && route) {
      detailImage = document.querySelector('.vt-detail-image');

      if (detailImage) {
        detailImage.style.viewTransitionName = 'detail-image';
      }
    }

    const transition = transitionHelper({
      updateDOM: async () => {
        this.#content.innerHTML = await page.render();
        await page.afterRender();

        if (navigationType === 'detail-to-list' && route) {
          const parsedPathname = parsePathname(this.#currentPath);
          targetThumbnail = document.querySelector(`
        .card[data-courseId="${parsedPathname.id}"] .vt-item-image
        `);

          if (targetThumbnail) {
            targetThumbnail.style.viewTransitionName = 'detail-image';
          }
        }
      },
    });

    transition.ready.catch(console.error);
    transition.updateCallbackDone
      .then(() => {
        scrollTo({ top: 0, behavior: 'instant' });
        this.#setupNavigationList(currentPage);
      })
      .catch(console.error);

    transition.finished.then(() => {
      if (targetThumbnail) {
        targetThumbnail.style.viewTransitionName = '';
      }

      if (detailImage) {
        detailImage.style.viewTransitionName = '';
      }

      this.#currentPath = getActivePathname();
    });
  }

  #getNavigationType() {
    const fromRoute = getRoute(this.#currentPath);
    const toRoute = getActiveRoute();

    const courseListPath = ['/my-class/my'];
    const courseDetailPath = ['/my-class/:id/corridor'];

    if (courseListPath.includes(fromRoute) && courseDetailPath.includes(toRoute)) {
      return 'list-to-detail';
    }

    if (courseDetailPath.includes(fromRoute) && courseListPath.includes(toRoute)) {
      return 'detail-to-list';
    }

    return null;
  }
}
