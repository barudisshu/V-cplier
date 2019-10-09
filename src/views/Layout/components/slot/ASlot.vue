<template>
    <Row type="flex" justify="end" class-name="code-row-bg">
        <Col span="1" class="slot-box">
            <Badge dot>
                <Icon size="25" type="md-notifications"/>
            </Badge>
        </Col>
        <Col span="1" class="slot-box">
            <Dropdown trigger="click" @on-click="handleClick">
                <Icon size="25" type="md-settings"/>
                <DropdownMenu slot="list" class="drop-class">
                    <Dropdown placement="right-start">
                        <DropdownItem>
                            {{$t('navBar.setLang')}}
                            <Icon style="margin-top:-3px" type="ios-arrow-forward"></Icon>
                        </DropdownItem>
                        <DropdownMenu slot="list">
                            <DropdownItem name="chinese">{{$t('navBar.chinese')}}</DropdownItem>
                            <DropdownItem name="english">{{$t('navBar.english')}}</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown placement="right-start">
                        <DropdownItem>
                            {{$t('navBar.setTheme')}}
                            <Icon style="margin-top:-3px" type="ios-arrow-forward"></Icon>
                        </DropdownItem>
                        <DropdownMenu slot="list">
                            <DropdownItem name="dark">亮黑色</DropdownItem>
                            <DropdownItem name="light">标准色</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </DropdownMenu>
            </Dropdown>
        </Col>
        <Col span="1" class="slot-box">
            <div  @click="changeFull">
            <Icon size="25" :type="fullScreen?'md-contract':'md-expand'"/>
            </div>
        </Col>
        <Col span="1" class="slot-box">
            <Dropdown trigger="click" @on-click="handleClick">
                <Icon size="25" type="md-contact"/>
                <DropdownMenu slot="list" class="drop-class">
                    <DropdownItem name="personInfo">{{$t('base.information')}}</DropdownItem>
                    <DropdownItem name="password">{{$t('base.password')}}</DropdownItem>
                    <DropdownItem name="logout">{{$t('base.logout')}}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Col>
        <Modal
                v-model="modal6"
                title="退出系统"
                :loading="loading"
                @on-ok="logout">
            <p>是否退出本系统？</p>
        </Modal>
    </Row>
</template>

<script>
    import {clearToken, setLang, setTheme} from "../../../../until/cookie";
    import {themeObj} from "../../../../config/theme-config";
    import {clearLocalStroage} from "../../../../until/localStorage";

    export default {
        name: "ASlot",
        data() {
            return {
                fullScreen: false,
                modal6: false,
                loading: true
            }
        },
        methods: {
            changeFull() {
                this.fullScreen = !this.fullScreen;
                if ((document.fullScreenElement !== undefined && document.fullScreenElement === null)
                    || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null)
                    || (document.mozFullScreen !== undefined && !document.mozFullScreen)
                    || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
                    if (document.documentElement.requestFullScreen) {
                        document.documentElement.requestFullScreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullScreen) {
                        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                    } else if (document.documentElement.msRequestFullscreen) {
                        document.documentElement.msRequestFullscreen();
                    }
                } else {
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }
            },
            handleClick(name) {
                if (name === 'chinese') {
                    setLang('zh');
                    this.$i18n.locale = 'zh';
                } else if (name === 'english') {
                    setLang('en');
                    this.$i18n.locale = 'en';
                } else if (name === 'dark') {
                    setTheme('header', themeObj.dark.headerBg);
                    setTheme('sider', themeObj.dark.siderBg);
                    setTheme('theme', themeObj.dark.theme);
                    this.$store.commit('SET_THEME')
                } else if (name === 'light') {
                    setTheme('header', themeObj.light.headerBg);
                    setTheme('sider', themeObj.light.siderBg);
                    setTheme('theme', themeObj.light.theme);
                    this.$store.commit('SET_THEME')
                } else if (name === 'personInfo') {
                    //
                } else if (name === 'password') {
                    //
                } else if (name === 'logout') {
                    this.modal6 = true;
                } else {
                    //
                }
            },
            logout() {
                clearToken().then(() => {
                    clearLocalStroage();
                    this.modal6 = false;
                    location.reload();
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .slot-box {
        float: right;
        text-align: center;
        cursor: pointer;
        margin-right: 6px;
        width: 40px;
    }
</style>
