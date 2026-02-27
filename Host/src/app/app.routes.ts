import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperConfig } from './wrapper/wrapper-config';
import { startsWith } from './starts-with';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'remote01',
        loadComponent: () =>
            loadRemoteModule('Remote01', './Component').then((m) => m.AppComponent)
    },
    {
        path: 'remote02',
        loadComponent: () =>
            loadRemoteModule('Remote02', './Component').then((m) => m.AppComponent)
    },
    {
        matcher: startsWith('web'),
        component: WrapperComponent,
        data: {
            config: {
                remoteName: 'WebComponent',
                exposedModule: './web-components',
                elementName: 'web-component-root',
            } as WrapperConfig,
        },
    }
];
