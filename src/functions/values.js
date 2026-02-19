export default fn => ([key, value]) => [key, fn(value)]
