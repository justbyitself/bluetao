export default ([predKey, predValue]) => ([key, value]) => predKey(key) && predValue(value)
