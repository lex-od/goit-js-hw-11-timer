export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this._targetDate = targetDate;
    this._linkRefs(selector);

    this._isActive = false;
    this._refreshUI();
  }

  start() {
    if (this._isActive) {
      return;
    }
    this._isActive = true;

    this._timerId = setInterval(() => {
      const deltaTime = this._targetDate.getTime() - Date.now();
      const timeObj = this._getTimeComponents(deltaTime);
      this._refreshUI(timeObj);
    }, 1000);
  }

  stop() {
    if (!this._isActive) {
      return;
    }
    this._isActive = false;

    clearInterval(this._timerId);
    this._refreshUI();
  }

  _refreshUI({ days = '00', hours = '00', mins = '00', secs = '00' } = {}) {
    this._daysRef.textContent = days;
    this._hoursRef.textContent = hours;
    this._minsRef.textContent = mins;
    this._secsRef.textContent = secs;
  }

  _linkRefs(selector) {
    this._timerRef = document.querySelector(selector);
    this._daysRef = this._timerRef.querySelector('[data-value="days"]');
    this._hoursRef = this._timerRef.querySelector('[data-value="hours"]');
    this._minsRef = this._timerRef.querySelector('[data-value="mins"]');
    this._secsRef = this._timerRef.querySelector('[data-value="secs"]');
  }

  _getTimeComponents(time) {
    return {
      days: this._padZero(Math.floor(time / (1000 * 60 * 60 * 24))),
      hours: this._padZero(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ),
      mins: this._padZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))),
      secs: this._padZero(Math.floor((time % (1000 * 60)) / 1000)),
    };
  }

  _padZero(val) {
    return String(val).padStart(2, '0');
  }
}
