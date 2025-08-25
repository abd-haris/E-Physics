import LoginPresenter from './login-presenter';
import Auth from '../../../network/auth';
import * as AuthModel from '../../auth/check-user-auth';

export default class LoginPage {
  #presenter = null;

  async render() {
    return `
    <div id="form-container-login" class="bg-base-100 w-full flex justify-center items-center">
      <div id="container-alert"></div>
        <div class="w-96 card bg-base-100 shadow-sm">
          <form action="" id="login-form">
            <div class="px-10 py-6">
              <h1 class="text-primary text-2xl font-bold text-center mb-5">Masuk Akun</h1>
              <div class="flex flex-col gap-y-2 mb-3">
                <label for="email">Email</label>
                <input id="email" type="email" class="input validator w-full" placeholder="name@gmail.com" required />
                <p class="validator-hint hidden">email wajib diisi!</p>
              </div>
              <div class="flex flex-col gap-y-2 mb-3">
                <label for="password">Password</label>
                <input id="password" type="password" class="input validator w-full" placeholder="******" minlength="8" required />
                <p class="validator-hint hidden">Wajib diisi! minimal 8 karakter</p>
              </div>
              <div id="submit-button">
                <button class="btn btn-neutral w-24">Masuk</button>
              </div>
            </div>
          </form>
          <div class="flex justify-center mb-6 gap-x-2">
            <span>Belum punya akun?</span>
              <a href="#/register" class="underline font-semibold text-neutral">Daftar</a>
          </div>
        </div>
      </div>
        `;
  }

  async afterRender() {
    this.#presenter = new LoginPresenter({
      view: this,
      model: Auth,
      authModel: AuthModel,
    });
    this.contentHeight();
    this.#setupForm();
  }

  #setupForm() {
    document.getElementById('login-form').addEventListener('submit', async (event) => {
      const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      };

      await this.#presenter.getLogin(data);
    });
  }

  loginSuccessfully(data) {
    console.log('data: ', data);

    location.hash = '/';
  }

  contentHeight() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const mainContent = document.querySelector('#form-container-login');
    mainContent.style.height = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }

  showLoadingButton() {
    document.getElementById('submit-button').innerHTML =
      '<button class="btn btn-neutral w-24"><span class="loading loading-spinner text-success"></span></button>';
  }

  hideLoadingButton() {
    document.getElementById('submit-button').innerHTML =
      '<button class="btn btn-neutral w-24">Masuk</button>';
  }
}
