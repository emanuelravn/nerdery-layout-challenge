import React from 'react';

type Segment = {
  percent: number;  // e.g. 25
  color: string;    // e.g. "#4aa3df"
};

type CircularStorageProps = {
  size?: number;           // diameter in px
  strokeWidth?: number;    // thickness of the arcs
  segments: Segment[];     // your data
  gapPercent?: number;     // % of the circle used as gap between segments
  centerText?: string;     // e.g. "85%"
  subText?: string;        // e.g. "420.2 GB of 500 GB used"
};

export const CircularStorage: React.FC<CircularStorageProps> = ({
  size = 200,
  strokeWidth = 12,
  segments,
  gapPercent = 2,
  centerText = '85%',
  subText = '420.2 GB of 500 GB used',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const gapLength = (gapPercent / 100) * circumference;

  // we'll accumulate these as we draw each segment
  let accumulatedOffset = 0;

  return (
    <div className='circle-storage' style={{ textAlign: 'center', width: size, marginLeft: '50px', marginTop: '10px'}}>
      <svg width={size} height={size}>
        {/* Grey full circle as background */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#F5F6FC"
          strokeWidth={strokeWidth}
        />

        {/* White center “disk” */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth / 0.6}
          fill="#ffffff"
        />

        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {segments.map((seg, i) => {
            // reduce each segment by the gapLength
            const segLength = (seg.percent / 100) * circumference - gapLength;
            // dasharray: [draw this much][leave rest blank]
            const dashArray = `${segLength} ${circumference}`;
            // offset where this segment starts
            const dashOffset = accumulatedOffset + gapLength / 2;
            // advance the accumulated offset by the full percent length
            accumulatedOffset += (seg.percent / 100) * circumference;

            return (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={-dashOffset}
                strokeLinecap="round"
              />
            );
          })}
        </g>

        {/* Center Text */}
        <text
          x="52%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
          fontWeight="400"
          fill="#2e2e2e"
        >
          {centerText}
        </text>
        <text
          x="51%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14"
          fill="#888"
        >
          Used
        </text>
      </svg>

      {/* Sub-text */}
      <div style={{ marginTop: 20, color: '#858A9D', fontSize: 8 }}>
        {subText}
      </div>
    </div>
  );
};
