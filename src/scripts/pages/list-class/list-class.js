import ListClassPresenter from "./list-class-presenter";
import { DataLearning } from "../../data/get-data";
import { generateClassListItemTemplate } from "../../template";

export default class ListClass {
  #presenter;

  async render() {
    return `
    <div class="mt-20">
        <section>
            <div id="jumbotron" class="w-full h-60 bg-primary flex items-center justify-center p-4">
              <form id="search-course" class="w-full">
                <div class="flex flex-col items-center gap-y-5">
                  <h2 class="text-xl font-bold text-base-100 text-center">Pilih materi yang mau kamu pelajari</h2>
                  <div class="flex gap-x-3">
                    <label class="input md:w-96">
                      <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-width="2.5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </g>
                      </svg>
                      <input id="search-title" type="text" required placeholder="Cari course" />
                    </label>
                    <button id="search-submit" type="submit" class="btn bg-primary-content text-primary">Cari Course</button>
                  </div>
                </div>
              </form>
            </div>

            <div id="class-list__container" class="">
                <div id="class-list__select" class="w-full my-5">
                    <fieldset class="fieldset flex justify-center md:justify-start md:mx-5">
                        <select id="select" class="select">
                            <option disabled selected class="">Pilih kelas</option>
                            <option value="10">Kelas 10</option>
                            <option value="11">Kelas 11</option>
                            <option value="12">Kelas 12</option>
                        </select>
                    </fieldset>
                </div>

                <div class="w-full px-5">
                  <div id="class-list__item" class="grid gap-y-8 gap-x-5 my-10 md:grid-cols-3 lg:grid-cols-4"></div>
                </div>
            </div>
        </section>
    </div>
    `;
  }

  async afterRender() {
    this.#presenter = new ListClassPresenter({
      view: this,
      model: DataLearning,
    });

    await this.#presenter.initialListModule();
    const header = document.querySelector("header");
    if (header) {
      header.style.display = "block";
    }
  }

  populateListModules(message, courses) {
    const html = courses.reduce((accumulator, course) => {
      return accumulator.concat(generateClassListItemTemplate({ ...course }));
    }, "");

    document.getElementById("class-list__item").innerHTML = html;

    const selectElement = document.getElementById("select");
    const classListItem = document.getElementById("class-list__item");
    selectElement.addEventListener("change", () => {
      const selectedClass = selectElement.value;
      this.getCoursesByClass(selectedClass, courses, classListItem);
    });

    courses.map((course) => {
      document.querySelector(`#btn-kelas-${course.courseId}`).addEventListener("click", () => {
        console.log("courseId: ", course);
        this.#presenter.setMyCourse(course.courseId);
        this.#presenter.initialListModule();
      });
    });

    document.getElementById("search-course").addEventListener("submit", (event) => {
      let searchInput = document.getElementById("search-title").value.toLowerCase();
      console.log("searchInput: ", searchInput);
      event.preventDefault();
      this.searchCourse(searchInput, courses, classListItem);
      event.target.reset();
    });
  }

  getCoursesByClass(selectedClass, courses, classListItem) {
    let filterClass = selectedClass ? courses.filter((course) => course.kelas === selectedClass) : courses;
    console.log("filterClass: ", filterClass);
    if (filterClass.length > 0) {
      const courseFilter = filterClass.reduce((accumulator, course) => {
        return accumulator.concat(generateClassListItemTemplate({ ...course }));
      }, "");

      classListItem.innerHTML = courseFilter;
    }
  }

  searchCourse(searchInput, courses, classListItem) {
    console.log("filterCourse: ", typeof courses);
    let courseTitle = courses.filter((course) => course.title.toLowerCase().includes(searchInput));
    console.log("courseTitle: ", courseTitle);
    if (courseTitle.length > 0) {
      const titleCourse = courseTitle.reduce((accumulator, course) => {
        return accumulator.concat(generateClassListItemTemplate({ ...course }));
      }, "");

      classListItem.innerHTML = titleCourse;
    }
  }
}
