import { generateAsideDetailModuleTemplate } from "../../template";

export class Sidebar {
  #model;
  #courseId;
  #cachedModules;

  constructor({ model, courseId }) {
    this.#model = model;
    this.#courseId = courseId;
    this.#cachedModules = null;
  }

  async render() {
    if (!this.#cachedModules) {
      const response = await this.#model.getDetailMyCourse(this.#courseId);
      if (!response || !response.data || !response.data.modules) {
        console.log("Data modul tidak ditemukan!");
        return '<aside id="default-sidebar"></aside>';
      }
      this.#cachedModules = response.data.modules;
    }
    return generateAsideDetailModuleTemplate(this.#cachedModules);
  }
}
