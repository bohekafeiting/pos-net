/*global dedcribe,it,expect,require*/
const link_spec=require('../../codings/code_to_postcodes.js');

describe("isLegal", function () {
    it("it should print turn", function () {
        let inputs = '| :::||  ||:::  ::|:|  :|::|  :::||  ::|:| |';
        let result =link_spec.isLegal(inputs);
        expect(result).toEqual(true);
    });
});

describe("isLegal", function () {
    it("it should print false", function () {
        let inputs = '|: |*';
        let result =link_spec.isLegal(inputs);
        expect(result).toEqual(false);
    });
});

describe("isFormat", function () {
    it('it should print true', function () {
        let inputs = '| :::||  ||:::  ::|:|  :|::|  :::||  ::|:| |';
        let result =link_spec.isFormat(inputs);
        expect(result).toEqual(true);
    });
});

describe("isFormat", function () {
    it('it should print false', function () {
        let inputs = '| ';
        let result = link_spec.isFormat(inputs);
        expect(result).toEqual(false);
    });
});

describe('formatBarcode', function () {
    it("it should print  with no start and end", function () {
        let inputs = '| :::||  ||:::  ::|:|  :|::|  :::||  ::|:| |';
        let expected= ':::||  ||:::  ::|:|  :|::|  :::||  ::|:|';
        let result = link_spec.formatBarcode(inputs);
        expect(result).toEqual(expected);
    });
});

describe('splitBarcodes', function () {
    it('it should print split barcodes', function () {
        let inputs = ':::||  ||:::  ::|:|  :|::|  :::||  ::|:|';
        let excepted = [':::||', '||:::', '::|:|', ':|::|',':::||','::|:|'];
        let result = link_spec.splitBarcodes(inputs);
        expect(result).toEqual(excepted);
    });
});

describe('isLengthlegal', function () {
    it("it should print  true", function () {
        let inputs = [':::||', '||:::', '::|:|', ':|::|',':::||','::|:|'];
        let result = link_spec.isLengthlegal(inputs);
        expect(result).toEqual(true);
    });
});

describe("isLengthlegal", function () {
    it("it should print false", function () {
        let inputs = [':::||', '||:::', '::|:|', ':|::|',':::||',':::|'];
        let result = link_spec.isLengthlegal(inputs);
        expect(result).toEqual(false);
    });
});

describe('matchCodes', function () {
    it('it should print codes(string)', function () {
        let inputs = [':::||', '||:::', '::|:|', ':|::|',':::||','::|:|'];
        let expected = '102412';
        let result = link_spec.matchCodes(inputs);
        expect(result).toEqual(expected);
    });
});


describe('getCheckDigit', function () {
    it('it should print checkdigit', function () {
        let inputs = '102412';
        let result = link_spec.getCheckDigit(inputs);
        expect(result).toEqual(2);
    });
});

describe('checkDigit', function () {
    it('it should print checkdigit true', function () {
        let inputs = '102412';
        let result = link_spec.checkDigit(inputs,2);
        expect(result).toEqual(true);
    });
});

describe('checkDigit', function () {
    it('it should print checkdigit false', function () {
        let inputs = '102415';
        let result = link_spec.checkDigit(inputs,5);
        expect(result).toEqual(false);
    });
});


describe('getCodes', function () {
    it('it should print right postcode', function () {
        let inputs = '102412';
        let result = link_spec.getCodes(inputs);
        expect(result).toEqual('10241');
    });
});
describe('getCodes', function () {
    it('it should print right postcode', function () {
        let inputs = '1023456789';
        let result = link_spec.getCodes(inputs);
        expect(result).toEqual('10234-5678');
    });
});

describe('codingPostcodes', function () {
    it('it should change barcodes to postcodes',function () {
        let inputs = '| :::||  ||:::  ::|:|  :|::|  :::||  ::|:| |';
        let expected = '10241';
        let result = link_spec.codingPostcodes(inputs);
        expect(result).toEqual(expected);
    });
});
