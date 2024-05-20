/**
 * Validates form values based on a model schema or field configurations.
 * @param {Object} values - The form values to be validated.
 * @param {Object} form - The form object containing field configurations.
 * @param {Object} modelSchema - The Yup schema used for validation (optional).
 * @returns {Object} - An object containing validation errors, if any.
 */
import * as yup from 'yup';
const validate = (values, form, modelSchema) => {
  let errors = {};
  if (modelSchema) {
    try {
      modelSchema.validateSync(values);
    } catch (err) {
      errors[err.path] = err.message;
    }
  } else {
    form.fields.map(field => {
      if (field.required && !values[field.name]) {
        errors[field.name] = "Required";
      }
      if (field.type === "email") {
        try {
          let schema = yup.string().email();
          let err = schema.validateSync(values.email);
        } catch (error) {
          errors[field.name] = error.message;
        }
      } else if (field.required && field.options) {
        if (field.options.indexOf(values[field.name]) == -1) {
          errors[field.name] = `Please select from ${field.options}`;
        }
      }
    });
  }
  return errors;
};

export default validate;
