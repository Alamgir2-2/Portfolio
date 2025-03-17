import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Background = () => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [velocityMultiplier] = useState(0.05); // Velocity Multiplier to slow down the particles

  // Function to generate random particles
  const generateParticles = () => {
    const newParticles = Array.from({ length: 50 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100, // Random X position in percentage
      y: Math.random() * 100, // Random Y position in percentage
      size: Math.random() * 3 + 1, // Random size between 1px and 4px
      velocityX: Math.random() * 0.5 - 0.25, // Random velocity X
      velocityY: Math.random() * 0.5 - 0.25, // Random velocity Y
    }));
    setParticles(newParticles);
  };

  // Mouse move listener to track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Updating particle positions based on velocity and mouse interaction
  useEffect(() => {
    generateParticles(); // Initially generate particles

    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Calculate the distance between the particle and mouse
          const distX = particle.x - mousePosition.x;
          const distY = particle.y - mousePosition.y;
          const distance = Math.sqrt(distX * distX + distY * distY);
          const repulsionFactor = distance < 10 ? 0.05 : 0;

          // Linear Interpolation to slow down the movement
          const velocityX = particle.velocityX + (mousePosition.x - particle.x) * repulsionFactor * velocityMultiplier;
          const velocityY = particle.velocityY + (mousePosition.y - particle.y) * repulsionFactor * velocityMultiplier;

          // Update particle position with slower speed
          return {
            ...particle,
            x: particle.x + velocityX,
            y: particle.y + velocityY,
            velocityX,
            velocityY,
          };
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [mousePosition]);

  // Draw lines between close particles
  const drawLines = () => {
    return particles.map((particle1, index1) => {
      return particles.map((particle2, index2) => {
        if (index1 !== index2) {
          const distX = particle1.x - particle2.x;
          const distY = particle1.y - particle2.y;
          const distance = Math.sqrt(distX * distX + distY * distY);

          // If particles are close, draw a line
          if (distance < 30) {
            return (
              <motion.line
                key={`${particle1.id}-${particle2.id}`}
                x1={`${particle1.x}%`}
                y1={`${particle1.y}%`}
                x2={`${particle2.x}%`}
                y2={`${particle2.y}%`}
                stroke="#4F46E5"
                strokeWidth="0.5"
                strokeOpacity={1 - distance / 30}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            );
          }
        }
        return null;
      });
    });
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Render particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: "#4F46E5",
            borderRadius: "50%",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Render lines between particles */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {drawLines()}
      </svg>
    </div>
  );
};

export default Background;
