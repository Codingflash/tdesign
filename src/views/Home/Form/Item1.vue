<template>
  <div class="box">
    <t-form
      :data="formData"
      :rules="rules"
      ref="form"
      @reset="onReset"
      @submit="onSubmit"
      @validate="onValidate"
    >
      <div class="form-box">
        <div>
          <t-form-item label="案件编号" name="caseNum">
            <t-input :disabled="true" v-model="formData.caseNum"></t-input>
          </t-form-item>
          <t-form-item  label="纳税人识别号" name="identifier">
            <t-input :disabled="true" v-model="formData.identifier"></t-input>
          </t-form-item>
          <t-form-item label="检查日期起" name="startDate">
            <t-date-picker
              v-model="formData.startDate"
              placeholder="可清除、可输入的日期选择器"
              clearable
              allow-input
            />
          </t-form-item>
        </div>
        <div style="marginLeft:30px">
          <t-form-item label="案件名称" name="caseName">
            <t-input :disabled="true" v-model="formData.caseName"></t-input>
          </t-form-item>
          <t-form-item label="纳税人名称" name="taxpayer">
            <t-input :disabled="true" v-model="formData.taxpayer"></t-input>
          </t-form-item>
          <t-form-item label="检查日期止" name="endDate">
            <t-date-picker
              v-model="formData.endDate"
              placeholder="可清除、可输入的日期选择器"
              clearable
              allow-input
            />
          </t-form-item>
        </div>
        <div class="btn-box">
          <t-form-item>
            <t-space size="10px">
              <t-button theme="primary" type="submit">提交</t-button>
              <t-button theme="default" variant="base" type="reset"
                >重置</t-button
              >
            </t-space>
          </t-form-item>
        </div>
      </div>
      <div style="marginTop:20px">
        <t-form-item label="检查内容" name="content">
          <t-textarea class="textarea" v-model="formData.content"></t-textarea>
        </t-form-item>
        <t-form-item label="违法事实" name="thing">
          <t-textarea class="textarea" v-model="formData.thing"></t-textarea> </t-form-item
        ><t-form-item label="违法手段" name="means">
          <t-textarea class="textarea" v-model="formData.means"></t-textarea>
        </t-form-item>
      </div>
    </t-form>
  </div>
</template>
<script>
const INITIAL_DATA = {
  caseNum: "14404577273423455",
  identifier: "2423523253JH",
  startDate: "",
  caseName: "中凯贸易有限公司4556-违反税收管理",
  taxpayer:"中凯贸易有限公司4556",
  endDate: "",
  content: "",
  thing: "",
  means: "",
};
export default {
    name:"Item1",
  data() {
    return {
      formData: { ...INITIAL_DATA },
      rules: {
        startDate: [
          { required: true, message: "日期必填", type: "error" }
        ],
        endDate: [
          { required: true, message: "日期必填", type: "error" }
        ],
        content: [
          { required: true, message: "违法内容必填", type: "error" },
          // 自定义校验规则：不同的值可以有不同的校验结果，不同的校验类型
          { validator: this.contentValidator },
        ],
        rePassword: [
          { required: true, message: "密码必填", type: "error" },
          // 自定义校验规则：自定义异步校验规则
          { validator: this.rePassword, message: "两次密码不一致" },
        ],
      },
    };
  },

  methods: {
    //重置
    onReset() {
      Object.assign(this.$data.formData, this.$options.data().formData);
      this.$message.success("重置成功");
    },
    //提交表单
    onSubmit({ validateResult, firstError }) {
        console.log(this.formData);
      if (validateResult === true) {
        this.$message.success("提交成功");
      } else {
        console.log("Errors: ", validateResult);
        this.$message.warning(firstError);
      }
    },
    //验证
    onValidate({ validateResult, firstError }) {
      if (validateResult === true) {
        console.log("Validate Success");
      } else {
        console.log("Validate Errors: ", firstError, validateResult);
      }
    },
    //失去焦点
    handleBlur() {
      this.$refs.form.validate({
        fields: ["account"],
        trigger: "blur",
      });
    },
    // 自定义异步校验器，使用 resolve 返回结果控制校验结果、校验信息、校验结果类型
    contentValidator(val) {
      return new Promise((resolve) => {
        const timer = setTimeout(() => {
          if (["违法","1"].includes(val)) {
            resolve({ result: true });
          } else {
            resolve({ result: false, message: "请确认已违法！", type: "error" });
          }
          clearTimeout(timer);
        }, 10);
      });
    },
   
   
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  padding: 20px;
  .form-box {
    display: flex;
    margin-top: 60px;
    .btn-box {
      transform: translate(-580px, -60px);
    }
   
  }
  .textarea{
        width: 530px;
        ::v-deep .t-textarea__inner{
            height: 100px;
        }
    } 

}
</style>

