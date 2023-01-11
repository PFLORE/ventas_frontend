import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const bootstrap = require('bootstrap')
platformBrowserDynamic().bootstrapModule(AppModule, bootstrap)
  .catch(err => console.error(err));
