import { learningData } from "./data";

import { saveModules, getSavedModules, getLocalStorageSize } from "./local-storage";

export const DataLearning = {
  async getAllModules() {
    const savedData = getSavedModules();
    console.log("data dari localStorage: ", savedData);
    if (savedData) {
      learningData.data = savedData.data || learningData.data;
      learningData.gamification = savedData.gamification || learningData.gamification;
      console.log("gamification: ", learningData.gamification);
    } else {
      saveModules({ ...learningData });
    }

    if (learningData.gamification.point >= 100 && learningData.gamification.point < 150) {
      learningData.gamification.level = 2;
    } else if (learningData.gamification.point >= 150 && learningData.gamification.point < 250) {
      learningData.gamification.level = 3;
    } else {
      learningData.gamification.level = 1;
    }

    saveModules({ ...learningData });
    getLocalStorageSize();
    return {
      ...learningData,
    };
  },

  async setToMyCourse(courseId) {
    const myCourseIndex = learningData.data.findIndex((course) => course.courseId === courseId);
    if (myCourseIndex !== -1) {
      learningData.data[myCourseIndex].joinClass = true;
      saveModules({ ...learningData });
      return {
        status: "success",
        message: "Menambahkan course berhasil",
        data: learningData.data[myCourseIndex],
      };
    } else {
      return {
        status: "error",
        message: "course tidak ditemukan",
      };
    }
  },

  async getMyCourses() {
    const savedData = getSavedModules();
    let myCourses = [];
    if (savedData && savedData.data) {
      myCourses = savedData.data.filter((course) => course.joinClass === true);
    } else {
      myCourses = learningData.data.filter((course) => course.joinClass === true);
    }

    return {
      status: "success",
      message: "Daftar kursus yang digabung",
      data: myCourses,
    };
  },

  async getDetailMyCourse(courseId) {
    const savedData = getSavedModules();
    if (savedData) {
      learningData.data = savedData.data || learningData.data;
      learningData.gamification = savedData.gamification || learningData.gamification;
    }

    const course = learningData.data.find((course) => course.courseId === courseId);

    if (course) {
      return {
        status: "success",
        message: "course ditemukan",
        data: course,
      };
    } else {
      return {
        status: "failed",
        message: "course tidak ditemukan",
      };
    }
  },

  async updateModuleToComplete(courseId, moduleId) {
    const courseIndex = learningData.data.findIndex((course) => course.courseId === courseId);
    if (courseIndex !== -1) {
      const moduleIndex = learningData.data[courseIndex].modules.findIndex((module) => module.moduleId === moduleId);

      if (moduleIndex !== -1) {
        const now = new Date().toISOString();
        learningData.data[courseIndex].modules[moduleIndex] = {
          ...learningData.data[courseIndex].modules[moduleIndex],
          completed: true,
          completedAt: now,
        };

        const totalModules = learningData.data[courseIndex].modules.length;
        const completedModules = learningData.data[courseIndex].modules.filter((m) => m.completed).length;
        learningData.data[courseIndex].progress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
        if (learningData.data[courseIndex].progress === 100 && learningData.data[courseIndex].completed !== true) {
          learningData.gamification.point += 50;
          learningData.data[courseIndex].completed = true;
        } else if (learningData.data[courseIndex].progress === 100 && learningData.data[courseIndex].completed === true) {
          learningData.gamification.point += 0;
        }
        saveModules({ ...learningData });
        return {
          status: "success",
          message: `Modul ${moduleId} ditandai selesai. Progress: ${learningData.data[courseIndex].progress}%`,
        };
      }
    }

    return {
      status: "failed",
      message: "Modul atau kursus tidak ditemukan",
    };
  },
};
