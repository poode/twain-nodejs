const assert = require("assert");
const twainh = require('../build/Release/twainh.node').constants;
const twainhJS = require("../lib/twainh");

describe("Validate Type Definitions", function () {
  describe("Types", function () {
    describe("Sizes", function () {
      let types = Object.getOwnPropertyNames(twainh);
      types.forEach(type => {
        it("#" + type, function () {
          assert.strictEqual(
            twainhJS[type].size,
            twainh[type].size,
            "Expected sizes to be equal:"
          );
        });
      });
    });
  });
});
