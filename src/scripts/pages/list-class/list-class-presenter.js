export default class ListClassPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async initialListModule() {
    const response = await this.#model.getAllModules();
    if (!response) {
      console.log('response tidak ditemukan!');
      return;
    }
    this.#view.populateListModules(response.message, response.data);
  }
  async setMyCourse(courseId) {
    await this.#model.setToMyCourse(courseId);
    if (!courseId) {
      console.log('courseId tidak ditemukan');
    }
  }
}
