import HomePresenter from "./home-presenter";
import { DataLearning } from "../../data/get-data";
import {
  generateContinueLearningDashboardEmptyTemplate,
  generateContinueLearningDashboardListTemplate,
  generateFinishedLearningDashboardListTemplate,
  generateFinishedLearningDashboardEmptyTemplate,
  generateCardLevelBeginnerDashboardTemplate,
  generateCardLevelIntermediateDashboardTemplate,
  generateCardLevelExpertDashboardTemplate,
} from "../../template";

export default class DashboardPage {
  #presenter;

  async render() {
    return `
    <div class="mx-5 mt-32">
      <div id="card-level" class="flex justify-center mb-10">
      </div>
      <div class="my-20">
        <div>
          <h2 class="mb-5 text-xl font-bold md:mx-5">Sedang dipelajari</h2>
          <div id="continue-learning"></div>
        </div>
      </div>
      <div class="my-20">
        <div>
          <h2 class="mb-5 text-xl font-bold md:mx-5">Sudah dipelajari</h2>
          <div id="finished-learning"></div>
        </div>
      </div>
    </div>
    `;
  }

  async afterRender() {
    this.#presenter = new HomePresenter({
      view: this,
      model: DataLearning,
    });

    this.#presenter.initialDashboard();
    const header = document.querySelector("header");
    if (header) {
      header.style.display = "block";
    }
  }

  populateLearningDashboardList(courses) {
    const continueLearning = courses
      .filter((course) => course.progress > 0 && course.progress < 100)
      .reduce((accumulator, course) => {
        return accumulator.concat(generateContinueLearningDashboardListTemplate({ ...course }));
      }, "");

    const finishedLearning = courses
      .filter((course) => course.progress === 100)
      .reduce((accumulator, course) => {
        console.log("course module length: ", course.modules.length);
        return accumulator.concat(generateFinishedLearningDashboardListTemplate({ ...course }));
      }, "");

    console.log("continue learning: ", continueLearning.length);

    document.getElementById("continue-learning").innerHTML =
      continueLearning.length > 0 ? `<div class="grid gap-y-3 md:grid-cols-2 md:gap-x-10 md:mx-5 lg:grid-cols-3">${continueLearning}</div>` : `<div class="md:mx-5">${generateContinueLearningDashboardEmptyTemplate()}</div>`;

    document.getElementById("finished-learning").innerHTML =
      finishedLearning.length > 0 ? `<div class="grid gap-y-3 md:grid-cols-2 md:gap-x-10 md:mx-5 lg:grid-cols-3">${finishedLearning}</div>` : `<div class="md:mx-5">${generateFinishedLearningDashboardEmptyTemplate()}</div>`;
  }

  levelLearningDashboard(gamification) {
    if (gamification.point >= 0 && gamification.point < 100) {
      return (document.getElementById("card-level").innerHTML = generateCardLevelBeginnerDashboardTemplate(gamification));
    } else if (gamification.point >= 100 && gamification.point < 200) {
      return (document.getElementById("card-level").innerHTML = generateCardLevelIntermediateDashboardTemplate(gamification));
    } else if (gamification.point >= 200 && gamification.point < 350) {
      return (document.getElementById("card-level").innerHTML = generateCardLevelExpertDashboardTemplate(gamification));
    }
  }
}
