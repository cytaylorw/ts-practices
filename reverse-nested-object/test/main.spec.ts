import { reverse, DeepObject } from '../src/index';
import { expect } from 'chai';

describe('Reserve Test', () => {

    it('should run our tests using npm', function() {
        expect(true).to.be.ok;
    })

    it('should reverse a simple object', function() {
        let inputValue: DeepObject<String> = {
            deserve: 'I'
        };
        let outputValue: DeepObject<String> = {
            I: 'deserve'
        };

        expect(reverse(inputValue)).to.be.deep.equal(outputValue);
    })

    it('should reverse a deep object', function() {
        let inputValue: DeepObject<String> = {
            hired: {
                be: {
                    to: {
                        deserve: 'I'
                    }
                }
            }
        };
        let outputValue: DeepObject<String> = {
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