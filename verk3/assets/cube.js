import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(
    '/assets/textures/texture lol.png',
  );
  // create a "standard" material
  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}
function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = createMaterial();
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(40);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
