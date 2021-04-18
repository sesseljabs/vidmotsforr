import { Group, MathUtils } from 'https://unpkg.com/three@0.117.0/build/three.module.js';
import {
    AnimationClip,
    NumberKeyframeTrack,
    VectorKeyframeTrack,
    AnimationMixer,
    LoopOnce,
  } from 'https://unpkg.com/three@0.117.0/build/three.module.js';
/*~
##################################
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lestu kommentið hérna fyrir neðan

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
##################################
*/
import { GLTFLoader } from '/vendor/three/examples/jsm/loaders/GLTFLoader.js';

import { createMeshes } from './meshes.js';
function setupModel(data) {
  const model = data.scene.children[0];

  return model;
}
const wheelSpeed = MathUtils.degToRad(24);
/*  back,
seat,
leftbigwheel,
rightbigwheel,
leftsmallwheel,
rightsmallwheel,
lefthandle,
righthandle, */
class Wheelchair extends Group {
  constructor() {
    super();
    
    this.meshes = createMeshes();
    
    this.add(
      this.meshes.back,
      this.meshes.seat,
      this.meshes.leftbigwheel,
      this.meshes.rightbigwheel,
      this.meshes.leftsmallwheel,
      this.meshes.rightsmallwheel,
      this.meshes.lefthandle,
      this.meshes.righthandle,
      );
      
      
      const mixer = new AnimationMixer(this.meshes.leftsmallwheel);
      const action = mixer.clipAction(this.meshes.movewheel1);
    const mixer2 = new AnimationMixer(this.meshes.rightsmallwheel);
    const action2 = mixer2.clipAction(this.meshes.movewheel2);

    const mixer3 = new AnimationMixer(this.meshes.leftbigwheel);
    const mixer4 = new AnimationMixer(this.meshes.rightbigwheel);
    const action3 = mixer3.clipAction(this.meshes.big1);
    const action4 = mixer4.clipAction(this.meshes.big2);

    const mixer5 = new AnimationMixer(this.meshes.leftsmallwheel);
    const act = mixer5.clipAction(this.meshes.smol1);
    
    //this.meshes.leftsmallwheel.tick = (delta) => mixer.update(delta);
    this.tick = (delta) => {mixer2.update(delta);
    mixer.update(delta); mixer3.update(delta);mixer4.update(delta); mixer5.update(delta);};
    const forward = 0;

/* **********************

ég finn ekki leið til að geta bæði notað orbit controls og event listener
á sama tíma án þess að slökkva á orbit controls á meðan

ef þú vilt sjá animation farðu inní world og breyttu controlsOn í false
eftir það geturðu haldið inni músinni og þá á annað hjólið að hreyfast
eins og það sé ónýtt

************************* */

    document.addEventListener('mousedown', () => {
        console.log("piss");
        act.stop();
        action.play();
      }, false);
      act.play();
      action2.play();
      action3.play();
      action4.play();
      document.addEventListener('mouseup', () => {
        console.log("piss");
        action.stop();
        act.play();
      }, false);
  }

  tick(delta) {
    /*this.mixer.update(delta);
    this.mixer2.update(delta);*/
    if (this.forward == 1){
      this.position.x += 1;
    }
    this.meshes.leftbigwheel.rotation.x += wheelSpeed * delta*2;
    this.meshes.rightbigwheel.rotation.x += wheelSpeed * delta*2;
    this.meshes.leftsmallwheel.rotation.x += wheelSpeed * delta*2;
    this.meshes.rightsmallwheel.rotation.x += wheelSpeed * delta*2;
    
  }
}

export { Wheelchair };
