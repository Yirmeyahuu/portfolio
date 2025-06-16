import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { Particles } from "react-tsparticles";

const ContactParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="contact-particles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["grab", "connect", "trail"],
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.5,
                color: "#facc15",
              },
            },
            connect: {
              distance: 180,
              radius: 100,
              links: {
                opacity: 0.3,
              },
            },
            trail: {
              delay: 0.1,
              quantity: 3,
              particles: {
                color: {
                  value: "#facc15",
                },
                size: {
                  value: { min: 1, max: 2 },
                },
                opacity: {
                  value: 0.2,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  outModes: "out",
                },
              },
            },
          },
        },
        particles: {
          color: {
            value: "#facc15",
          },
          links: {
            color: "#facc15",
            distance: 180,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1.2,
            straight: false,
            attract: {
              enable: true,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 0.3,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ContactParticles;