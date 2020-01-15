import * as THREE from 'three';
export class BaseThreeClass {
	public renderer: THREE.WebGLRenderer;
	public scene: THREE.Scene;
	public pCamera: THREE.PerspectiveCamera;
	constructor() {}
}