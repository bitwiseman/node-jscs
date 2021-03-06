/**
 * Requires commas as last token on a line in lists.
 *
 * Type: `Boolean`
 *
 * Values: `true`
 *
 * JSHint: [`laxcomma`](http://www.jshint.com/docs/options/#laxcomma)
 *
 * #### Example
 *
 * ```js
 * "requireCommaBeforeLineBreak": true
 * ```
 *
 * ##### Valid
 *
 * ```js
 * var x = {
 *     one: 1,
 *     two: 2
 * };
 * var y = { three: 3, four: 4};
 * ```
 *
 * ##### Invalid
 *
 * ```js
 * var x = {
 *     one: 1
 *     , two: 2
 * };
 * ```
 */

var assert = require('assert');

module.exports = function() {};

module.exports.prototype = {

    configure: function(options) {
        assert(
            options === true,
            this.getOptionName() + ' option requires true value or should be removed'
        );
    },

    getOptionName: function() {
        return 'requireCommaBeforeLineBreak';
    },

    check: function(file, errors) {
        file.iterateTokensByTypeAndValue('Punctuator', ',', function(token) {
            errors.assert.sameLine({
                token: file.getPrevToken(token),
                nextToken: token,
                message: 'Commas should not be placed on new line'
            });
        });
    }

};
