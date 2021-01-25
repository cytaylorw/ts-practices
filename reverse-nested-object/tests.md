# TOC
   - [Reserve Test](#reserve-test)
<a name=""></a>
 
<a name="reserve-test"></a>
# Reserve Test
should run our tests using npm.

```js
chai_1.expect(true).to.be.ok;
```

should reverse a simple object.

```js
var inputValue = {
    deserve: 'I'
};
var outputValue = {
    I: 'deserve'
};
chai_1.expect(index_1.reverse(inputValue)).to.be.deep.equal(outputValue);
```

should reverse a deep object.

```js
var inputValue = {
    hired: {
        be: {
            to: {
                deserve: 'I'
            }
        }
    }
};
var outputValue = {
    I: {
        deserve: {
            to: {
                be: 'hired'
            }
        }
    }
};
chai_1.expect(index_1.reverse(inputValue)).to.be.deep.equal(outputValue);
```

