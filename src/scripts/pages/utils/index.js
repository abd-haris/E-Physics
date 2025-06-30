export function percentageIndicator(progressEl, indicatorEl, value, cardBtn) {
  progressEl.value = value;
  if (value <= 0) {
    indicatorEl.textContent = "0%";
    cardBtn.textContent = "Mulai belajar";
    return;
  }
  indicatorEl.textContent = `${progressEl.value}%`;
  if (value > 0) {
    cardBtn.textContent = "Lanjut belajar";
  }

  if (value === progressEl.max) {
    cardBtn.textContent = "Course selesai";
  }
}

export function drawerSidebar(drawerSidebarBtn, sidebar) {
  drawerSidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-[100%]");
  });
}

export function closeSidebar(closeBtn, sidebar, openBtn, content) {
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("lg:translate-x-0");
    sidebar.classList.add("lg:-translate-x-[100%]");
    content.classList.remove("justify-end");
    content.classList.add("justify-center");

    setTimeout(() => {
      openBtn.classList.remove("translate-x-[-100%]", "opacity-0", "hidden");
      openBtn.classList.add("translate-x-0", "opacity-100", "lg:block");
    }, 300);
  });
}

export function openSidebar(openBtn, sidebar, content) {
  openBtn.addEventListener("click", () => {
    openBtn.classList.add("translate-x-[-100%]", "opacity-0");

    setTimeout(() => {
      sidebar.classList.add("lg:translate-x-0");
      sidebar.classList.remove("lg:-translate-x-[100%]");
      content.classList.remove("justify-center");
      content.classList.add("justify-end");
      openBtn.classList.add("hidden");
    }, 300);
  });
}

export function updatedProgress(progressEl, percentageEl, value) {
  progressEl.value = value;
  percentageEl.textContent = `${value}%`;
  return;
}

export function transitionHelper({ skipTransition = false, updateDOM }) {
  if (skipTransition || !document.startViewTransition) {
    const updatePromise = Promise.resolve().then(updateDOM);

    return {
      ready: Promise.reject(Error("View transition unsupported")),
      updateCallbackDone: updatePromise,
      finished: updatePromise,
    };
  }
  return document.startViewTransition(updateDOM);
}

export function getCourseByClass(select, container) {
  select.addEventListener("change", () => {
    const selectCourse = this.value;

    container.innerHtml = "";
  });
}
