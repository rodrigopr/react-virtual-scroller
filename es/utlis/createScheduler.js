function createScheduler(callback, scheduler) {
  var ticking = false;

  var update = function update() {
    ticking = false;
    callback();
  };

  var requestTick = function requestTick() {
    if (!ticking) {
      scheduler(update);
    }
    ticking = true;
  };

  return requestTick;
}

export default createScheduler;