import DetailModulePresenter from "./detail-module-presenter";
import { parseActivePathname } from "../routes/url-parser";
import { DataLearning } from "../../data/get-data";
import { generateDetailModuleTemplate } from "../../template";
import { drawerSidebar, openSidebar, closeSidebar, updatedProgress } from "../utils";

export default class DetailModule {
  #presenter;
  #moduleId;
  #courseId;

  async render() {
    return `
    <div id="detail-module"></div>
    `;
  }

  async afterRender() {
    const params = parseActivePathname();
    this.#courseId = params.id;
    this.#moduleId = params.moduleId;
    this.#presenter = new DetailModulePresenter(params.id, {
      view: this,
      model: DataLearning,
    });

    this.#presenter.initialDetailModule();

    const header = document.querySelector("header");
    if (header) {
      header.style.display = "none";
    }

    const footer = document.querySelector("footer");
    if (footer) {
      footer.style.display = "none";
    }
  }

  populateDetailModule(message, courses) {
    document.getElementById("detail-module").innerHTML = generateDetailModuleTemplate(courses, this.#moduleId);
    drawerSidebar(document.getElementById("drawer-sidebar"), document.getElementById("default-sidebar"));
    closeSidebar(document.getElementById("close-sidebar"), document.getElementById("default-sidebar"), document.getElementById("open-sidebar"), document.getElementById("content"));
    openSidebar(document.getElementById("open-sidebar"), document.getElementById("default-sidebar"), document.getElementById("content"));
    document.getElementById("module-completed").addEventListener("click", () => {
      this.#presenter.completedModule(this.#courseId, this.#moduleId);
      updatedProgress(document.getElementById("progress-bar"), document.getElementById("percentage"), courses.progress);
    });
  }
}
