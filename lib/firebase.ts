import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: 'drive-30f8d.firebaseapp.com',
	projectId: 'drive-30f8d',
	storageBucket: 'drive-30f8d.appspot.com',
	messagingSenderId: '61673043389',
	appId: '1:61673043389:web:0b1df6d4c733b8a25c8ed4',
}

!getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const storage = getStorage()

export { db, storage }
