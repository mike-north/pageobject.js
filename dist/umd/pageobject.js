(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('html-element')) :
  typeof define === 'function' && define.amd ? define(['html-element'], factory) :
  global.pageobject = factory(global.HtmlElement)
}(this, function (HtmlElement) { 'use strict';

  'use strict';

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var Button = (function (_HtmlElement) {
    function Button() {
      _classCallCheck(this, Button);

      if (_HtmlElement != null) {
        _HtmlElement.apply(this, arguments);
      }
    }

    _inherits(Button, _HtmlElement);

    return Button;
  })(HtmlElement);

  var HTMLElement = Button;

  /*jshint unused: false*/
  'use strict';

  var pageobject = {};

  return pageobject;

}));