import { Component, OnInit } from '@angular/core';
import { BaseThreeClass } from '../common.class';
import * as THREE from 'three';
import { UtilService } from '../util.service';
@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component extends BaseThreeClass implements OnInit {

  constructor(
    private utilSerivice: UtilService
  ) {
    super();
  }

  ngOnInit() {
    setTimeout(() => {
      this.scene = this.utilSerivice.initScene();
      this.pCamera = this.utilSerivice.initPerspectiveCamera();
      this.renderer = this.utilSerivice.initRenderer();

      const light = this.utilSerivice.initLight();
      this.scene.add(light);

      const geometry = new THREE.CylinderGeometry(100, 150, 400);
      const material = new THREE.MeshLambertMaterial({ color: 0xFFFF00});
      const mesh = new THREE.Mesh(geometry, material);
      // mesh.position = new THREE.Vector3(0, 0, 0);
      this.scene.add(mesh);
      const animate = () => {
        requestAnimationFrame(animate);
        this.pCamera.position.x = this.pCamera.position.x + 0.5;
        this.renderer.render(this.scene, this.pCamera);
      };
      animate();
    });
  }
}
