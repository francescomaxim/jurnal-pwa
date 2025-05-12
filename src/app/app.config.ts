import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'mynd-eb34e',
        appId: '1:499368458637:web:ce7c5469018fe205f3a5c4',
        databaseURL:
          'https://mynd-eb34e-default-rtdb.europe-west1.firebasedatabase.app',
        storageBucket: 'mynd-eb34e.firebasestorage.app',
        apiKey: 'AIzaSyCrU9BLkvh6o2dV7TSH9ve5xLovB1lahoI',
        authDomain: 'mynd-eb34e.firebaseapp.com',
        messagingSenderId: '499368458637',
        measurementId: 'G-86R3HEV1GJ',
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
  ],
};
