let parent: HTMLElement;

function mount() {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = Math.max(parent.clientWidth, parent.clientHeight) + 'px';
  ripple.addEventListener('animationend', onAnimationEnd);

  parent.appendChild(ripple);
  parent.addEventListener('mousedown', onMouseDown);
}

function unmount() {
  const ripple = getInk(parent);
  if (ripple) {
    parent.removeEventListener('mousedown', onMouseDown);
    ripple.removeEventListener('animationend', onAnimationEnd);
    ripple.remove();
  }
}

function onMouseDown(event: MouseEvent) {
  const ripple = getInk(event.currentTarget as HTMLElement) as HTMLElement;
  if (ripple && getComputedStyle(ripple, null).display !== 'none') {
    ripple.classList.remove('ripple-active');
    ripple.style.top = event.offsetY - ripple.clientHeight / 2 + 'px';
    ripple.style.left = event.offsetX - ripple.clientHeight / 2 + 'px';
    ripple.classList.add('ripple-active');
  }
}

function onAnimationEnd(event: Event) {
  (event.currentTarget as HTMLElement).classList.remove('ripple-active');
}

function getInk(el: HTMLElement) {
  for (let i = 0; i < el.children.length; i++) {
    if (el.children[i].className.indexOf('ripple') !== -1) {
      return el.children[i];
    }
  }
  return null;
}

const Ripple = {
  mounted(el: HTMLElement) {
    parent = el;
    mount();
  },
  unmounted() {
    unmount();
  }
};

export default Ripple;
