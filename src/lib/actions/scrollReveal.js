import { animate, inView } from 'motion';

export function scrollReveal(node, options = {}) {
  const { y = 30, delay = 0, duration = 0.6 } = options;

  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;

  const stop = inView(node, () => {
    animate(
      node,
      { opacity: [0, 1], transform: [`translateY(${y}px)`, 'translateY(0px)'] },
      { duration, delay, easing: [0.22, 1, 0.36, 1] }
    );
  }, { margin: '0px 0px -100px 0px' });

  return { destroy: stop };
}
