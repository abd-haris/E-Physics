import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAU0DRyMGt208tVkKtcupIVPN92g87siEo',
  authDomain: 'e-physics-7cd0f.firebaseapp.com',
  projectId: 'e-physics-7cd0f',
  storageBucket: 'e-physics-7cd0f.firebasestorage.app',
  messagingSenderId: '634734160038',
  appId: '1:634734160038:web:d0a3d04f06d4e85f1f6c67',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
