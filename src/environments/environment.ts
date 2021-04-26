// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config: {
      apiKey: 'AIzaSyBGDmBfrxxdXjGKN3fl88_ggVHSEWxMnp8',
      authDomain: 'lalaoapp.firebaseapp.com',
      projectId: 'lalaoapp',
      storageBucket: 'lalaoapp.appspot.com',
      messagingSenderId: '804895925772',
      appId: '1:804895925772:web:9f3c330ff7feefc2bc3029'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
