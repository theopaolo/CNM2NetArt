export function followMouse(target) {
  document.addEventListener('mousemove', function (e) {
    target.style.left = e.clientX + 'px';
    target.style.top = e.clientY + 'px';
  });
}

export const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

export function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function randomPosInVp(element) {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  element.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default { followMouse, debounce, getRandomColor, randomPosInVp, getRandomIntInclusive, getRandomArbitrary};