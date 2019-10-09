<template>
    <Header class="logo-box" :style="getHeaderColor">
        <div class="title-box">
            <img src="../../../../assets/images/app/logo.png" v-bind:class="[!isCollapsed ?  'logo-float': 'logo-center']" alt="logo"/>
            <h1 v-show="!isCollapsed">Cplier</h1>
        </div>
    </Header>
</template>

<script>
    export default {
        name: "ALogo",
        props: {
            isCollapsed: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            getHeaderColor() {
                return {
                  backgroundColor: this.$store.state.headerStyle
                };
            },
            data() {
                return {}
            }
        }
    }
</script>

<style scoped lang="less">

    .logo-box {
        padding: 10px;
        background-color: rgb(0, 145, 255);

        .title-box {
            float: left;
            width: 350px;
            height: 100%;


            img {
                width: 44px;
                height: 44px;
            }

            .logo-float {
                float: left;
            }
            .logo-center {
                text-align: center;
                line-height: 44px;
            }

            h1 {
                height: 100%;
                line-height: 44px;
                color: white;
                display: inline-block;
            }
        }
    }
</style>
