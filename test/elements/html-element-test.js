import assert from 'assert';
import HTMLElement from '../../src/elements/std/html-element';


describe('elements | std | html-element', function() {
  describe('#selector', function() {
    it('should return the selector', function() {
      let e = new HTMLElement({ selector: '.my-element' });
      assert.equal(e.selector, '.my-element');
    });

    it('should not allow the selector to be altered', function() {
      let e = new HTMLElement({ selector: '.my-element' });
      assert.equal(e.selector, '.my-element');
      assert.throws(function() {
        e.selector = '.another-thing';
      });
      assert.equal(e.selector, '.my-element');
    });
  });
});


