class HtmlElement {
  constructor(opts) {
    let options = {
      selector: opts.selector,
    };
    this._selector = options.selector;
  }
  get selector() {
    return this._selector;
  }
}

export default HtmlElement;
