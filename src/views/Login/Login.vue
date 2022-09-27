<template>
  <div class="login">
    <t-form
      class="form"
      ref="form"
      :data="formData"
      labelAlign="left"
      colon
      @reset="onReset"
      @submit="onSubmit"
      :rules="loginRules"
    >
      <t-form-item label="用户名" name="userName">
        <t-input
          v-model="formData.userName"
          placeholder="请输入用户名"
        ></t-input>
      </t-form-item>
      <t-form-item label="密码" name="password">
        <t-input
          v-model="formData.password"
          placeholder="请输入密码"
          type="password"
        ></t-input>
      </t-form-item>
      <t-form-item style="marginLeft:100px">
      <t-checkbox labelAlign="right" v-model="remember_me_checked" @change="handleRememberChange" size="large">记住我</t-checkbox>
    </t-form-item>
      <t-form-item style="margin-left: 100px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">提交</t-button>
          <t-button theme="default" variant="base" type="reset" >重置</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </div>
</template>

<script>
import md5 from 'js-md5'
import {login} from '../../api/mockSever'
export default {
  name: "Login",
  data() {
    return {
      formData: {
        userName: "",
        password: "",
      },
      remember_me_checked:false,
      loginRules:{
        userName:[
            {required:true,message:"请输入用户名！",type:"error"},
            {min:3,message:"至少输入三位",type:"warning"}
        ],
        password:[
            {required:true,message:"请输入密码！",type:"error"},
            {min:6,message:"至少输入六位",type:"warning"}
        ]
        }
    };
  },
  created(){
    if(localStorage.getItem("loginData")){
        this.formData={
            userName:JSON.parse(localStorage.getItem("loginData")).userName,
            password:JSON.parse(localStorage.getItem("loginData")).password
        }
        this.remember_me_checked = true
    }
  },
  methods:{
    handleRememberChange(value){
         // 缓存用户登录信息
      if (value) {
        localStorage.setItem("loginData", JSON.stringify(this.formData))
      } else {
        localStorage.removeItem("loginData")
      }
    },
    onSubmit({validateResult,firstError}){
        if(validateResult=== true){
          login().then((res)=>{
            console.log(res);
            if(res.code === 200){
              this.$message.success(res.data)
              this.$router.push({name:"Home"}).catch(err => {})
            }else{
              this.$message.error("用户名或密码错误！")
            }
          })
            // if(this.formData.userName === "123" && this.formData.password==="123456"){
            //     localStorage.setItem("token",md5(md5(this.formData.userName+this.formData.password)))
            //     this.$message.success("登录成功！")
            //     this.$router.push({name:"Home"})
            // }else{
            //     this.$message.error("用户名或密码错误！")
            // }
        }
    },
    onReset(){
        Object.assign(this.$data.formData, this.$options.data().formData)
        this.$message.success('重置成功');
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  .form {
    width: 400px;
    height: 300px;
    padding: 20px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgb(173, 228, 209);
  }
}
</style>
