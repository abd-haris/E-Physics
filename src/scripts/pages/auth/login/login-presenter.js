export default class LoginPresenter {
  #view;
  #model;
  #authModel;

  constructor({ view, model, authModel }) {
    this.#view = view;
    this.#model = model;
    this.#authModel = authModel;
  }

  async getLogin({ email, password }) {
    this.#view.showLoadingButton();
    try {
      const response = await this.#model.login({ email, password });
      if (!response || !response.user) {
        console.error('getLogin: error: ', error);
        return;
      }
      const idToken = await response.user.getIdToken();
      this.#authModel.putAccessToken(idToken);

      this.#view.loginSuccessfully(response);
    } catch (error) {
      console.error('getLogin: error: ', error);
    } finally {
      this.#view.hideLoadingButton();
    }
  }
}
