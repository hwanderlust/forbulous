import {
  traverseImagesWithinModal
} from './modal';

const touchState = {
  left: 0,
  originalOffset: 0,
  velocity: 0,
  timeOfLastDragEvent: 0,
  touchStartX: 0,
  prevTouchX: 0,
  beingTouched: false,
  intervalId: null,
  imageId: null,
}

export const handleTouchStart = e => {
  const id = modal.dataset.id;

  if (touchState.imageId !== id) {
    touchState.imageId = +id
  }

  handleSetup(e.targetTouches[0].clientX);
}

const handleSetup = clientX => {
  if (touchState.intervalId !== null) {
    window.clearInterval(touchState.intervalId);
  }

  touchState.originalOffset = touchState.left;
  touchState.velocity = 0;
  touchState.timeOfLastDragEvent = Date.now();
  touchState.touchStartX = clientX;
  touchState.beingTouched = true;
  touchState.intervalId = null;
}

export const handleTouchMove = e => {
  const clientX = e.targetTouches[0].clientX;

  if (touchState.beingTouched) {
    const currTime = Date.now();
    const elapsed = currTime - touchState.timeOfLastDragEvent;
    const velocity = 20 * (clientX - touchState.prevTouchX) / elapsed;
    let deltaX = clientX - touchState.touchStartX + touchState.originalOffset;

    touchState.left = deltaX;
    touchState.velocity = velocity;
    touchState.timeOfLastDragEvent = currTime;
    touchState.prevTouchX = clientX;

    const modalImg = document.getElementById("modalImage");
    modalImg.style.position = 'relative';
    modalImg.style.left = `${touchState.left}px`;
  }
}

export const handleTouchEnd = e => {
  touchState.velocity = touchState.velocity;
  touchState.touchStartX = 0;
  touchState.beingTouched = false;
  touchState.intervalId = window.setInterval(handleMovement, 33);
}

const handleMovement = _ => {
  let {
    left,
    velocity,
    beingTouched,
    prevTouchX
  } = touchState;

  const forwardMovement = !beingTouched && prevTouchX && left < -0.01;
  const backwardMovement = !beingTouched && prevTouchX && left > 0.01;
  const threshold = 50;
  velocity += 10 * 0.033;

  if (forwardMovement) {
    left += velocity;
  }

  if (backwardMovement) {
    left -= velocity;
  }

  if (left < -threshold) {
    handleSwitch("forward")
  }

  if (left > threshold) {
    handleSwitch("backward")
  }

  window.clearInterval(touchState.intervalId);
}

const handleSwitch = direction => {
  if (direction === 'forward') {
    traverseImagesWithinModal('next');
  }

  if (direction === 'backward') {
    traverseImagesWithinModal('prev');
  }

  window.clearInterval(touchState.intervalId);

  touchState.left = 0;
  touchState.velocity = 0;
  touchState.intervalId = null;
  touchState.originalOffset = 0;
  touchState.timeOfLastDragEvent = 0;
  touchState.touchStartX = 0;
  touchState.prevTouchX = 0;
}