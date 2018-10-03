
Object.prototype.prop_access = function (string) {
  let props = string.split('.')
  let property = props[props.length - 1]
  let res = this
  props.map(prop => {
    res = res[prop]
  })
  if (typeof res != "undefined")
    return res
  else
    throw new UndefinedPropertyError(string, property, this)
}

function UndefinedPropertyError(path, property, object) {
  let instance = new Error(`Property ${property} not exist for path ${path}, expected one of : ${Object.keys(object)}`)

  Object.setPrototypeOf(instance, Object.getPrototypeOf(this))

  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, UndefinedPropertyError)
  }

  return instance
}

let obj = {
  animal: {
    type: 'dog',
    name: 'spooky',
  }
}

function test() {
  try {
    return val = obj.prop_access('animal.gender')
  } catch (error) {
    if (error instanceof UndefinedPropertyError) {
      return 'Exception caught'
    }
  }
}

console.log(test())