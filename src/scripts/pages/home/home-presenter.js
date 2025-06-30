export default class HomePresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async initialDashboard() {
    try {
      const response = await this.#model.getAllModules();
      if (!response) {
        console.log("populateDashboard: ", response);
        this.#view.populateContinueLearningDashboardError();
        return;
      }
      this.#view.populateLearningDashboardList(response.data);
      this.#view.levelLearningDashboard(response.gamification);
    } catch (error) {
      console.error("initialDashboard: ", error);
      this.#view.populateContinueLearningDashboardError();
      return;
    }
  }
}
