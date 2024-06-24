import React, { FC } from 'react';
import Svg, {Path} from 'react-native-svg';

interface ISvg {
	style?: object;
}

const BellSvg: FC<ISvg> = ({ style }) => {
	return (
		<Svg style={style} viewBox="0 0 18 20" fill="none">
		<Path d="M14 6.66699C14 3.90557 11.7614 1.66699 9 1.66699C6.23858 1.66699 4 3.90557 4 6.66699C4 12.5003 1.5 14.167 1.5 14.167H16.5C16.5 14.167 14 12.5003 14 6.66699" stroke="#8293AA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<Path d="M10.4419 17.5005C10.1438 18.0145 9.59448 18.3309 9.00026 18.3309C8.40604 18.3309 7.85676 18.0145 7.55859 17.5005" stroke="#8293AA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</Svg>

	);
};


export default BellSvg