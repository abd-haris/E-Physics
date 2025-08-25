export default class RegisterPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async getRegistered({ email, password }) {
    this.#view.showLoadingButton();
    try {
      const response = await this.#model.register({ email, password });
      console.log('response: ', response);
      if (!response) {
        console.error('getRegistered: response: ', response);
        return;
      }

      this.#view.registeredSuccessfully(response);
    } catch (error) {
      console.error('getRegistered: ', error);
    } finally {
      this.#view.hideLoadingButton();
    }
  }
}
