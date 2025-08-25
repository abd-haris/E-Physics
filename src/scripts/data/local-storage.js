const STORAGE_KEY = 'MODULES';

// Cek apakah browser mendukung localStorage
function isStorageExist() {
  if (typeof Storage === 'undefined') {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
}

export function saveModules(learningDataObj) {
  if (!isStorageExist || typeof learningDataObj !== 'object') {
    console.log('local storage tidak tersedia atau data bukan objek: ', learningDataObj);
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(learningDataObj));
  } catch (error) {
    console.error('gagal menyimpan data ke local storage: ', error);
  }
}

export function getSavedModules() {
  if (!isStorageExist) return;

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Gagal mengambil data dari local storage: ', error);
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function getLocalStorageSize() {
  if (!isStorageExist) {
    console.log('localStorage tidak tersedia atau belum digunakan');
    return { bytes: 0, KB: 0, MB: 0 };
  }

  let total = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      total += (key.length + localStorage[key].length) * 2;
    }
  }

  const sizeInKB = total / 1024;
  const sizeInMB = sizeInKB / 1024;

  console.log(`Total ukuran localStorage: ${total} bytes`);
  console.log(`Total ukuran localStorage: ${sizeInKB.toFixed(2)} KB`);
  console.log(`Total ukuran localStorage: ${sizeInMB.toFixed(2)} MB`);

  return { bytes: total, KB: sizeInKB, MB: sizeInMB };
}
