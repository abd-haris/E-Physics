import MyClassPresenter from './my-class-presenter';
import { generateMyClassListItemTemplate, generateMyClassListEmptyTemplate } from '../../template';
import { DataLearning } from '../../data/get-data';
import { percentageIndicator } from '../utils';

export default class MyClass {
  #presenter;

  async render() {
    return `
        <div class="px-5 mt-32">
          <div id="my-class-list__item" class="w-full"></div>
        </div>
    `;
  }

  async afterRender() {
    this.#presenter = new MyClassPresenter({
      view: this,
      model: DataLearning,
    });

    this.#presenter.initialMyListModule();
    const header = document.querySelector('header');
    if (header) {
      header.style.display = 'block';
    }
  }

  populateMyListModules(message, courses) {
    if (courses.length <= 0) {
      this.populateMyClassEmpty();
      return;
    }

    const html = courses.reduce((accumulator, course) => {
      return accumulator.concat(generateMyClassListItemTemplate({ ...course }));
    }, '');
    document.getElementById('my-class-list__item').innerHTML = `
    <div class="grid gap-y-8 gap-x-5 my-10 md:mx-5 md:grid-cols-3 lg:grid-cols-4">${html}</div>
    `;
    courses.map((course) => {
      percentageIndicator(
        document.querySelector(`#progress-${course.courseId}`),
        document.querySelector(`#percentage-${course.courseId}`),
        course.progress,
        document.querySelector(`[data-courseId="${course.courseId}"] .card-btn`),
      );
    });
  }

  populateMyClassEmpty() {
    document.getElementById('my-class-list__item').innerHTML = generateMyClassListEmptyTemplate();
  }
}
