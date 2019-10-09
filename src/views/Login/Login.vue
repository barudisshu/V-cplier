<template>
    <div class="login-container">
        <div class="login-box">
            <h1 style="text-align: center;margin-bottom: 24px">系统登录</h1>
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="user">
                    <Input type="text" size="large" v-model="formInline.user" placeholder="Username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" size="large" v-model="formInline.password" placeholder="Password">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="interest">
                    <Checkbox v-model="formInline.interest" label="remember">记住我</Checkbox>
                    <a style="float: right">忘记密码</a>
                    <a style="float: right;margin-right: 6px">快速注册</a>
                </FormItem>
                <FormItem>
                    <Button type="primary" size="large" long @click="handleSubmit('formInline')">登录</Button>
                </FormItem>
            </Form>
            <Divider><span style="color: gray;font-size: 12px">其他登录方式</span></Divider>
            <div style="text-align: center">
                <Icon size="20" color="gray" type="logo-facebook" style="margin-right: 6px"/>
                <Icon size="20" color="gray" type="logo-github" style="margin-right: 6px"/>
                <Icon size="20" color="gray" type="logo-twitter"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                formInline: {
                    user: 'admin',
                    password: '123456',
                    interest: true
                },
                ruleInline: {
                    user: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 6,
                            message: '密码长度不能少于6个字符',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            ...mapActions([
                'login'
            ]),
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.login(this.formInline).then(() => {
                            this.$Message.success('Success!');
                            this.$router.push({path: '/'})
                        }).catch(error => {
                            console.log(error);
                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .login-container {
        height: 100%;
        position: relative;


        .login-box {
            width: 400px;
            height: 400px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -200px;
            margin-left: -200px;
        }
    }
</style>
