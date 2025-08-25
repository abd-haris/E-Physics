import RegisterPresenter from './register-presenter';
import Auth from '../../../network/auth';

export default class RegisterPage {
  #presenter = null;
  async render() {
    return `
    <div id="form-container-register" class="bg-base-100 w-full flex justify-center items-center">
        <div class="w-96 card bg-base-100 shadow-sm">
            <form action="" id="register-form">
                <div class="px-10 py-6">
                    <h1 class="text-primary text-2xl font-bold text-center mb-5">Daftar Akun</h1>
                    <div class="validation-name flex flex-col gap-y-2 mb-3">
                        <label for="username">Username</label>
                        <input id="username" type="text" class="input validator w-full" placeholder="a.k.a..." required />
                        <p class="validator-hint hidden">Wajib diisi!</p>
                    </div>
                    <div class="validation-email flex flex-col gap-y-2 mb-3">
                        <label for="email">Email</label>
                        <input id="email" type="email" class="input validator w-full" placeholder="name@gmail.com" required />
                        <p class="validator-hint hidden">Wajib diisi!</p>
                    </div>
                    <div class="validation-password flex flex-col gap-y-2 mb-3">
                        <label for="password">Password</label>
                        <input id="password" type="password" class="input validator w-ful" placeholder="******" minlength="8" required />
                        <p class="validator-hint hidden">Wajib diisi! Minimal 8 karakter</p>
                    </div>
                    <div id="submit-button">
                      <button class="btn btn-neutral w-24">Daftar</button>
                    </div>
                </div>
            </form>
            <div class="flex justify-center mb-6 gap-x-2">
                <span>Sudah punya akun?</span>
                <a href="#/login" class="underline font-semibold text-neutral">Masuk
                </a>
            </div>
        </div>
    </div>
    `;
  }

  async afterRender() {
    this.#presenter = new RegisterPresenter({
      view: this,
      model: Auth,
    });
    this.contentHeight();
    this.#setupForm();
    const header = document.querySelector('header');
    if (header) {
      header.style.display = 'block';
    }
  }

  #setupForm() {
    document.getElementById('register-form').addEventListener('submit', async (event) => {
      event.preventDefault();

      const formInput = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      };

      await this.#presenter.getRegistered(formInput);
    });
  }

  registeredSuccessfully(formInput) {
    console.log(formInput);

    location.hash = '/login';
  }

  contentHeight() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const mainContent = document.querySelector('#form-container-register');
    mainContent.style.height = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }

  showLoadingButton() {
    document.getElementById('submit-button').innerHTML =
      '<button class="btn btn-neutral w-24"><span class="loading loading-spinner text-success"></span></button>';
  }

  hideLoadingButton() {
    document.getElementById('submit-button').innerHTML =
      '<button class="btn btn-neutral w-24">Daftar</button>';
  }
}
