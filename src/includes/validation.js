import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    // 定义一条校验规则
    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minValue)
    defineRule('max_value', maxValue)
    defineRule('confirmed', confirmed)
    defineRule('excluded', excluded)
    defineRule('password_mismatch', confirmed)
    defineRule('country_excluded', excluded)
    defineRule('tos', required)

    configure({
      generateMessage(ctx) {
        const messages = {
          required: `The field ${ctx.name} is required.`,
          min: `The field ${ctx.name} is too short.`,
          max: `The field ${ctx.name} is too long.`,
          alpha_spaces: `The field ${ctx.name} may only contain character or space.`,
          email: `The field ${ctx.name} must be a valid email.`,
          min_value: `The field ${ctx.name} is too low.`,
          max_value: `The field ${ctx.name} is too high.`,
          excluded: `You are not allowed to use this value for ${ctx.name}.`,
          country_excluded: `Due to restrictions, we do not accept users from this location.`,
          password_mismatch: `The passwords don't match.`,
          tos: `You must accept the Terms of Service.`
        }
        return messages[ctx.rule.name] || `The field ${ctx.field} is invalid`
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
