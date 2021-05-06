var {writeFileSync} = require('fs'),
yaml = require('yaml'); 
module.exports = (options,path) => {
if(!options&&path) throw Error('Please enter the options and path')
writeFileSync(options.filename || new Date().toISOString().slice(0,10) +'.markdown','---\n'+yaml.stringify(options)+'--- \n' + Image(options))   
}
function Image(options) {
if(options.related_image) return `![Rel Image](${options.related_image})`
else return ''
}