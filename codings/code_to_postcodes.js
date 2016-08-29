/*global module*/
function loadCodes() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isLegal(barcodes) {
    let legal = barcodes.split('').find(function (temp) {
        return temp !== '|' && temp !== ':' && temp !== ' ';
    });
    return !legal;
}

function isFormat(barcodes) {
    let first = barcodes.slice(0, 2);
    let end = barcodes.slice(barcodes.length - 2, barcodes.length);
    return (first[0] === '|' && first[1] === ' ' && end[0] === ' ' && end[1] === '|');
}

function formatBarcode(barcodes) {
    return barcodes.slice(2, barcodes.length - 2);
}

function splitBarcodes(barcode) {
    let codes = barcode.split(' ');
    return codes.filter(function (temp) {
        return temp !== '';
    });
}

function isLengthlegal(barcodeArray) {
    let legal = barcodeArray.find(function (temp) {
        return temp.length !== 5;
    });
    return !legal;
}

function matchCodes(barcodeArray) {
    let codeList = loadCodes();
    let codes = barcodeArray.map(function (code) {
        return codeList.indexOf(code);
    });
    return codes.reduce(function (a, b) {
        return a.toString().concat(b.toString());
    });
}

function getCheckDigit(codes) {
    return parseInt( codes.slice(codes.length - 1, codes.length));
}

function checkDigit(codes, checks) {
    let check = codes.slice(0, codes.length - 1).split('').reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    });
    return 10 - check % 10 === checks;
}

function getCodes(codes) {
    if (codes.length === 6 || codes.length === 11) {
        return codes.slice(0, codes.length-1);
    }
    else {
        return codes.slice(0, 5).concat('-').concat(codes.slice(5,codes.length-1));
    }
}

function codingPostcodes(barcodes) {
    if (!(isLegal(barcodes) && isFormat(barcodes))) {
        return 'Your barcodes format wrong!';
    }
    let barcode = formatBarcode(barcodes);
    let barcodeArray = splitBarcodes(barcode);
    if (!isLengthlegal(barcodeArray)) {
        return 'Your barcodes length wrong!';
    }
    let codes = matchCodes(barcodeArray);
    let checks = getCheckDigit(codes);
    if (!checkDigit(codes, checks)) {
        return 'Checkdigit wrong!';
    }
    return getCodes(codes);
}

module.exports = {
    isLegal: isLegal,
    isFormat: isFormat,
    formatBarcode: formatBarcode,
    splitBarcodes: splitBarcodes,
    isLengthlegal: isLengthlegal,
    matchCodes: matchCodes,
    getCheckDigit: getCheckDigit,
    checkDigit: checkDigit,
    getCodes: getCodes,
    codingPostcodes: codingPostcodes
};