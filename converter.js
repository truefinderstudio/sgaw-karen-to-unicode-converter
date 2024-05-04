// converter.js
function unicodeToNCR(input) {
    var output = '';
    for (var i = 0; i < input.length; i++) {
        output += '&#' + input.charCodeAt(i) + ';';
    }
    return output;
}

function NCRToUnicode(input) {
    return input.replace(/&#(\d+);/g, function(match, numStr) {
        return String.fromCharCode(parseInt(numStr, 10));
    });
}

function convertText(input) {
    // Define your find and replace arrays
    var find = ["find1", "find2", "find3"]; // Placeholder: Fill with actual patterns
    var replace = ["replace1", "replace2", "replace3"]; // Placeholder: Fill with actual replacements
    for (var i = 0; i < find.length; i++) {
        var regex = new RegExp(find[i], "g");
        input = input.replace(regex, replace[i]);
    }
    return input;
}
