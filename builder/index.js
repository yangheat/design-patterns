// Product (최종적으로 생성되는 복합 객체)
function formValidatorBuilder() {
  const rules = {}
  return {
    addRule: (formField, formRules) => {
      rules[formField] = formRules
    },
    validate: (formData) => {
      const errors = {}

      for (const [fieldName, fieldRule] of Object.entries(rules)) {
        const value = formData[fieldName]
        const fieldErrors = []
        for (const rule of fieldRule) {
          if (rule.validate(value)) {
            return
          }

          fieldErrors.push(rule.errorMessage)
        }

        if (fieldErrors.length > 0) {
          errors[fieldName] = fieldErrors
        }
      }

      return errors
    }
  }
}

// Concreate Builder (Builder 인터페이스의 구체적인 구현)
function validatorBuilder() {
  const validate = formValidatorBuilder()

  // builder (객체 생성에 필요한 메서드들을 정의하는 인터페이스)
  return {
    require: function (formField, errorMessage) {
      validate.addRule(formField, [
        {
          validate: (value) => !!value,
          errorMessage
        }
      ])

      return this
    },

    minLength: function (formField, minLength, errorMessage) {
      validate.addRule(formField, [
        {
          validate: (value) => value.length >= minLength,
          errorMessage
        }
      ])

      return this
    },

    build: () => {
      return validate
    }
  }
}

// Director (생성 과정을 제어)
const validator = validatorBuilder()
  .require('id', 'ID is required')
  .minLength('password', 6, 'Password must be at least 6 characters long.')
  .build()

const errors = validator.validate({
  id: '',
  password: '1',
  name: 'John'
})

console.log(errors)
