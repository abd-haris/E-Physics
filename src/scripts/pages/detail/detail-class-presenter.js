export default class DetailMyClassPresenter {
  #courseId;
  #view;
  #model;

  constructor(courseId, { view, model }) {
    this.#courseId = courseId;
    this.#view = view;
    this.#model = model;
  }

  async initialDetailMyModule() {
    try {
      const response = await this.#model.getDetailMyCourse(this.#courseId);
      if (!response) {
        this.#view.showError("Data kursus tidak ditemukan.");
        return;
      }
      this.#view.populateMyDetailModule(response.message, response.data);
    } catch (error) {
      this.#view.showError("Terjadi kesalahan saat memuat data kursus: " + error.message);
    }
  }
}
