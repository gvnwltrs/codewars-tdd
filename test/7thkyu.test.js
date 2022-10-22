const _7thkyu = require("../js/7thkyu"); 
const chai = require("chai");
const assert = chai.assert; 
chai.config.truncateThreshold=0; 

describe("jaden casing strings", () => {
    
    var testJadenPhrase = "How can mirrors be real if our eyes aren't real";
    var testExpectedJadenPhrase = "How Can Mirrors Be Real If Our Eyes Aren't Real";

    it("should take only a string", () => {
        assert.isString(_7thkyu.toJadenCase("test")) 
    });

    it("should capitalize the first letter of a single string", () => {
        assert.strictEqual(_7thkyu.toJadenCase("test"), "Test");
    });

    it("should be able to captilize the first letter of every string", () => {
        assert.strictEqual(_7thkyu.toJadenCase(testJadenPhrase), testExpectedJadenPhrase);
    });

});