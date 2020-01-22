import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { UtilService } from '../util.service';
import { BaseThreeClass } from '../common.class';
@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component extends BaseThreeClass implements OnInit, AfterViewInit  {
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
    const geometry = new THREE.Geometry();
    const material = new THREE.LineBasicMaterial({
      color: 0xFF0000
    });
    const color1 = new THREE.Color(0x444444);
    const color2 = new THREE.Color(0xFF0000);

    const p1 = new THREE.Vector3(-100, 0, 100);
    const p2 = new THREE.Vector3(100, 0, -100);
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push(color1, color2);
    const line = new THREE.Line(geometry, material);
    this.scene.add(line);
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
