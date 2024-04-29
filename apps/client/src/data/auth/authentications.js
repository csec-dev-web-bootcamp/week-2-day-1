'use server';

import { authExpire } from '@app/client/constants/auth.config';
import { cookies } from 'next/headers';

export async function setAuthentication(accessToken) {
  const cookieStore = cookies();

  cookieStore.set({
    name: 'accessToken',
    value: accessToken,
    secure: process.env.NODE_ENV === 'production',
    expires: authExpire,
  });

  cookieStore.set({
    name: 'accessToken',
    value: accessToken,
    secure: process.env.NODE_ENV === 'production',
    expires: authExpire,
  });
}

export async function getAuthentication() {
  const cookieStore = cookies();
  return cookieStore.get('accessToken')?.value;
}

export async function deleteAuthentication() {
  const cookieStore = cookies();
  cookieStore.delete('accessToken');
}