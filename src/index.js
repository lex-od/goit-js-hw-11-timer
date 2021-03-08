import './styles.css';
import CountdownTimer from './js/countdown-timer';

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('March 20, 2021'),
});

// timer1.start();
