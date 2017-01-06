var process = require('process')

function hello () {
  var name = 'World'
  if (process.env.name) {
    name = process.env.name
    init()
  }
  console.log('Hello ' + name + ' !')
}

function init () {
  console.log('Initialized')
}

hello()
