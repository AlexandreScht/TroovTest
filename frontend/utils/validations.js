const required = (propertyType) => {
  return (v) => (v && v.length > 0) || `${propertyType} is a required field`
}

const Number = (propertyType) => {
  return (v) => !isNaN(v) || `${propertyType} is not a number`
}

const minLength = (propertyType, minLength) => {
  return (v) =>
    (v && v.length >= minLength) ||
    `${propertyType} must be at least ${minLength} characters`
}
const maxLength = (propertyType, maxLength) => {
  return (v) =>
    (v && v.length <= maxLength) ||
    `${propertyType} must be less than ${maxLength} characters`
}

const maxSize = (propertyType, limit) => {
  return (v) =>
    !v || !v.length || v[0].size < limit || `${propertyType} should be less than 2 MB!`
}

const emailFormat = () => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/

  
return (v) => (v && regex.test(v)) || "Must be a valid email"
}

const passwordFormat = () => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&()_+=\-[\]{};':"|,.<>/?]).+$/

  
return (v) => (v && regex.test(v)) || "Must be a valid password with at least one majuscule, one minuscule and one special character"
}
 

export default {
  required,
  minLength,
  maxLength,
  emailFormat,
  passwordFormat,
  maxSize,
  Number
}
