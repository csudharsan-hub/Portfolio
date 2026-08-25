import React, { useRef, useEffect } from 'react';

export default function CanvasMagic() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Cosmic background embers
    const embers = [];
    const colors = [
      'rgba(255, 107, 26, ',
      'rgba(255, 179, 71, ',
      'rgba(212, 175, 55, ',
      'rgba(0, 229, 255, ',
    ];
    for (let i = 0; i < 45; i++) {
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.6,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.2,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: -Math.random() * 0.8 - 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseVal: Math.random() * Math.PI,
      });
    }

    // Cursor spark physics
    const sparks = [];
    const mouse = { x: -100, y: -100, active: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.5 + 0.5;
        sparks.push({
          x: mouse.x + (Math.random() - 0.5) * 8,
          y: mouse.y + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          radius: Math.random() * 2.2 + 0.8,
          alpha: 1,
          decay: Math.random() * 0.03 + 0.02,
          color: Math.random() > 0.3 ? '#ff8c38' : '#ffd700',
        });
      }
    };

    const handleClick = (e) => {
      for (let i = 0; i < 18; i++) {
        const angle = ((Math.PI * 2) / 18) * i + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 4 + 2;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 3 + 1.2,
          alpha: 1,
          decay: Math.random() * 0.025 + 0.015,
          color: i % 2 === 0 ? '#ff6b1a' : '#00e5ff',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render embers
      embers.forEach((ember) => {
        ember.pulseVal += ember.pulseSpeed;
        const currentAlpha = ember.alpha * (0.6 + 0.4 * Math.sin(ember.pulseVal));
        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${ember.baseColor}${currentAlpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ff6b1a';
        ctx.fill();

        ember.x += ember.speedX;
        ember.y += ember.speedY;

        if (ember.y < -10) ember.y = height + 10;
        if (ember.x < -10) ember.x = width + 10;
        if (ember.x > width + 10) ember.x = -10;
      });

      // Render sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.radius * spark.alpha, 0, Math.PI * 2);
        ctx.fillStyle = spark.color;
        ctx.globalAlpha = spark.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = spark.color;
        ctx.fill();
        ctx.globalAlpha = 1;

        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.alpha -= spark.decay;

        if (spark.alpha <= 0) {
          sparks.splice(i, 1);
        }
      }

      ctx.shadowBlur = 0;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ opacity: 0.85 }}
    />
  );
}
