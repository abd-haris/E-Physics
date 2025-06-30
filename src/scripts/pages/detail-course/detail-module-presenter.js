export default class DetailModulePresenter {
  #courseId;
  #view;
  #model;

  constructor(courseId, { view, model }) {
    this.#courseId = courseId;
    this.#view = view;
    this.#model = model;
  }

  async initialDetailModule() {
    try {
      const response = await this.#model.getDetailMyCourse(this.#courseId);
      console.log("response : ", response);
      if (!response) {
        console.log("response tidak ditemukan");
        return;
      }

      this.#view.populateDetailModule(response.message, response.data);
    } catch (error) {
      console.error("initialDetailModule: ", error.message);
    }
  }

  async completedModule(courseId, moduleId) {
    try {
      this.#model.updateModuleToComplete(courseId, moduleId);
      console.log("updateModuleToComplete: ", this.#model.updateModuleToComplete(courseId, moduleId));
    } catch (error) {
      console.error("completedModule: ", error);
    }
  }
}
