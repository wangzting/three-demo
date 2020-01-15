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
    this.cube = this.utilService.initCube(1);
    this.scene.add(this.cube);
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
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  }
}
