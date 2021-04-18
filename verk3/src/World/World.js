import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { Wheelchair } from './components/Wheelchair/Wheelchair.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { GLTFLoader } from '/vendor/three/examples/jsm/loaders/GLTFLoader.js';

import { createControls } from './systems/controls.js';
import { GridHelper,DirectionalLightHelper } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    const controlsOn = false;
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    const controls = null;
    if(controlsOn==true){
      
      controls = createControls(camera, renderer.domElement);
    }

    const lights = createLights();
    const wheelchair = new Wheelchair();
    if (controlsOn==true){
      loop.updatables.push(controls,wheelchair);

    }
    else {
      loop.updatables.push(wheelchair);
    }
    
    const size = 10;
    const divisions = 10;

    const gridHelper = new GridHelper( size, divisions );
    const lighthelper = new DirectionalLightHelper( lights[1], 0.5 );
    /*const loader = new GLTFLoader();
      loader.load(
        // resource URL
        '/assets/man.gltf',
        // called when the resource is loaded
        function ( gltf ) {
      
          scene.add( gltf.scene );
      
          gltf.animations; // Array<THREE.AnimationClip>
          gltf.scene; // THREE.Group
          gltf.scenes; // Array<THREE.Group>
          gltf.cameras; // Array<THREE.Camera>
          gltf.asset; // Object
      
        },
        // called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);*/
    scene.add(lights[0], lights[2], gridHelper, lighthelper, wheelchair);


    const resizer = new Resizer(container, camera, renderer);

  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
