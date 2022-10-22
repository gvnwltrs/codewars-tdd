const _8thkyu = require("../js/8thkyu"); 
const chai = require("chai");
const assert = chai.assert; 
chai.config.truncateThreshold=0; 

describe("smash", ()=> {
    
    it ("Should return empty string for empty array.", () => {
        assert.strictEqual(_8thkyu.smash([]), ""); 
    }); 

    it ("One word should return the word.", () => {
        assert.strictEqual(_8thkyu.smash(["hello"]), "hello");
    });

    it ("Should add space between words and return a single string.", () => {
        assert.strictEqual(_8thkyu.smash(["hello", "world"]), "hello world"); 
    })

}); 