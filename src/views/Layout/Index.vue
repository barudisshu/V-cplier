<template>
    <div class="layout">
        <Layout style="height: 100%">
            <Layout style="height: 100%">
                <Sider :style="getSiderColor" style="height: 100%;" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" breakpoint="sm">
                    <a-menu :is-collapsed="isCollapsed" :router-list="routerList"></a-menu>
                </Sider>
                <Layout>
                    <Header class="nav-header-main">
                        <a-breadcrumb :collapsed.sync="isCollapsed"></a-breadcrumb>
                        <tags-menu :tagsNavList="tagsNavList"
                                   @tag-click="tagClick"
                                   @close-tag="closeTag"
                                   @close-icon="closeTagByIcon"></tags-menu>
                    </Header>
                    <a-content></a-content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import ABreadcrumb from "./components/breadcrumb/ABreadcrumb";
    import AContent from "./components/appMain/AContent";
    import AMenu from "./components/menu/AMenu";
    import TagsMenu from "./components/tagsMenu/TagsMenu";
    import {mapMutations} from 'vuex';
    import './index.less';
    export default {
        name: "Index",
        components: {TagsMenu, AMenu, AContent, ABreadcrumb},
        data() {
            return {
                isCollapsed: false,
                theme: 'light',
            }
        },
        computed: {
            routerList() {
                return this.$store.state.router.addRouters;
            },
            getSiderColor() {
                return {
                    backgroundColor: this.$store.state.siderStyle
                }
            },
            tagsNavList() {
                return this.$store.state.tags.tagsList;
            }
        },
        watch: {
            '$route'(newRoute) {
                const { name,query,params,meta } = newRoute;
                this.addTags({
                    route: {name,query,params,meta},
                    type: 'push'
                });
            }
        },
        mounted() {
            const { name,query,params,meta } = this.$route;
            this.addTags({
                route: {name,query,params,meta},
            });
            this.setTags();
        },
        methods: {
            ...mapMutations([
                'addTags',
                'setTags',
                'closeTags',
                'closeTagsByIcon'
            ]),
            tagClick(val) {
                this.$router.push({
                    name: val.name,
                    params: val.params,
                    query: val.query
                })
            },
            /**
             * 关闭tag标签
             * @param name 标签名
             */
            closeTag(name) {
                this.closeTags({
                    name: name,
                    route: this.$route
                })
            },
            /**
             *  关闭 其他 所有 tags标签
             * @param name
             */
            closeTagByIcon(name) {
                this.closeTagsByIcon({
                    type: name,
                    route: this.$route
                });
            }
        }
    }
</script>

