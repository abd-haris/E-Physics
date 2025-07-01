function generateListAsideTemplate(data, activeData) {
  return data.modules
    .map(
      (module) => `
    <li class="block p-2 rounded-md ${module.moduleId === activeData ? "bg-neutral text-neutral-content" : "text-neutral"}">
      <a href="#/my-class/${data.courseId}/module/${module.moduleId}" class="flex justify-between items-center">${module.subTitle} ${module.completed ? "<i class='icon-[fluent--checkmark-circle-32-regular]'></i>" : ""}</a>
    </li>
    `
    )
    .join("");
}

export function generateNavigationDrawerTemplate(currentPage) {
  return `
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <label for="my-drawer" class="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </label>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-80 flex flex-col gap-y-3 pt-3">
                <li><a href="#/" class="${currentPage === "dashboard" ? "text-neutral bg-neutral-content" : ""}">Dashboard</a></li>
                <li><a href="#/list-class" class="${currentPage === "/list-class" ? "text-neutral bg-neutral-content" : ""}">Daftar Kelas</a></li>
                <li><a href="#/my-class/my" class="${currentPage === "/my-class/my" ? "text-neutral  bg-neutral-content" : ""}">Kelas Saya</a></li>
            </ul>
        </div>
    `;
}

export function generateHeaderListTemplate(currentPage) {
  return `
        <ul class="menu menu-horizontal px-1 text-base flex gap-x-3">
            <li><a href="#/" class="${currentPage === "dashboard" ? "bg-neutral-content" : ""}">Dashboard</a></li>
            <li><a href="#/list-class" class="${currentPage === "/list-class" ? "bg-neutral-content" : ""}">Daftar Kelas</a></li>
            <li><a href="#/my-class/my" class="${currentPage === "/my-class/my" ? "bg-neutral-content" : ""}">Kelas Saya</a></li>
        </ul>
    `;
}

export function generateHeaderPointTemplate() {
  return `
        <span class="flex items-center gap-x-2 font-semibold">
            <span class="icon-[fluent-color--star-48] text-xl"></span>
            <p><span id="xp-point">50</span> XP</p>
        </span>
    `;
}

export function generateClassListItemTemplate({ courseId, image, title, kelas }) {
  return `
        <div class="card bg-base-100 w-full shadow-sm lg:w-72" data-courseId="${courseId}">
            <figure>
                <img src="${import.meta.env.BASE_URL}${image}" alt="image-course"/>
            </figure>
            <div class="card-body flex flex-col gap-y-5">
                <h3 class="card-title text-xl font-bold">${title}</h3>
                <p class="text-base">Kelas ${kelas}</p>
                <div class="card-actions justify-start">
                    <button id="btn-kelas-${courseId}" class="btn btn-neutral btn-outline flex items-center">Gabung kelas <i class="icon-[fluent--people-community-48-filled]"></i></button>
                </div>
            </div>
        </div>
    `;
}

export function generateMyClassListItemTemplate({ courseId, image, title, kelas }) {
  return `
        <div class="card bg-base-100 w-full shadow-sm lg:w-72" data-courseId="${courseId}">
            <figure>
                <img src="${import.meta.env.BASE_URL}${image}" alt="image-course" class="vt-item-image"/>
            </figure>
            <div class="card-body flex flex-col gap-y-5">
                <h3 class="card-title text-xl font-bold">${title}</h3>
                <p class="text-base">Kelas ${kelas}</p>
                <div class="flex flex-col gap-y-2">
                    <progress id="progress-${courseId}" class="progress progress-neutral w-56" value="" max="100"></progress>
                    <span id="percentage-${courseId}"></span>
                </div>
                <div class="card-actions justify-start">
                    <a href="#/my-class/${courseId}/corridor" class="btn btn-neutral flex items-center card-btn"></a>
                </div>
            </div>
        </div>
    `;
}

export function generateMyClassListEmptyTemplate() {
  return `
    <div class="w-full text-center mt-30">
      <h3 class="text-2xl mb-5 font-bold">Course sedang kosong</h3>
      <p class="text-xl">Kamu masih tidak memiliki course untuk dipelajari</p>
    </div>
  `;
}

export function generateAsideDetailModuleTemplate(modules) {
  if (!modules || modules.length === 0) {
    return `
      <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-base-100 border-2">
          <p>No modules available</p>
        </div>
      </aside>
    `;
  }

  const moduleItems = modules
    .map(
      (module, index) => `
    <li>
      <a href="#/my-class/course/${module.moduleId}" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
        <span class="ms-3">${module.subTitle || `Module ${index + 1}`}</span>
      </a>
    </li>
  `
    )
    .join("");

  return `
    <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto bg-base-100 border-2">
        <ul class="space-y-2 font-medium">
          ${moduleItems}
        </ul>
      </div>
    </aside>
  `;
}

export function generateDetailMyClassTemplate(courses) {
  return `
    <div class="w-[80vw] flex flex-col gap-y-5 border border-base-300 rounded-b-2xl box-border">
      <figure class="w-full h-48 overflow-y-hidden bg-center">
        <img src="${import.meta.env.BASE_URL}${courses.image}" alt="course image" class="vt-detail-image">
      </figure>
      <div class="flex justify-between mx-5 mt-5">
        <h3 class="text-2xl font-bold">${courses.title}</h3>
        <a id="btn-learn" href="#/my-class/${courses.courseId}/module/${courses.modules[0].moduleId}" class="btn btn-neutral">Mulai belajar</a>
      </div>
      <div class="card card-border bg-base-100 mx-5 mb-10">
        <div class="card-body">
            <div class="flex justify-between w-full">
                <p class="text-lg">Progress belajar</p>
                <span id="percentage" class="text-lg">${courses.progress}%</span>
            </div>
            <progress class="progress progress-neutral w-full" value="${courses.progress}" max="100"></progress>
        </div>
      </div>
    </div>
    `;
}

export function generateDetailModuleTemplate(course, activeModuleId) {
  const modules = generateListAsideTemplate(course, activeModuleId);
  const activeModule = course.modules.find((module) => module.moduleId === activeModuleId);
  const description = activeModule ? activeModule.description : "Deskripsi tidak tersedia";
  const progress = course.progress || 0;

  return `
    <div class="flex">
      <div>
        <div>
          <div class="fixed w-full h-20 border-b bg-base-100 border-base-300 z-50 flex justify-between items-center gap-x-5 px-5">
            <a href="#/my-class/${course.courseId}/corridor" class="text-neutral flex items-center lg:w-96 lg:gap-x-3">
              <i>
                <svg class="rotate-90" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m11.65 4.007l.1-.007a.75.75 0 0 1 .744.648l.007.102l-.001 12.696l3.22-3.221a.75.75 0 0 1 .976-.073l.084.072a.75.75 0 0 1 .073.977l-.072.084l-4.497 4.5a.75.75 0 0 1-.976.073l-.084-.073l-4.504-4.5a.75.75 0 0 1 .976-1.133l.084.072L11 17.442V4.75a.75.75 0 0 1 .65-.743l.1-.007z"/></svg>
              </i>
              <span class="hidden lg:inline-block lg:text-xl lg:font-bold">${course.title}</span>
            </a>
            <button id="drawer-sidebar" class="text-neutral lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
        </div>
        <button id="open-sidebar" class="text-base-100 py-3 px-5 top-32 left-0 rounded-r-full absolute bg-primary cursor-pointer hidden transition-all duration-300 transform translate-x-0 lg:z-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
          </svg>
        </button>
        <aside id="default-sidebar" class="-translate-x-[100%] w-full absolute top-0 duration-300 lg:translate-x-0 lg:w-3/12" aria-label="Sidebar">
          <div class="h-screen overflow-y-auto bg-base-100 border-r-2 border-base-300 pt-24">
            <div class="text-neutral p-2 flex items-center justify-between mb-5">
              <h3 class="text-xl font-bold">Daftar Modul</h3>
              <button id="close-sidebar" class="text-primary cursor-pointer hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><path fill="currentColor" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-19.866 8.634a1.25 1.25 0 0 0 0-1.768l-5.616-5.616H32.75a1.25 1.25 0 1 0 0-2.5H18.518l5.616-5.616a1.25 1.25 0 0 0-1.768-1.768l-7.75 7.75a1.25 1.25 0 0 0 0 1.768l7.75 7.75a1.25 1.25 0 0 0 1.768 0"/></svg>
              </button>
            </div>
            <div class="border-t border-b border-base-300 p-5">
              <div class="w-full">
                <progress id="progress-bar" class="progress progress-primary mb-1" value="${progress}" max="100">
                </progress>
                <div class="flex justify-between">
                  <span class="hidden lg:inline-block text-primary text-sm">Progress</span>
                  <span id="percentage" class="hidden md:inline-block text-primary text-sm">${progress}%</span>
                </div>
              </div>
            </div>
            <ul class="space-y-2 font-medium p-5">
              ${modules}
            </ul>
          </div>
        </aside>
        <div class="h-screen overflow-y-scroll">
          <div id="content" class="w-full p-4 flex justify-end transition-all duration-300">
            <div class="bg-base-100 p-6 w-full mt-24 mb-2 lg:w-8/12 lg:mx-13">
              <div class="lg:mb-5">
                <h4 class="text-3xl font-semibold mb-4">Deskripsi</h4>
                <p class="text-lg leading-8 tracking-wide">${description}</p>
              </div>
              <button id="module-completed" class="btn btn-primary mt-4">Saya sudah paham</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function generateCardLevelBeginnerDashboardTemplate(gamification) {
  return `
    <div class="card bg-white w-96 shadow-sm">
      <figure class="px-10 pt-10 flex flex-col">
        <img src="${import.meta.env.BASE_URL}${gamification.icon.smart}" alt="Shoes" class="rounded-xl w-28" />
        <figcaption class="flex flex-col justify-center items-center font-bold">
          </p>Level ${gamification.level}</p>
          <p>${gamification.badges.smart}</p>
        </figcaption>
      </figure>
      <div class="card-body items-center text-center">
        <div class="flex flex-col items-start gap-y-2">
          <progress class="progress progress-info w-56" value="${gamification.point}" max="100"></progress>
          <p id="percentage"><span>${gamification.point}</span>/<span>100</span> poin</p>
        </div>
        <p>kumpulkan <span class="font-bold">${100 - gamification.point} poin</span> lagi untuk naik ke level selanjutnya</p>
      </div>
    </div>
  `;
}

export function generateCardLevelIntermediateDashboardTemplate(gamification) {
  return `
    <div class="card bg-warning w-96 shadow-sm">
      <figure class="px-10 pt-10 flex flex-col">
        <img src="${import.meta.env.BASE_URL}${gamification.icon.intelligent}" alt="Shoes" class="rounded-xl w-28" />
        <figcaption class="flex flex-col justify-center items-center font-bold">
        <p>Level ${gamification.level}</p>
        <p>${gamification.badges.intelligent}</p>
        </figcaption>
      </figure>
      <div class="card-body items-center text-center">
        <div class="flex flex-col items-start gap-y-2">
          <progress class="progress progress-neutral w-56" value="${gamification.point}" max="200"></progress>
          <p id="percentage"><span>${gamification.point}</span>/<span>200</span> poin</p>
        </div>
        <p>kumpulkan <span class="font-bold">${200 - gamification.point} poin</span> lagi untuk naik ke level selanjutnya</p>
      </div>
    </div>
  `;
}

export function generateCardLevelExpertDashboardTemplate(gamification) {
  return `
    <div class="card bg-info w-96 shadow-sm">
      <figure class="px-10 pt-10 flex flex-col">
        <img src="${import.meta.env.BASE_URL}${gamification.icon.expert}" alt="Shoes" class="rounded-xl w-28" />
        <figcaption class="flex flex-col justify-center items-center font-bold">
          <p>Level ${gamification.level}</p>
          <p>${gamification.badges.expert}</p>
        </figcaption>
      </figure>
      <div class="card-body items-center text-center">
        <div class="flex flex-col items-start gap-y-2">
          <progress class="progress progress-secondary w-56" value="${gamification.point}" max="350"></progress>
          <p id="percentage"><span>${gamification.point}</span>/<span>350</span> poin</p>
        </div>
        <p>kumpulkan <span class="font-bold">${350 - gamification.point} poin</span> lagi untuk naik ke level selanjutnya</p>
      </div>
    </div>
  `;
}

export function generateContinueLearningDashboardListTemplate({ courseId, image, title, kelas, progress }) {
  return `
    <div class="bg-white shadow-sm rounded-xl box-border p-5">
      <figure class="flex gap-x-3 items-center p-3">
        <img src="${image}" class="w-24 rounded-2xl">
        <figcaption class="flex flex-col gap-y-2">
          <h3 class="text-lg font-semibold line-clamp-1">${title}</h3>
          <h4>${kelas}</h4>
        </figcaption>
      </figure>
      <div class="p-3">
        <div class="w-full bg-info rounded-full">
          <div class="bg-info-content text-xs font-medium text-blue-100 text-center p-0.5  leading-none rounded-full" style="width: ${progress}%"> ${progress}%</div>
        </div>
      </div>
      <div class="px-3 flex justify-end">
        <a href="#/my-class/${courseId}/corridor" class="text-info-content">Lanjut belajar</a>
      </div>
    </div>
  `;
}

export function generateContinueLearningDashboardEmptyTemplate() {
  return `
    <div class="h-40 bg-neutral-content shadow-sm rounded-xl text-center box-border p-3 flex flex-col justify-center text-neutral gap-y-2">
      <h3 class="text-lg font-semibold">Modul kosong</h3>
      <p>Saat ini kamu sedang tidak mempelajari apapun</p>
    </div>
  `;
}

export function generateFinishedLearningDashboardListTemplate({ courseId, image, title, kelas, progress }) {
  return `
    <div class="bg-white shadow-sm rounded-xl box-border p-5">
      <figure class="flex gap-x-3 items-center p-3">
        <img src="${image}" class="w-24 rounded-2xl">
        <figcaption class="flex flex-col gap-y-2">
          <h3 class="text-lg font-semibold line-clamp-1">${title}</h3>
          <h4>${kelas}</h4>
        </figcaption>
      </figure>
      <div class="p-3">
        <div class="w-full bg-base-200 rounded-full">
          <div class="bg-success-content text-xs font-medium text-blue-100 text-center p-0.5  leading-none rounded-full" style="width: ${progress}%"> ${progress}%</div>
        </div>
      </div>
      <div class="px-3 flex justify-end">
        <a href="#/my-class/${courseId}/corridor" class="text-success-content">Belajar ulang</a>
      </div>
    </div>
  `;
}

export function generateFinishedLearningDashboardEmptyTemplate() {
  return `
    <div class="h-40 bg-neutral-content shadow-sm rounded-xl text-center box-border p-3 flex flex-col justify-center text-neutral gap-y-2">
      <h3 class="text-lg font-semibold">Modul kosong</h3>
      <p>Saat ini kamu belum menyelesaikan modul apapun</p>
    </div>
  `;
}
