import React, { useEffect, useRef } from 'react';
import {Box} from '@chakra-ui/react';
import * as THREE from 'three';

const ThreeStage = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.2, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const lime = new THREE.Color('#d7ff38');
    const ember = new THREE.Color('#ff4f1f');
    const magenta = new THREE.Color('#f238b8');
    const ivory = new THREE.Color('#fbf7e8');

    const prism = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.48, 1),
      new THREE.MeshStandardMaterial({
        color: ivory,
        metalness: 0.34,
        roughness: 0.18,
        emissive: lime,
        emissiveIntensity: 0.08,
      })
    );
    group.add(prism);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.53, 1),
      new THREE.MeshBasicMaterial({ color: lime, wireframe: true, transparent: true, opacity: 0.42 })
    );
    group.add(wire);

    const ringA = new THREE.Mesh(
      new THREE.TorusGeometry(2.1, 0.014, 12, 160),
      new THREE.MeshBasicMaterial({ color: lime, transparent: true, opacity: 0.75 })
    );
    ringA.rotation.x = 1.18;
    group.add(ringA);

    const ringB = new THREE.Mesh(
      new THREE.TorusGeometry(2.75, 0.01, 12, 180),
      new THREE.MeshBasicMaterial({ color: ember, transparent: true, opacity: 0.5 })
    );
    ringB.rotation.x = 1.42;
    ringB.rotation.y = 0.4;
    group.add(ringB);

    const play = new THREE.Mesh(
      new THREE.ConeGeometry(0.42, 0.62, 3),
      new THREE.MeshStandardMaterial({ color: '#12100d', emissive: magenta, emissiveIntensity: 0.22, metalness: 0.2, roughness: 0.25 })
    );
    play.rotation.z = -Math.PI / 2;
    play.position.z = 1.55;
    group.add(play);

    const particles = new THREE.Group();
    for (let i = 0; i < 38; i += 1) {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(i % 3 === 0 ? 0.035 : 0.022, 10, 10),
        new THREE.MeshBasicMaterial({ color: i % 4 === 0 ? magenta : i % 2 === 0 ? lime : ember })
      );
      const angle = (i / 38) * Math.PI * 2;
      const radius = 2.55 + (i % 7) * 0.09;
      dot.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.7) * 0.72, Math.sin(angle) * radius * 0.28);
      particles.add(dot);
    }
    group.add(particles);

    const key = new THREE.PointLight('#d7ff38', 3.2, 12);
    key.position.set(2.8, 2.2, 3.5);
    scene.add(key);
    const fill = new THREE.PointLight('#ff4f1f', 1.4, 10);
    fill.position.set(-3.4, -1.2, 2.5);
    scene.add(fill);
    scene.add(new THREE.AmbientLight('#fbf7e8', 0.9));

    let frameId;
    const clock = new THREE.Clock();

    const resize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    const animate = () => {
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.22;
      group.rotation.x = Math.sin(t * 0.55) * 0.1;
      prism.rotation.y = t * 0.34;
      wire.rotation.y = -t * 0.22;
      ringA.rotation.z = t * 0.36;
      ringB.rotation.z = -t * 0.26;
      particles.rotation.y = -t * 0.12;
      particles.rotation.z = Math.sin(t * 0.45) * 0.12;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      group.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <Box
      ref={mountRef}
      minH={{base: '360px', md: '520px', xl: '620px'}}
      w="full"
      pos="relative"
      aria-label="Animated 3D video prism"
      _before={{
        content: '""',
        pos: 'absolute',
        inset: '8% 4% 4%',
        bg: 'radial-gradient(circle, rgba(215,255,56,0.14), transparent 58%)',
        filter: 'blur(24px)',
      }}
      sx={{
        canvas: {
          position: 'relative',
          zIndex: 1,
          width: '100% !important',
          height: '100% !important',
        },
      }}
    />
  );
};

export default ThreeStage;
