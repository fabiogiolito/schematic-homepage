import { animate, inView } from 'motion';

export function scrollReveal(node, options = {}) {
  const { y = 30, delay = 0, duration = 0.6 } = options;

  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;

  const stop = inView(node, () => {
    animate(
      node,
      { opacity: [0, 1], transform: [`translateY(${y}px)`, 'translateY(0px)'] },
      { duration, delay, easing: "linear(0, 0.021 2.1%, 0.081 4.5%, 0.468 15.2%, 0.648 21.3%, 0.722 24.5%, 0.783 27.8%, 0.835 31.3%, 0.877 35%, 0.914 39.3%, 0.942 44%, 0.979 55.5%, 0.995 71.3%, 1)" }
    );
  }, { margin: '0px 0px -100px 0px' });

  return { destroy: stop };
}
