export default ([fnKey, fnValue]) => ([key, value]) => [fnKey(key), fnValue(value)]
