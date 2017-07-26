var fileContent = {};

fileContent['logs'] = ["(andrew) - Home Page",
    "(david) - Kids Home Store Page",
    "(david) - Furniture Page",
    "(Alexy) -  Kids Home Store Page",
    "(michale) - Lighting & Ceiling Fans Page"
];

var cat = function (fileName) {
    return fileContent[fileName] || [];
}

var count = function (lines) {
    return lines.length;
}

var grep = function (filterText) {
    
    var lowerTextValue = filterText.toLowerCase();
    return function (fileContent) {

        var result = [];
        for (var index = 0; index < fileContent.length; index++) {

            if (fileContent[index].toLowerCase().indexOf(lowerTextValue) > -1) {
                result.push(fileContent[index]);
            }
        }

        return result;
    }
}


function compose(...functions) {

    return function (initialValue) {
        
        return functions.reduce((lastValue, fn) => {
            return fn(lastValue);
        }, initialValue)
        
    }
}

var fileLineCount = compose(cat, grep('home'), count)
console.log(fileLineCount('logs'))

cat(fileName)
    .filter( line => line.indexOf('home') > -1)
    .reduce(lineCount)

