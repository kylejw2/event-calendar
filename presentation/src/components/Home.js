import React, { useRef, useEffect } from 'react';
import Verify from './verify';
import { setItem } from '../config/session';

const Home = (props) => {

  const handleSuccessfulAuth = (token) => {
    setItem('auth', token);
    props.history.push('/calendar');
  }

  if (props.token) {
    console.log(props.token);
      handleSuccessfulAuth(props.token);
  }

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Multiply canvas height and width by 2 to support HD retina screen density on powerful computers
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const c = canvas.getContext('2d');
    // necessary to scale because of HD retina screens
    // c.scale(2,2);
    

    class Circle {
      constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
      }
      draw(objects) {
        c.beginPath();
        c.arc(this.x , this.y += this.velocity, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        if (this.y - 5 > canvas.height) {this.velocity = -this.velocity}
        if (this.y < 0) {this.velocity = -this.velocity}

        for (let i = 0; i < objects.length; i++) {
          if ((this.x - objects[i].x < 25 || objects[i].x - this.x < 25) && (this.y - objects[i].y < 25 || objects[i].y - this.y < 25)) {
            c.beginPath();
            c.strokeStyle = 'blue';
            c.moveTo(this.x, this.y);
            c.lineTo(objects[i].x, objects[i].y);
            c.stroke();
          } 
        }
      }
      update() {
        this.draw();
      }
    }
    let colors = ['#2E86AB', '#A23B72', '#F18F01', '#C73E1D', '#3B1F2B']
    let objects = [];
    const init = () => {
      for (let i = 0; i < 10; i++) {
        const randX = Math.random() * canvas.width;
        const randY = Math.random() * canvas.height;
        const randRadius = (Math.random() * 4) + 4;
        const randCol = colors[i % colors.length];
        const randVelocity = (Math.random() - 0.25) * 0.5;
        objects.push(new Circle(randX, randY, randRadius, 'white', randVelocity))
      }
    }
    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0,0, canvas.width, canvas.height);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      c.fillStyle = 'black';
      c.fillRect(0,0, canvas.width, canvas.height);
      objects.forEach(circle => circle.draw(objects))
    }

    init();
    animate();

    contextRef.current = c;
  }, [])

  return (
    <div style={{position: "relative", margin: '0 auto'}}>
      <canvas 
        style={{position: "absolute"}}
        ref={canvasRef}
      />
      <Verify handleSuccessfulAuth={handleSuccessfulAuth}/>
    </div>
    
  );
}

export default Home;
