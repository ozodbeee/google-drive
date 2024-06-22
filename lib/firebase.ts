import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: 'drive-958ff.firebaseapp.com',
	projectId: 'drive-958ff',
	storageBucket: 'drive-958ff.appspot.com',
	messagingSenderId: '197018630408',
	appId: '1:197018630408:web:dad6b1c7255d06174e14bd',
}

!getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const storage = getStorage()

export { db, storage }
