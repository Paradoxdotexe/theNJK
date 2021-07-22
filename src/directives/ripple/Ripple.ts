function mount(parent: HTMLElement) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.addEventListener('animationend', onAnimationEnd);
  parent.appendChild(ripple);
  parent.addEventListener('mousedown', onMouseDown);
}

function unmount(parent: HTMLElement) {
  const ripple = getInk(parent);
  if (ripple) {
    parent.removeEventListener('mousedown', onMouseDown);
    ripple.removeEventListener('animationend', onAnimationEnd);
    ripple.remove();
  }
}

function onMouseDown(event: MouseEvent) {
  const ripple = getInk(event.currentTarget as HTMLElement) as HTMLElement;
  if (ripple && ripple.parentElement && getComputedStyle(ripple, null).display !== 'none') {
    const size = Math.max(ripple.parentElement.clientWidth, ripple.parentElement.clientHeight);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.classList.remove('ripple-active');
    ripple.style.top = event.offsetY - size / 2 + 'px';
    ripple.style.left = event.offsetX - size / 2 + 'px';
    ripple.classList.add('ripple-active');
  }
}

function onAnimationEnd(event: Event) {
  (event.currentTarget as HTMLElement).classList.remove('ripple-active');
}

function getInk(parent: HTMLElement) {
  for (let i = 0; i < parent.children.length; i++) {
    // typeof el.children[i].className can be SVGAnimatedString
    if (typeof parent.children[i].className === 'string' && parent.children[i].className.indexOf('ripple') !== -1) {
      return parent.children[i];
    }
  }
  return null;
}

const Ripple = {
  mounted(parent: HTMLElement) {
    mount(parent);
  },
  unmounted(parent: HTMLElement) {
    unmount(parent);
  }
};

export default Ripple;
