import { Mesh } from 'https://unpkg.com/three@0.117.0/build/three.module.js';
import {
    AnimationClip,
    NumberKeyframeTrack,
    VectorKeyframeTrack,
    QuaternionKeyframeTrack,
    AnimationMixer,
    LoopOnce,
  } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';
/* return {
    bigwheel,
    smallwheel,
    seat,
    back,
    handle,
}; */
//.rotation.y = Math.PI / 2;


function createMeshes() {
  const geometries = createGeometries();
  const materials = createMaterials();

  const back = new Mesh(geometries.back, materials.body);
  back.position.set(0,2.3,-0.4);

  const seat = back.clone();
  seat.position.set(0, 1.6, 0.3);
  seat.rotation.x = Math.PI / 2;

  const leftbigwheel = new Mesh(geometries.bigwheel, materials.detail);
  leftbigwheel.position.set(-1, 1, 0);
  leftbigwheel.rotation.y = Math.PI / 2;
  
  const rightbigwheel = leftbigwheel.clone();
  rightbigwheel.position.set(1, 1, 0);
  rightbigwheel.rotation.z = Math.PI;

  const leftsmallwheel = new Mesh(geometries.smallwheel, materials.detail);
  leftsmallwheel.position.set(-0.6,0.4,1.2);
  leftsmallwheel.rotation.x = Math.PI /2;
  leftsmallwheel.rotation.z = Math.PI / 2;
  leftsmallwheel.rotation.y = 0;
  leftsmallwheel.scale.set(0.4,0.4,0.4);
  console.log(leftsmallwheel.quaternion)

  const rightsmallwheel = leftsmallwheel.clone();
  rightsmallwheel.position.set(0.6,0.4,1.2);

  const lefthandle = new Mesh(geometries.handle, materials.detail);
  lefthandle.rotation.x = Math.PI / 2;
  lefthandle.scale.set(0.4,0.4,0.4)
  lefthandle.position.set(-0.7,3,-0.65);

  const righthandle = lefthandle.clone();
  righthandle.position.set(0.7,3,-0.65);

  const position = new VectorKeyframeTrack(
    '.position',
    [0, 3, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  );
  const rotate = new QuaternionKeyframeTrack(
    '.quaternion',
    [0, 0.5, 1.5, 2],[0.5,0.5,-0.5,0.5, 0.6123724356957945, 0.3535533905932737, -0.35355339059327373, 0.6123724356957946,0.3535533905932737,0.6123724356957946,-0.6123724356957946,0.3535533905932737,0.5,0.5,-0.5,0.5,]
  );
  const roll = new QuaternionKeyframeTrack (
    ".quaternion",
    [0,1,2],
    [0.5,0.5,-0.5,0.5, 0.5,0.5,0.5,-0.5, -0.5,-0.5,0.5,-0.5]
  )
  const rollbig = new QuaternionKeyframeTrack (
    ".quaternion",
    [0,2],
    [0, 0.7071067811865475,0, 0.7071067811865475, 0.7071067811865475,0,0.7071067811865475,0,]// -0.5,-0.5,0.5,-0.5]
  )
  //0.7071067811865475
  const movewheel1 = new AnimationClip('movewheel1', -1, [
    roll,
    rotate,
  ]);
  const movewheel2 = new AnimationClip('movewheel2', -1, [
    roll,
    
  ]);
  const smol1 = new AnimationClip("smol1", -1, [roll]);
  console.log(rightbigwheel.quaternion);
  const big1 = new AnimationClip("big1", -1, [rollbig]);
  const big2 = new AnimationClip("big2", -1, [rollbig]);

  return {
    back,
    seat,
    leftbigwheel,
    rightbigwheel,
    leftsmallwheel,
    rightsmallwheel,
    lefthandle,
    righthandle,
    movewheel1,
    movewheel2,
    big1,
    big2,
    smol1,
  };
}

export { createMeshes };
