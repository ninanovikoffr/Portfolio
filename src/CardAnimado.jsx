import React, { useRef } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'

const asset = (file) => `/assets/${file}`

const calcX = (y, rect) => -(y - rect.top - rect.height / 2) / 40
const calcY = (x, rect) => (x - rect.left - rect.width / 2) / 40

export default function CardAnimado({ project }) {
  const domTarget = useRef(null)

  const [{ rotateX, rotateY, scale, shineX, shineY, opacity }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    shineX: 50,
    shineY: 50,
    opacity: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) => {
        if (!dragging && domTarget.current) {
          const rect = domTarget.current.getBoundingClientRect()
          
          const mouseX = ((px - rect.left) / rect.width) * 100
          const mouseY = ((py - rect.top) / rect.height) * 100

          api({
            rotateX: calcX(py, rect),
            rotateY: calcY(px, rect),
            scale: 1.02, 
            shineX: mouseX,
            shineY: mouseY,
            opacity: 1,
          })
        }
      },
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1, opacity: 0 }),
    },
    { domTarget, eventOptions: { passive: false } }
  )

  return (
    <animated.div
      ref={domTarget}
      className="project-card"
      style={{
        transform: 'perspective(600px)',
        scale,
        rotateX,
        rotateY,
        position: 'relative',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        touchAction: 'none', 
      }}>
      
      <img src={asset(project.image)} alt={`Projeto ${project.title}`} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      {/* 1. Camada da luz base (feixe de luz linear suave) */}
      <animated.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 9,
          opacity: to([opacity], (o) => o * 0.7),
          // Feixe em linha acompanhando o mouse
          background: 'linear-gradient(105deg, transparent 35%, rgba(138, 43, 226, 0.08) 45%, rgba(0, 255, 255, 0.05) 55%, transparent 65%)',
          backgroundSize: '250% 250%',
          backgroundPosition: to([shineX, shineY], (x, y) => `${100 - x}% ${100 - y}%`),
          mixBlendMode: 'screen',
        }}
      />
      
      {/* 2. Camada do Glitter Redondo (Suavizado) */}
      <animated.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 10,
          opacity: to([opacity], (o) => o * 0.9), 
          // Partículas com intensidade bem mais baixa (0.2 a 0.4 de opacidade)
          background: `
            radial-gradient(circle at 15% 15%, rgba(0, 255, 255, 0.3) 1px, transparent 1.5px),
            radial-gradient(circle at 45% 65%, rgba(170, 0, 255, 0.4) 1.5px, transparent 2px),
            radial-gradient(circle at 85% 35%, rgba(200, 100, 255, 0.2) 1px, transparent 1.5px),
            radial-gradient(circle at 65% 85%, rgba(0, 190, 255, 0.3) 1.5px, transparent 2px)
          `,
          backgroundSize: '12px 12px, 18px 18px, 15px 15px, 22px 22px',
          mixBlendMode: 'color-dodge',
          
          // A máscara agora é uma faixa (linear-gradient) em vez de um círculo
          // Revela os brilhos a 100% (black) no meio da faixa, e suaviza (transparent) nas pontas
          WebkitMaskImage: 'linear-gradient(105deg, transparent 35%, black 50%, transparent 65%)',
          WebkitMaskSize: '250% 250%',
          WebkitMaskPosition: to([shineX, shineY], (x, y) => `${100 - x}% ${100 - y}%`),
          maskImage: 'linear-gradient(105deg, transparent 35%, black 50%, transparent 65%)',
          maskSize: '250% 250%',
          maskPosition: to([shineX, shineY], (x, y) => `${100 - x}% ${100 - y}%`),
        }}
      />
    </animated.div>
  )
}