var {writeFileSync} = require('fs'),
{join}  = require('path'),
yaml = require('yaml'); 
module.exports = (options,path) => {
if(!options&&path) throw Error('Please enter the options and path')
writeFileSync(options.filename || join(path,new Date().toISOString().slice(0,10)+ '-' + options.title.toLowerCase().split(' ').join('-') + '.markdown'),'---\n'+yaml.stringify(options)+'--- \n' + Image(options))   
}
function Image(options) {
if(options['featured-image']) return `![${options['featured-image-alt']}](${options['featured-image']})`
else return ''
}
