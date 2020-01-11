import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {
  // 场景
  private scene: THREE.Scene;
  // 相机
  private camera: THREE.PerspectiveCamera;
  // 渲染
  private renderer: THREE.Renderer;
  // 物品
  private cube: THREE.Mesh;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const div: HTMLDivElement = document.getElementById('container') as HTMLDivElement;
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(div.clientWidth, div.clientHeight);
      div.appendChild(this.renderer.domElement);

      const geometry = new THREE.BoxGeometry( 1, 1, 1 );
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
      });
      this.cube = new THREE.Mesh( geometry, material );
      this.scene.add( this.cube );

      this.camera.position.z = 5;
      const animate = () => {
        requestAnimationFrame(animate);
        this.animate();
        this.renderer.render(this.scene, this.camera);
      };
      animate();
    });
  }

  /**
   * 每次渲染时执行的操作
   *
   * @private
   * @memberof Demo1Component
   */
  private animate() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  }
}
