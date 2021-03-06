import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
// 守卫逻辑
import { throwIfAlreadyLoaded } from './module-import-guard';
@NgModule({
    imports: [
        CommonModule // we use ngFor
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}