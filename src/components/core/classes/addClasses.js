function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === 'object') {
      Object.entries(item).forEach(([condition, classNames]) => {
        if (condition) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

export default function addClasses() {
  const swiper = this;
  const { classNames, params, rtl, $el, device, support } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses([
    'initialized',
    params.direction,
    { 'pointer-events': support.pointerEvents && !support.touch },
    { 'free-mode': params.freeMode },
    { 'autoheight': params.autoHeight },
    { 'rtl': rtl },
    { 'multirow': params.slidesPerColumn > 1 },
    { 'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column' },
    { 'android': device.android },
    { 'ios': device.ios },
    { 'css-mode': params.cssMode },
  ], params.containerModifierClass);

  $el.addClass([...classNames, ...suffixes].join(' '));
  swiper.emitContainerClasses();
}
