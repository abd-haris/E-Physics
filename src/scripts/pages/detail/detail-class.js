import DetailMyClassPresenter from "./detail-class-presenter";
import { DataLearning } from "../../data/get-data";
import { parseActivePathname } from "../routes/url-parser";
import { generateDetailMyClassTemplate } from "../../template";
export default class DetailMyClass {
  #presenter;

  async render() {
    return `
    <div class="flex justify-center h-[80vh] items-center mt-24">
      <div id="detail-class" class=""></div>
    </div>
    `;
  }

  async afterRender() {
    this.#presenter = new DetailMyClassPresenter(parseActivePathname().id, {
      view: this,
      model: DataLearning,
    });

    await this.#presenter.initialDetailMyModule();

    const header = document.querySelector("header");
    if (header) {
      header.style.display = "block";
    }

    const footer = document.querySelector("footer");
    if (footer) {
      footer.style.display = "block";
    }
  }

  populateMyDetailModule(message, courses) {
    document.getElementById("detail-class").innerHTML = generateDetailMyClassTemplate(courses);

    const btnLearn = document.getElementById("btn-learn");
    if (courses.progress === 0) {
      return (btnLearn.textContent = "Mulai belajar");
    } else if (courses.progress > 0 && courses.progress < 100) {
      return (btnLearn.textContent = "Lanjut belajar");
    } else {
      return (btnLearn.textContent = "Belajar lagi");
    }
  }

  showError(message) {
    document.getElementById("main-content").innerHTML = `
      <p class="error">${message}</p>
    `;
  }
}
