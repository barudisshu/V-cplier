// 路由导航栏中英文切换
export function generateTitle(title) {
    const hasKeys = this.$te('route.'+title);
    if (hasKeys) {
        return this.$t('route.' + title);
    } else {
        return title;
    }
}
