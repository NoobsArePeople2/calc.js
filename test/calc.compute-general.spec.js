'use strict';

let expect = require('chai').expect;
let compute   = require('../src/calc').compute;

describe('compute.js general', () => {

    context('junk values', () => {

       it('should evaluate expression "NaN" to be NaN', () => {
           expect(compute('NaN')).to.be.NaN;
       });

       it('should evaluate NaN to be NaN', () => {
           expect(compute(NaN)).to.be.NaN;
       });

       it('should evaluate "undefined" to be NaN', () => {
           expect(compute('undefined')).to.be.NaN;
       });

       it('should evaluate undefined to be NaN', () => {
           expect(compute(undefined)).to.be.NaN;
       });

       it('should evaluate "null" to be NaN', () => {
           expect(compute('null')).to.be.NaN;
       });

       it('should evaluate null to be NaN', () => {
           expect(compute(null)).to.be.NaN;
       });

       it('should evaluate {} to be NaN', () => {
           expect(compute({})).to.be.NaN;
       });

       it('should evaluate [] to be NaN', () => {
           expect(compute([])).to.be.NaN;
       });

       it('should evaluate +Infinity to be NaN', () => {
           expect(compute(+Infinity)).to.be.NaN;
       });

       it('should evaluate -Infinity to be NaN', () => {
           expect(compute(-Infinity)).to.be.NaN;
       });
    });
});