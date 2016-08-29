/*global require,describe*/
const links=require('../../codings/code_to_barcodes.js');

describe("isInvalid()",function () {
    it("it should print type turn ",function () {
        let inputs='1024=1';
        let result=links.isInvalid(inputs);
        expect(result).toEqual(false);
    });
});


describe("isInvalid()",function () {
    it("it should print type turn ",function () {
        let inputs='10241';
        let result=links.isInvalid(inputs);
        expect(result).toEqual(true);
    });
});

describe("isTypeLegal",function () {
    it("it should print type false",function () {
        let inputs='489';
        let result=links.isTypeLegal(inputs);
        expect(result).toEqual(false);
    });
});

describe("convertFormat",function () {
    it('it should print true format',function () {
        let inputs='12345-6789';
        let result=links.convertFormat(inputs);
        expect(result).toEqual('123456789');
    });
});

describe('calculateCheckDigit',function () {
    it("it should print  checkdigit",function () {
        let inputs='10241';
        let result=links.calculateCheckDigit(inputs);
        expect(result).toEqual(2);
    });
});

describe('getAllPostcodes',function () {
    it('it should get all postcodes',function () {
        let inputs='10241';
        let result=links.getAllPostcodes(inputs,2);
        expect(result).toEqual('102412');
    });
});

describe('matchPostcodeCodes',function () {
    it('it should print codes(string)',function () {
        let inputs='102412';
        let expected=':::||||:::::|:|:|::|:::||::|:|';
        let result=links.matchPostcodeCodes(inputs);
        expect(result).toEqual(expected);
    });
});

describe('formatBarcodes',function () {
    it('it should print right barcodes',function () {
        let inputs=':::||||:::::|:|:|::|:::||::|:|';
        let expected='| :::||||:::::|:|:|::|:::||::|:| |';
        let result=links.formatBarcodes(inputs,1);
        expect(result).toEqual(expected);
    });
});

describe('codingBarcodes',function () {
    it('it should print right barcodes',function () {
        let inputs='10241';
        let expected='| :::||||:::::|:|:|::|:::||::|:| |';
        let result=links.codingBarcodes(inputs);
        expect(result).toEqual(expected);
    });
});
