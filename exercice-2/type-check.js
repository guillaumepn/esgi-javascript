function type_check_v1(val, type) {
  return typeof val === type
}

function type_check_v2(val, conf) {
  return (conf.type ? typeof val === conf.type : true)
    && (conf.value ? val === conf.value : true)
    && (conf.enum ? conf.enum.includes(val) : true)
}

function type_check(obj, conf) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'object') return type_check(obj[prop], conf)
    else if (!type_check_v2(obj[prop], conf)) return false
  }
  return true
}

let val = 3

let conf = {
  type: 'object',
  value: 'salut',
  enum: ['salut', 'bonjour', 3],
}

let obj = {
  vsfdgt: "salut",
  ggq: "salut",
  grezg: {
    grhrzr: "bonjour",
    grereh: 3,
    greah: {
      hej: 3
    }
  }
}

let conf2 = {
  // type: 'string',
  // value: 'salut',
  enum: ['salut', 'bonjour', 3],
}

// console.log(type_check_v1(1, "number"))
// console.log(type_check_v2(val, conf))
// console.log(type_check(obj, conf2))