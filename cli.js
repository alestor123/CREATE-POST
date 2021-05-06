#!/usr/bin/env node

var prompt = require('prompt-sync')(),
chalk = require('chalk'),
crp = require('./App'),
fim = {},
questions = ['Title','Description','Date','Featured Image','Featured Image Alt','Catagories','Author']
questions.forEach(qs => {
var outs = prompt(chalk.greenBright.bold(qs+' : '))
if(outs.length>0){
fim[qs.toLowerCase().split(' ').join('-')] = outs
}})
console.log(fim)
crp(fim,process.argv[2] || '')
console.log(chalk.greenBright.bold('Sucess !!'))