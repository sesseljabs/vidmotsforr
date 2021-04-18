import { PerspectiveCamera } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(-5, 5, 7);
  //camera.position.set(-1,3,6);
  //camera.rotation.set(-0.1,-0.3,0);
  camera.rotation.set(-0.5,-0.6,-0.3);

  return camera;
}

export { createCamera };
