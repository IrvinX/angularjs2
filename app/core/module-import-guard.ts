/**
 * 添加守卫逻辑
 * 防止多次导入 CoreModule
 * 会禁止创建单例服务的多个实例
 */

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}