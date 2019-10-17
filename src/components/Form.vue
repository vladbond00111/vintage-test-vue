<template>
  <div id="form-block" class="form block-container">
    <h2>Contact Us</h2>
    <div class="row">
      <div class="col-12 col-md-6 form-wrap">
        <form id="form">
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </p>

          <div class="input-wrap" :class="{ danger: !checkName }">
            <label for="name" class="input-label">Name</label>
            <input id="name" v-model="form.name" type="text" name="name" @click="checkName=true">
          </div>

          <div class="input-wrap" :class="{ danger: !checkPhone }">
            <label for="tel" class="input-label">Phone</label>
            <input id="tel" v-model="form.phone" type="text" name="tel" @click="checkPhone=true" v-mask="'+38(099)-99-99-999'"/>
          </div>

          <div class="input-wrap" :class="{ danger: !checkEmail }">
            <label for="email" class="input-label">E-mail</label>
            <input id="email" v-model="form.email" type="text" name="email" @click="checkEmail=true">
          </div>

          <div class="checkbox-wrap" :class="{ danger: !checkAgree }">
            <input id="agreeBox" type="checkbox" @click="changeAgree">
            <label for="agreeBox">I agree the processing of personal data</label>
          </div>

          <div class="btn-wrap">
            <button :disabled="formSuccess" :class="{ disabled: formSuccess }" class="btn-submit"  type="submit" @click.stop.prevent="checkForm">Get in touch</button>
          </div>

        </form>
      </div>
      <div class="col-12 col-md-6 text-wrap">
        Please tell us more about your request and give us info about your company and country
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      form: {
        name: null,
        phone: null,
        email: null,
      },
      agree: false,
      errors: [],
      checkName: true,
      checkPhone: true,
      checkEmail: true,
      checkAgree: true,
      formSuccess: false,
    }
  },
  methods: {
    submitForm () {

    },
    changeAgree() {
      this.agree = !this.agree;
      this.checkAgree = true;
    },
    checkForm (e) {
      this.errors = [];
      if(!this.form.name) {
        this.errors.push("Name required");
        this.checkName = false;
      } else if(this.form.name.length>30) {
        this.errors.push("Name is too long");
        this.checkName = false;
      } else if(!this.validName(this.form.name)) {
        this.errors.push("Valid name required");    
        this.checkName = false;    
      } else {
        this.checkName = true;
      }

      if(!this.form.email) {
        this.errors.push("Email required");
        this.checkEmail = false;
      } else if(!this.validEmail(this.form.email)) {
        this.errors.push("Valid email required");    
        this.checkEmail = false;    
      } else {
        this.checkEmail = true;
      }

      if(!this.form.phone) {
        this.errors.push("Phone required");
        this.checkPhone = false;
      } else if((this.form.phone.match(/\d/g).length)<12){
        this.errors.push("Valid phone required");
        this.checkPhone = false;
      } else {
        this.checkPhone = true;
      }
      
      if(!this.agree) {
        this.errors.push("Agree the processing of personal data")
        this.checkAgree = false;
      } else {
        this.checkAgree = true;
      }

      if(!this.errors.length) {
        $.post('http://httpbin.org/post',  this.form).done(() => {
          this.formSuccess = true;
        });
      }
      e.preventDefault();
    },
    validEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    },
    validName:function(name) {
      var re = /^[a-zA-ZА-Яа-я ]/g;
    return re.test(name);
    }
  },
  
}
</script>

<style lang='scss' scoped>
  $dark: #040707;
  $green: #3db565;
  h2 {
    font-size: 34px;
    line-height: 48px;
    color: #ffffff;
  }
  .block-container {
    background-image: url(../assets/images/pattern.png);
    background-color: $green;
    .form-wrap {
      padding-right: 35px;

      .input-wrap {
        display: flex;
        border-bottom: 1px solid $dark;
        margin-bottom: 10px!important;
        &:focus-within {
          border-color: #ffffff;
          label {
            color: #ffffff;
          }
          input {
            color: #ffffff;
          }
        }
        label {
          width: 100px;
          left: 0;
          top: 0;
          color: black;
          font-size: 18px;
          line-height: 50px;
          margin-bottom: 0;
        }
        input {
          width: 100%;
          height: 50px;
          margin-bottom: 0;
          border: none;
          outline: none;
          background: none;
          font-size: 18px;
          line-height: 50px;
        }
      }
      .checkbox-wrap {
        margin-top: 20px;
        margin-bottom: 30px;
        input {
          display: none;
        }
        input + label:before {
          content: "\2713";
          line-height: 16px;
          font-size: 20px;
          border-radius: 0;
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 20px;
          vertical-align: bottom;
          color: transparent;
          transition: .2s;
          background-color: #ffffff;
        }
        
        input + label:active:before {
          transform: scale(0);
        }
        input:checked + label:before {
          color: #000000;
        }
        label {
          font-size: 18px;
          line-height: 16px;
        }
      }
            
      .danger {
        border-color: red;
        label {
          color: red;
        }
        input {
          color: red;
        }
      }
      .btn-wrap {
        .btn-submit {
          background-color: #262626;
          color: #ffffff;
          padding: 5px 90px;
          border: 0;
          font-size: 11px;
          letter-spacing: 2px;
          line-height: 72px;
          text-transform: uppercase;
          font-weight: bold;
          text-align: center;
          &:hover {
            background-color: #000000;
          }
        }      
        @media(max-width: 576px) {
          text-align: center;
        }
        .disabled {
          background-color: #666666;
          &:hover {
            background-color: #666666;
          }
        }
      }
    }
    .text-wrap {
      padding: 20px 35px 20px 15px;
    }
  }


</style>
