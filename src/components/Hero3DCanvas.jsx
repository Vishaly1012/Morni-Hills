import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas({ mousePos }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (e) {
      console.warn('WebGL not supported for 3D hero canvas fallback to CSS', e);
      return;
    }

    // 1. Floating Atmospheric Mist / Particles
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      scales[i] = Math.random() * 2 + 1;
      speeds[i] = Math.random() * 0.02 + 0.005;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Particle Material with Soft Amber & Emerald glowing dust
    const canvasTexture = document.createElement('canvas');
    canvasTexture.width = 32;
    canvasTexture.height = 32;
    const ctx = canvasTexture.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(216, 168, 91, 0.9)');
    grad.addColorStop(0.4, 'rgba(143, 185, 168, 0.4)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvasTexture);

    const material = new THREE.PointsMaterial({
      size: 1.2,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.65,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 2. Subtle 3D Geometric Depth Layer (Shivalik Mountain Grid Contour)
    const contourGeo = new THREE.PlaneGeometry(80, 40, 32, 16);
    const posArr = contourGeo.attributes.position.array;
    for (let i = 0; i < posArr.length; i += 3) {
      const x = posArr[i];
      const y = posArr[i + 1];
      posArr[i + 2] = Math.sin(x * 0.1) * Math.cos(y * 0.15) * 2.5;
    }
    contourGeo.computeVertexNormals();

    const contourMat = new THREE.MeshBasicMaterial({
      color: 0x8fb9a8,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });

    const contourMesh = new THREE.Mesh(contourGeo, contourMat);
    contourMesh.position.set(0, -10, -5);
    contourMesh.rotation.x = -Math.PI / 3;
    scene.add(contourMesh);

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const width = canvas.parentElement?.clientWidth || window.innerWidth;
      const height = canvas.parentElement?.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const targetRotation = { x: 0, y: 0 };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax interpolation
      if (mousePos) {
        targetRotation.x = (mousePos.y - 0.5) * 0.3;
        targetRotation.y = (mousePos.x - 0.5) * 0.4;
      }

      scene.rotation.x += (targetRotation.x - scene.rotation.x) * 0.05;
      scene.rotation.y += (targetRotation.y - scene.rotation.y) * 0.05;

      // Particle floating drift
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += speeds[i] * Math.sin(elapsedTime + i);
        positions[i * 3] += Math.cos(elapsedTime * 0.5 + i) * 0.01;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Gentle mountain wireframe breathing
      contourMesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      contourGeo.dispose();
      contourMat.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}
