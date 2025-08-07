import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import{provideAnimations}from'@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headersInterceptor } from './core/interceptors/headers/headers.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { lodaingInterceptor } from './core/interceptors/lodaing/lodaing.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(withFetch(),withInterceptors([headersInterceptor,lodaingInterceptor]))
    ,provideAnimations(),importProvidersFrom(NgxSpinnerModule)

    , provideClientHydration(withEventReplay()), provideToastr()],
    
};
