import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container } from '@tsparticles/engine';
import { loadBasic } from '@tsparticles/basic';

const AnimationBackground = ({ className }: any) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  const options: any = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: '#f8f6f4',
        },
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: '#ff0000' },
        shape: { type: 'circle' },
        size: {
          value: { min: 1, max: 3 },
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          outModes: { default: 'out' },
        },
        links: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options}
        className={className || 'w-full h-full'}
      />
    );
  }

  return null;
};

export default AnimationBackground;
