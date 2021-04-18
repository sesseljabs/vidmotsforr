import { MeshStandardMaterial } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createMaterials() {
  const body = new MeshStandardMaterial({
    color: '#b22222',
    flatShading: true,
  });

  const detail = new MeshStandardMaterial({
    color: '#2f4f4f',
    flatShading: true,
  });

  return { body, detail };
}

export { createMaterials };
