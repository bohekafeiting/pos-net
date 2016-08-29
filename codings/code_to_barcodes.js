/*global module*/
function loadCodes() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isInvalid(postcodes) {
  return postcodes.split('').every(temp=>{return !(isNaN(temp)&&temp!=='-')});
}

function isTypeLegal(postcodes) {
    return postcodes.length === 5 || postcodes.length === 9 || postcodes.length === 10;
}

function convertFormat(postcodes) {
    if (postcodes.length === 10) {
        let index = postcodes.indexOf('-');
        return postcodes.slice(0, index).concat(postcodes.slice(index + 1));
    }
    else {
        return postcodes;
    }
}

function calculateCheckDigit(postcode) {
    let sum = postcode.split('').reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    });
    return sum % 10 === 0 ? 0 : 10 - sum % 10;
}

function getAllPostcodes(postcode, checkDigit) {
    return postcode.concat(checkDigit.toString());
}

function matchPostcodeCodes(allBarcodes) {
    let codeList = loadCodes();
    let codes = allBarcodes.split('').map(function (code) {
        return codeList[code];
    });
    return codes.join('');
}

function formatBarcodes(codes) {
    return '| '.concat(codes).concat(' |')
}

function codingBarcodes(postcodes) {
    if(!isInvalid(postcodes)){
        return 'Your input invalid!';
    }
    if (!isTypeLegal(postcodes)) {
        return 'Length wrong!';
    }
    let postcode = convertFormat(postcodes);
    let checkDigit = calculateCheckDigit(postcode);
    let allPostcodes = getAllPostcodes(postcode, checkDigit);
    let codes = matchPostcodeCodes(allPostcodes);
    return formatBarcodes(codes);

}

module.exports={
    isInvalid:isInvalid,
    isTypeLegal:isTypeLegal,
    convertFormat:convertFormat,
    calculateCheckDigit:calculateCheckDigit,
    getAllPostcodes:getAllPostcodes,
    matchPostcodeCodes:matchPostcodeCodes,
    formatBarcodes:formatBarcodes,
    codingBarcodes:codingBarcodes
};