var fs = require('fs');
var path = require('path')
var filePath = path.join(__dirname, './pdf.pdf')

var extract = require('pdf-text-extract')
// usage --> https://www.npmjs.com/package/pdf-text-extract
extract(filePath, { splitPages: false}, function (err, text) 
{
    if (err) 
    {
        console.dir(err);
        return;
    } 
    // all ASCII chars shown (e.g. '/n')
    console.dir(text);

    // output contents to file
    fs.writeFile("./pdf.txt", text);
})
