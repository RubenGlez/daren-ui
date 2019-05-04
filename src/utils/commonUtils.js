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
