import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja'

Vue.use(VeeValidate, {
  dictionary: {
    ja: {
      messages: {
        required(n) {
          return `${n}は必須項目です`
        },
        max(n, e) {
          return `${n}は${e[0]}文字以内で入力してください`;
        }
      }
    }
  }
});

Validator.localize('ja', ja);
