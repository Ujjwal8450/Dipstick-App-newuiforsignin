export function HexagonPattern() {
  const hexagons = [
    { color: '#fe0000', delay: '0s', x: '10%', y: '15%', size: 80 },
    { color: '#ffc000', delay: '0.5s', x: '85%', y: '25%', size: 60 },
    { color: '#fffc87', delay: '1s', x: '15%', y: '70%', size: 70 },
    { color: '#92d14f', delay: '1.5s', x: '80%', y: '75%', size: 90 },
    { color: '#00af50', delay: '2s', x: '50%', y: '10%', size: 50 },
    { color: '#fe0000', delay: '2.5s', x: '45%', y: '85%', size: 55 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
      {hexagons.map((hex, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: hex.x,
            top: hex.y,
            width: `${hex.size}px`,
            height: `${hex.size}px`,
            animationDelay: hex.delay,
            animationDuration: `${6 + index}s`,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50 1 95 25 95 75 50 99 5 75 5 25"
              fill={hex.color}
              className="transition-all duration-1000"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
