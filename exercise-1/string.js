let string = 'Hella world'
let object = {
  animal: {
    type: {
      name: 'dog'
    }
  }
}

function ucfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function capitalize(string) {
  let words = string.trim().split(' ')
  return words.map(word => ucfirst(word)).join(' ')
}

function camelCase(string) {
  return capitalize(string).replace(' ', '')
}

function snake_case(string) {
  return string.toLowerCase().replace(' ', '_')
}

function prop_access(object, string) {
  let props = string.split('.')
  let res = object
  props.map(prop => {
    res = res[prop]
  })
  return res || string
}

function leet(string) {
  return string
    .replace('a', '4')
    .replace('e', '3')
    .replace('i', '1')
    .replace('o', '0')
    .replace('u', '(_)')
    .replace('y', '7')
}

function verlan(string) {
  let words = string.trim().split(' ')
  return words.map(word => word.split('').reverse().join('')).join(' ')
}

function yoda(string) {
  let words = string.trim().split(' ')
  return words.reverse().join(' ')
}

function vig(word, key) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let hashed = ''
  word.split('').map((letter, i) => {
    let index = i > key.length ? i - key.length : i
    let wordLetterIndex = alphabet.indexOf(letter)
    let keyLetterIndex = alphabet.indexOf(key[index])
    let hashedLetterIndex = wordLetterIndex + keyLetterIndex
    hashedLetterIndex = hashedLetterIndex >= 26 ? hashedLetterIndex - 26 : hashedLetterIndex
    hashed += alphabet[hashedLetterIndex]
  })
  return hashed
}

console.log(prop_access(object, 'animal.type.name'))