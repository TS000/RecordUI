import React from 'react'
import Particles from 'react-particles-js'

export default class ShinyBits extends React.Component{
  
    render(){
        return (

            <Particles 
              params={{
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                         opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    color: {
        value: '#000000',
    },
    size: {
      value: 2,
      random: false,
      anim: {
        enable: false,
        speed: 400,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#FF005F',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'left',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: window,
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 208.44356791251798,
        line_linked: {
          opacity: 1
        }
      },
      shape: {
      type: 'circle',
      stroke: {
        width: 1,
        color: '#FF8598'
      },
      polygon: {
        nb_sides: 10
      }
    },
      bubble: {
        distance: 23.976023976023978,
        size: 10,
        duration: 0.23976023976023975,
        opacity: 0.5674325674325674,
        speed: 3
      },
      repulse: {
        distance: 430.4009225197129,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true

                    
                }}
              
            />
        );
    };
 
}