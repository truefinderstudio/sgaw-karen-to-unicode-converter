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
    var find = ["&#94;", "&#39;&#100;", "&#98;&#72;&#83;", "&#124;&#83;", "&#64;", "&#55;&#72;&#79;&#73;", "&#106;&#112;", "&#93;&#122;&#104;", "&#106;&#122;&#104;", "&#98;&#64;", "&#38;&#83;", "&#122;&#68;&#83;", "&#55;&#83;", "&#97;&#117;", "&#60;&#32;", "&#44;&#32;", "&#66;&#119;", "&#77;&#98;", "&#55;&#86;", "&#189;", "&#121;&#72;&#107;", "&#109;", "&#105;", "&#60;", "&#77;&#119;", "&#77;&#117;", "&#121;&#86;", "&#44;&#72;", "&#44;&#71;", "&#49;&#59;&#48;", "&#49;&#59;&#49;", "&#49;&#59;&#50;", "&#49;&#59;&#51;", "&#49;&#59;&#52;", "&#49;&#59;&#53;", "&#49;&#59;&#54;", "&#49;&#59;&#38;", "&#49;&#59;&#56;", "&#49;&#59;&#57;", "&#50;&#59;&#48;", "&#50;&#59;&#49;", "&#50;&#59;&#50;", "&#50;&#59;&#51;", "&#50;&#59;&#52;", "&#50;&#59;&#53;", "&#50;&#59;&#54;", "&#50;&#59;&#38;", "&#50;&#59;&#56;", "&#50;&#59;&#57;", "&#51;&#59;&#48;", "&#51;&#59;&#49;", "&#51;&#59;&#50;", "&#51;&#59;&#51;", "&#51;&#59;&#52;", "&#51;&#59;&#53;", "&#51;&#59;&#54;", "&#51;&#59;&#38;", "&#51;&#59;&#56;", "&#51;&#59;&#57;", "&#52;&#59;&#48;", "&#52;&#59;&#49;", "&#52;&#59;&#50;", "&#52;&#59;&#51;", "&#52;&#59;&#52;", "&#52;&#59;&#53;", "&#52;&#59;&#54;", "&#52;&#59;&#38;", "&#52;&#59;&#56;", "&#52;&#59;&#57;", "&#53;&#59;&#48;", "&#53;&#59;&#49;", "&#53;&#59;&#50;", "&#53;&#59;&#51;", "&#53;&#59;&#52;", "&#53;&#59;&#53;", "&#53;&#59;&#54;", "&#53;&#59;&#38;", "&#53;&#59;&#56;", "&#53;&#59;&#57;", "&#54;&#59;&#48;", "&#54;&#59;&#49;", "&#54;&#59;&#50;", "&#54;&#59;&#51;", "&#54;&#59;&#52;", "&#54;&#59;&#53;", "&#54;&#59;&#54;", "&#54;&#59;&#38;", "&#54;&#59;&#56;", "&#54;&#59;&#57;", "&#38;&#59;&#48;", "&#38;&#59;&#49;", "&#38;&#59;&#50;", "&#38;&#59;&#51;", "&#38;&#59;&#52;", "&#38;&#59;&#53;", "&#38;&#59;&#54;", "&#38;&#59;&#38;", "&#38;&#59;&#56;", "&#38;&#59;&#57;", "&#56;&#59;&#48;", "&#56;&#59;&#49;", "&#56;&#59;&#50;", "&#56;&#59;&#51;", "&#56;&#59;&#52;", "&#56;&#59;&#53;", "&#56;&#59;&#54;", "&#56;&#59;&#38;", "&#56;&#59;&#56;", "&#56;&#59;&#57;", "&#57;&#59;&#48;", "&#57;&#59;&#49;", "&#57;&#59;&#50;", "&#57;&#59;&#51;", "&#57;&#59;&#52;", "&#57;&#59;&#53;", "&#57;&#59;&#54;", "&#57;&#59;&#38;", "&#57;&#59;&#56;", "&#57;&#59;&#57;", "&#44;&#68;", "&#44;&#100;", "&#49;&#59;", "&#50;&#59;", "&#51;&#59;", "&#52;&#59;", "&#53;&#59;", "&#54;&#59;", "&#38;&#59;", "&#38;&#59;", "&#56;&#59;", "&#57;&#59;"
]; // Placeholder: Fill with actual patterns
    var replace = ["&#Slash;", "&#4114;&#4141;", "&#4120;&#4158;&#4150;", "&#4193;", "&#4097;&#4151;&#4155;", "&#4123;&#4150;&#4195;&#4154;&#4194;&#4154;", "&#4101;&#4156;", "&#4118;&#4156;&#4151;", "&#4118;&#4156;&#4151;", "&#4120;&#4155;&#4151;", "&#4123;&#4158;", "&#4118;&#4158;&#4142;", "&#4193;", "&#4096;&#4145;", "dash;&#32;", "dash;&#32;", "&#4112;&#4156;", "&#4120;&#4156;", "&#4193;&#4157;", "&#4123;", "&#4098;&#4143;&#4150;", "&#4140;", "&#4100;", "&#4122;", "&#4112;&#4156;", "&#4096;&#4156;", "&#4198;&#4151;", "&#4122;&#4150;", "&#4122;&#4157;", "&#49;&#colons;&#48;", "&#49;&#colons;&#49;", "&#49;&#colons;&#50;", "&#49;&#colons;&#51;", "&#49;&#colons;&#52;", "&#49;&#colons;&#53;", "&#49;&#colons;&#54;", "&#49;&#colons;&#55;", "&#49;&#colons;&#56;", "&#49;&#colons;&#57;", "&#50;&#colons;&#48;", "&#50;&#colons;&#49;", "&#50;&#colons;&#50;", "&#50;&#colons;&#51;", "&#50;&#colons;&#52;", "&#50;&#colons;&#53;", "&#50;&#colons;&#54;", "&#50;&#colons;&#55;", "&#50;&#colons;&#56;", "&#50;&#colons;&#57;", "&#51;&#colons;&#48;", "&#51;&#colons;&#49;", "&#51;&#colons;&#50;", "&#51;&#colons;&#51;", "&#51;&#colons;&#52;", "&#51;&#colons;&#53;", "&#51;&#colons;&#54;", "&#51;&#colons;&#55;", "&#51;&#colons;&#56;", "&#51;&#colons;&#57;", "&#52;&#colons;&#48;", "&#52;&#colons;&#49;", "&#52;&#colons;&#50;", "&#52;&#colons;&#51;", "&#52;&#colons;&#52;", "&#52;&#colons;&#53;", "&#52;&#colons;&#54;", "&#52;&#colons;&#55;", "&#52;&#colons;&#56;", "&#52;&#colons;&#57;", "&#53;&#colons;&#48;", "&#53;&#colons;&#49;", "&#53;&#colons;&#50;", "&#53;&#colons;&#51;", "&#53;&#colons;&#52;", "&#53;&#colons;&#53;", "&#53;&#colons;&#54;", "&#53;&#colons;&#55;", "&#53;&#colons;&#56;", "&#53;&#colons;&#57;", "&#54;&#colons;&#48;", "&#54;&#colons;&#49;", "&#54;&#colons;&#50;", "&#54;&#colons;&#51;", "&#54;&#colons;&#52;", "&#54;&#colons;&#53;", "&#54;&#colons;&#54;", "&#54;&#colons;&#55;", "&#54;&#colons;&#56;", "&#54;&#colons;&#57;", "&#55;&#colons;&#48;", "&#55;&#colons;&#49;", "&#55;&#colons;&#50;", "&#55;&#colons;&#51;", "&#55;&#colons;&#52;", "&#55;&#colons;&#53;", "&#55;&#colons;&#54;", "&#55;&#colons;&#55;", "&#55;&#colons;&#56;", "&#55;&#colons;&#57;", "&#56;&#colons;&#48;", "&#56;&#colons;&#49;", "&#56;&#colons;&#50;", "&#56;&#colons;&#51;", "&#56;&#colons;&#52;", "&#56;&#colons;&#53;", "&#56;&#colons;&#54;", "&#56;&#colons;&#55;", "&#56;&#colons;&#56;", "&#56;&#colons;&#57;", "&#57;&#colons;&#48;", "&#57;&#colons;&#49;", "&#57;&#colons;&#50;", "&#57;&#colons;&#51;", "&#57;&#colons;&#52;", "&#57;&#colons;&#53;", "&#57;&#colons;&#54;", "&#57;&#colons;&#55;", "&#57;&#colons;&#56;", "&#57;&#colons;&#57;", "&#4122;&#4142;", "&#4122;&#4141;", "&#4161;semicolan", "&#4162;semicolan", "&#4163;semicolan", "&#4164;semicolan", "&#4165;semicolan", "&#4166;semicolan", "&#4167;semicolan", "&#4167;semicolan", "&#4168;semicolan", "&#4169;semicolan"
]; // Placeholder: Fill with actual replacements
    for (var i = 0; i < find.length; i++) {
        var regex = new RegExp(find[i], "g");
        input = input.replace(regex, replace[i]);
    }
    return input;
}
