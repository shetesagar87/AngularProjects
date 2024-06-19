// import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
// import { provideServerRendering } from '@angular/platform-server';
// import { appConfig } from './app.config';

// const serverConfig: ApplicationConfig = {
//   providers: [
//     provideServerRendering()
//   ]
// };

// export const config = mergeApplicationConfig(appConfig, serverConfig);


import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { appConfig } from './app.config';

//import { appConfig } from './app.config';

const appConfigWithoutSentry: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()],
};

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const config = mergeApplicationConfig(
  // appConfig,
  appConfigWithoutSentry,
  serverConfig
);