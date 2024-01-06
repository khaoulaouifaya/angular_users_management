import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { UsersService } from './services/users.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),UsersService]
};
