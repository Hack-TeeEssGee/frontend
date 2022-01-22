import Particles from "react-tsparticles";

const MyParticles = () => {

    const particlesInit = (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
    const particlesLoaded = (container) => {
    };
    
    return (
        <Particles
          id="tsparticles"
          init={particlesInit}
              loaded={particlesLoaded}
              className="particles-wrapper"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 30,
            interactivity: {
              events: {
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ccc",
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 50,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      );
}

export default MyParticles;