import { Injectable } from '@angular/core';
import * as THREE from 'three';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  public initRenderer(): THREE.WebGLRenderer {
    const div = document.getElementById('container');
    const width = div.clientWidth;
    const height = div.clientHeight;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    div.appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);
    return renderer;
  }
  public initScene(): THREE.Scene {
    return new THREE.Scene();
  }
  public initPerspectiveCamera(): THREE.PerspectiveCamera {
    const div = document.getElementById('container');
    const camera = new THREE.PerspectiveCamera(45, div.clientWidth / div.clientHeight, 1, 1000);
    camera.position.x = 0;
    camera.position.y = 1000;
    camera.position.z = 0;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    return camera;
  }
  public initCube(num: number): THREE.Mesh {
    return new THREE.Mesh(this.initGeometry(num), this.initBasicMaterial());
  }
  public initGeometry(num: number): THREE.BoxGeometry {
    return new THREE.BoxGeometry(num, num, num);
  }
  public initBasicMaterial(color: any = 0x00ff00): THREE.MeshBasicMaterial {
    return new THREE.MeshBasicMaterial({
      color
    });
  }
  public initLight(): THREE.DirectionalLight {
    const light = new THREE.DirectionalLight(0xFF0000, 1.0);
    light.position.set(100, 100, 200);
    return light;
  }
}
