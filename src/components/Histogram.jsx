import React, { useMemo, useState } from 'react';

// Linear interpolation
function interpolate(start,end,steps) {
  const result = [];
  for (let i = 0; i < steps; i++) {
    result.push(start + (end - start) * (i / (steps - 1)));
  }
  return result;
}

// Interpolate colors for gradient effect
function interpolateColor(color1, color2, factor) {
  const result = color1.slice(4, -1).split(',').map((num, idx) => {
    return Math.round(parseInt(num) + factor * (parseInt(color2.slice(4, -1).split(',')[idx]) - parseInt(num)));
  });
  return `rgb(${result.join(',')})`;
}

// Moving average smoothing
function movingAverage(data,windowSize) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const start = Math.max(0, i - windowSize + 1);
    const end = i + 1;
    const window = data.slice(start, end);
    const average = window.reduce((sum, val) => sum + val, 0) / window.length;
    result.push(average);
  }
  return result;
}

export default function Histogram() {
  const [stages] = useState([
    { label: 'Personality adjustments', count: 31, color: 'rgb(59, 130, 246)' },
    { label: 'Brainstorming intstructions', count: 28, color: 'rgb(147, 197, 253)' },
    { label: 'Fourth wall breaking pairs', count: 19, color: 'rgb(59, 130, 246)' },
    { label: 'Esoteric content', count: 14, color: 'rgb(59, 130, 246)' },
    { label: 'Jokes and memes', count: 8, color: 'rgb(59, 130, 246)' },
  ]);
  
  const interpolatedData = useMemo(() => {
    const result = [];
    const stepsPerStage = 30;
  
    for (let i = 0; i < stages.length - 1; i++) {
      const current = stages[i];
      const next = stages[i + 1];
      const interpValues = interpolate(current.count, next.count, stepsPerStage);
  
      interpValues.forEach((value, index) => {
        const colorFactor = index / stepsPerStage;
        result.push({
          value,
          color: interpolateColor(current.color, next.color, colorFactor),
        });
      });
    }
  
    // Add the last stage
    const lastStage = stages[stages.length - 1];
    for (let i = 0; i < stepsPerStage; i++) {
      result.push({ value: lastStage.count, color: lastStage.color });
    }
  
    // Moving average smoothing
    const windowSize = 20; // control smoothness
    const smoothedValues = movingAverage(result.map(d => d.value), windowSize);
    
    return result.map((d, i) => ({
      ...d,
      value: smoothedValues[i]
    }));
  }, [stages]);

  const maxValue = Math.max(...interpolatedData.map(d => d.value));
  
  const ProgressBar = ({ value, maxValue, color, isLeft }) => {
  const widthPercentage = (value / maxValue) * 100;

  return (
    <div className={`h-1 w-full ${isLeft ? 'flex justify-end' : ''}`}>
      <div
        className={`h-full ${isLeft ? 'rounded-l-full' : 'rounded-r-full'}`}
        style={{ width: `${widthPercentage}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className='flex flex-col items-center justify-center w-full max-w-7xl'>
          <div className='flex flex-row w-full mt-10 p-4'>
            {/* Left Distribution */}
            <div className='w-1/4 space-y-0.5'>
              {interpolatedData.map((data, index) => (
                <ProgressBar
                  key={index}
                  value={data.value}
                  maxValue={maxValue}
                  color={data.color}
                  isLeft={true}
                />
              ))}
            </div>

            {/* Central Column */}
            <div className='w-4/6 lg:w-1/2 flex flex-col justify-between p-4'>
              {stages.map((stage, index) => (
                <div 
                key={index} 
                className='flex flex-col items-center justify-center text-center text-base-content'
                >
                  <p className='text-2xl ubuntu-bold mb-2'>{stage.label}</p>

                  <p className='text-4xl lg:text-5xl ubuntu-bold'>
                    {stage.count}
                    <span className='text-lg lg:text-2xl font-normal ml-1'>%</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Right Distribution */}
            <div className='w-1/4 space-y-0.5'>
              {interpolatedData.map((data, index) => (
                <ProgressBar
                  key={index}
                  value={data.value}
                  maxValue={maxValue}
                  color={data.color}
                  isLeft={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}