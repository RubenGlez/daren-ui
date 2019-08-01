export function debug(message, data) {
  const consoleStyle = 'color: limegreen; font-weight: bold;';
  return console.log('%c ' + message, data, consoleStyle);
}


export function calculatePosition(element) {
  const windowRect = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const elementRect = element.getBoundingClientRect();

  return {
    top: elementRect.bottom > windowRect.height ? true : false,
    right: elementRect.right > windowRect.width ? true : false,
  };
}


export function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
