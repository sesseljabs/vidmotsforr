import { BoxBufferGeometry, CylinderBufferGeometry, TorusBufferGeometry } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createGeometries() {
  const bigwheel = new TorusBufferGeometry(1, 0.1, 8, 16);

  const smallwheel = new CylinderBufferGeometry(1,1,0.5,16);

  // we can reuse a single cylinder geometry for all 4 wheels

  // different values for the top and bottom radius creates a cone shape
  const back = new BoxBufferGeometry(1.6,1.6,0.2);

  const handle = new CylinderBufferGeometry(0.2,0.2,1.5,16);

  return {
    bigwheel,
    smallwheel,
    back,
    handle,
  };
}

export { createGeometries };
