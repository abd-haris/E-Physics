export default class MyClassPresenter {
  #view;
  #model;
  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }
  async initialMyListModule() {
    const response = await this.#model.getMyCourses();
    if (!response) {
      console.log('response tidak ditemukan!');
      return;
    }
    this.#view.populateMyListModules(response.message, response.data);
  }
}
