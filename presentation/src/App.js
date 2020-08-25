import React, { useRef, useEffect } from 'react';

function App() {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Multiply canvas height and width by 2 to support HD retina screen density on powerful computers
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const c = canvas.getContext('2d');
    // necessary to scale because of HD retina screens
    c.scale(2,2);
    

    class Circle {
      constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
      }
      draw() {
        c.beginPath();
        c.arc(this.x += this.velocity, this.y += this.velocity, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        if (this.x > canvas.width) {this.x = -5}
        if (this.y > canvas.height) {this.y = -5}
      }
      update() {
        this.draw();
      }
    }
    let colors = ['#333333', '#643173', '#7D5BA6', '#86A59C', '#89CE94']
    let objects = [];
    const init = () => {
      for (let i = 0; i < 1000; i++) {
        const randX = Math.random() * canvas.width;
        const randY = Math.random() * canvas.height;
        const randRadius = (Math.random() * 4) + 4;
        const randCol = colors[i % colors.length];
        const randVelocity = (Math.random() + 0.25) * 0.5;
        objects.push(new Circle(randX, randY, randRadius, randCol, randVelocity))
      }
    }
    const animate = () => {
      requestAnimationFrame(animate); //there could be an error here
      c.clearRect(0,0, canvas.width, canvas.height);c.fillStyle = 'black';
      c.fillRect(0,0, canvas.width, canvas.height);
      objects.forEach(circle => circle.draw())
    }

    init();
    animate();

    contextRef.current = c;
  }, [])

  return (
    <canvas
      ref={canvasRef}
    />
  );
}

export default App;
