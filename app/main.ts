/**
 * 通过即时编译器动态引导
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(err => console.error(err));

/**
 * 通过预编译器进行静态引导
 * 
 * 注：静态方案可以生成更小、启动更快的应用，建议优先使用它，特别是在移动设备或高延迟网络下。
 */
// // The browser platform without a compiler
// import { platformBrowser } from '@angular/platform-browser';

// // The app module factory produced by the static offline compiler
// import { AppModuleNgFactory } from './app.module.ngfactory';

// // Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);