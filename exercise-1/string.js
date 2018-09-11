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
  return res
}

function leet(string) {
  return string
    .replace('a', '4')
    .replace('e', '3')
    .replace('i', '1')
    .replace('o', '0')
    .replace('u', '(_)')
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
  // wikipedia
  // crypto
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let hashed = ''
  word.split('').map((letter, i) => {
    let index = i > key.length ? i - key.length : i
    let wordLetterIndex = alphabet.indexOf(letter)
    let keyLetterIndex = alphabet.indexOf(key[index])
    let hashedLetterIndex = wordLetterIndex + keyLetterIndex
    hashedLetterIndex = hashedLetterIndex >= 26 ? hashedLetterIndex - 26 : hashedLetterIndex
    let l = alphabet[hashedLetterIndex]
    hashed += l
  })
  return hashed
}

console.log(vig('wikipedia', 'crypto'))