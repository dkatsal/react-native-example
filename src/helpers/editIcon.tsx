import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: string;
  width?: number;
  height?: number;
}

const EditIcon: FC<IProps> = ({color, width, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 14" fill="none">
      <Path
        d="M7.30811 13.1213H13.616"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4619 1.55678C10.7407 1.27795 11.1189 1.12131 11.5132 1.12131C11.7085 1.12131 11.9018 1.15976 12.0822 1.23448C12.2626 1.3092 12.4265 1.41872 12.5645 1.55678C12.7026 1.69484 12.8121 1.85874 12.8868 2.03913C12.9615 2.21951 13 2.41285 13 2.6081C13 2.80335 12.9615 2.99668 12.8868 3.17707C12.8121 3.35746 12.7026 3.52136 12.5645 3.65942L3.80352 12.4204L1 13.1213L1.70088 10.3178L10.4619 1.55678Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EditIcon;
