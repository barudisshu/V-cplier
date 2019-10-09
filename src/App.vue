<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="less">
    #app {
        font-family: '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;

        ::-webkit-scrollbar-track-piece { //滚动条凹槽的颜色，还可以设置边框属性
            background-color: rgba(0, 0, 0, 0.04);
        }

        ::-webkit-scrollbar { //滚动条的宽度
            width: 6px;
            height: 6px;

        }

        ::-webkit-scrollbar-thumb { //滚动条的设置
            border-radius: 3px;
            background-color: rgba(0, 0, 0, 0.06);
            background-clip: padding-box;
            -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
            min-height: 28px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: rgba(0, 0, 0, 0.01);
        }
    }
</style>
