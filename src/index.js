import './styles.css';
import CountdownTimer from './js/countdown-timer';

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('March 20, 2021'),
});

document
  .querySelector('#controls-1 > [data-action="start"]')
  .addEventListener('click', timer1.start.bind(timer1));
document
  .querySelector('#controls-1 > [data-action="stop"]')
  .addEventListener('click', timer1.stop.bind(timer1));
