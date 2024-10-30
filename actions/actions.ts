'use server';

import { adminDb } from '@/firebase-admin';
import { auth } from '@clerk/nextjs/server';

export async function createNewDocument() {
  // Create a new document
  auth.protect();

  const { sessionClaims } = await auth();

  const docCollectionRef = adminDb.collection('documents');
  const docRef = await docCollectionRef.add({
    title: 'New Doc',
  });

  await adminDb.collection('users').doc(sessionClaims?.email!);
}