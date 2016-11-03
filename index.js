var fs = require('fs');
var extract = require('pdf-text-extract')
var path = require('path')
var filePath = path.join(__dirname, './pdf.pdf')

// usage --> https://www.npmjs.com/package/pdf-text-extract
extract(filePath, { splitPages: false}, function (err, text) 
{
    if (err) 
    {
        console.dir(err);
        return;
    }
    console.dir(text);
    fs.writeFile("./pdf.txt", text);
})
