import { reverse  } from '../src/index';
import { expect } from 'chai';

describe('Reserve Test', () => {

    it('should run our tests using npm', function() {
        expect(true).to.be.ok;
    })

    it('should reverse a simple object', function() {
        let inputValue = {
            deserve: 'I'
        };
        let outputValue = {
            I: 'deserve'
        };

        expect(reverse(inputValue)).to.be.deep.equal(outputValue);
    })

    it('should reverse a deep object', function() {
        let inputValue = {
            hired: {
                be: {
                    to: {
                        deserve: 'I'
                    }
                }
            }
        };
        let outputValue = {
            I: {
              deserve: {
                to: {
                   be: 'hired'
                }
              }
            }
        };

        expect(reverse(inputValue)).to.be.deep.equal(outputValue);
    })
})