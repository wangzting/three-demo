import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { UtilService } from '../util.service';
import { BaseThreeClass } from '../common.class';
@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component extends BaseThreeClass implements OnInit, AfterViewInit  {
  public cube: THREE.Mesh;
  constructor(
    private utilService: UtilService
  ) {
    super();
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.scene = this.utilService.initScene();
    this.renderer = this.utilService.initRenderer();
    this.pCamera = this.utilService.initPerspectiveCamera();
    // this.cube = this.utilService.initCube(1);
    // this.scene.add(this.cube);
    for (let i = 0; i < 21; i++) {
      const geometry = new THREE.Geometry();
      const material = new THREE.LineBasicMaterial({
        color: 0xFF0000
      });
      const z = i < 10 ? (i + 1) * 50 : (-(i - 10) * 50);
      const p1 = new THREE.Vector3(-500, 0, z);
      const p2 = new THREE.Vector3(500, 0, z);
      geometry.vertices.push(p1);
      geometry.vertices.push(p2);
      const line = new THREE.Line(geometry, material);
      line.type = 'LineSegments';
      this.scene.add(line);
    }
    for (let i = 0; i < 21; i++) {
      const geometry = new THREE.Geometry();
      const material = new THREE.LineBasicMaterial({
        color: 0xFF0000
      });
      const x = i < 10 ? (i + 1) * 50 : (-(i - 10) * 50);
      const p1 = new THREE.Vector3(x, 0, -500);
      const p2 = new THREE.Vector3(x, 0, 500);
      geometry.vertices.push(p1);
      geometry.vertices.push(p2);
      const line = new THREE.Line(geometry, material);
      line.type = 'LineSegments';
      this.scene.add(line);
    }
    const light = this.utilService.initLight();
    this.scene.add(light);
    this.pCamera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      this.animate();
      this.renderer.render(this.scene, this.pCamera);
    };
    animate();
  }
  private animate() {
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
  }
}
