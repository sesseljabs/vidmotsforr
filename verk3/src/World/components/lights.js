import { DirectionalLight } from 'https://unpkg.com/three@0.117.0/build/three.module.js';
import { AmbientLight, HemisphereLight } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('white', 2);
  const light2 = new DirectionalLight("white", 2);
  const ambient = new AmbientLight("white", 1);

  // move the light right, up, and towards us
  light.position.set(10,5,10);
  light2.position.set(-5,1,2);
  console.log(light2.target.position);

  return [light, light2, ambient];
}

export { createLights };
