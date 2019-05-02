export function _bind(...methods) {
  methods.forEach(method => { this[method] = this[method].bind(this); });
}
