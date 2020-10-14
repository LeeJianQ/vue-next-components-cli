#!/usr/bin/env node
// inquirer
// ejs
const inquirer = require('inquirer')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Your components name?'
    },
    {
        type: 'input',
        name: 'createPath',
        message: 'The path you are about to create?',
        default: '/src/components'
    }
  ])
  .then(anwsers => {
    const tmplDir = path.join(__dirname, 'templates')
    const destDir = process.cwd()

    fs.readdir(tmplDir, (err, files) => {
      if (err) throw err
      files.forEach(file => {
        ejs.renderFile(path.join(tmplDir, file), anwsers, (err, result) => {
          if (err) throw err
          let hz = /\..*/.exec(file)[0]
          fs.mkdir(`${destDir}${anwsers.createPath}/${anwsers.projectName}`, { recursive: true }, (err) => {
            if (err) throw err
            fs.writeFileSync(path.join(`${destDir}${anwsers.createPath}/${anwsers.projectName}`, `${anwsers.projectName}${hz}`), result)
          })
        })
      })
    })
  })