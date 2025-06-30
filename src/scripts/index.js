import "../styles/styles.css";
import App from "./pages/app";
// import { generateHeaderListTemplate } from "./template";
// import { generateNavigationDrawerTemplate } from "./template";
// import { currentPage } from "./pages/utils";
// import { currentDrawer } from "./pages/utils";

document.addEventListener("DOMContentLoaded", async () => {
  const app = new App({
    content: document.getElementById("main-content"),
    headerList: document.getElementById("header-list"),
    navigationDrawer: document.getElementById("navigation-drawer"),
    headerPoint: document.getElementById("header-point"),
  });
  await app.renderPage();
  // currentPage(generateHeaderListTemplate, document.getElementById("header-list"));
  // currentDrawer(generateNavigationDrawerTemplate, document.getElementById("drawer"));

  window.addEventListener("hashchange", async () => {
    await app.renderPage();
    // currentPage(generateHeaderListTemplate, document.getElementById("header-list"));
    // currentDrawer(generateNavigationDrawerTemplate, document.getElementById("drawer"));
  });
});
