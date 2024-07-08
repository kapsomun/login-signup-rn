import React, { FC } from 'react';
import Svg, { G, Path, Mask, Circle } from 'react-native-svg';

interface ISvg {
	style?: object;
	IsNotification: boolean;
}

const LogoSvg: FC<ISvg> = ({ style, IsNotification = true }) => {
	return (
		<Svg style={style} viewBox="0 0 19 21" fill="none">
			<Path
				d="M14 7.66699C14 4.90557 11.7614 2.66699 9 2.66699C6.23858 2.66699 4 4.90557 4 7.66699C4 13.5003 1.5 15.167 1.5 15.167H16.5C16.5 15.167 14 13.5003 14 7.66699"
				stroke="#8293AA"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<Path
				d="M10.4419 18.5005C10.1438 19.0145 9.59448 19.3309 9.00026 19.3309C8.40604 19.3309 7.85676 19.0145 7.55859 18.5005"
				stroke="#8293AA"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			{IsNotification &&
				<Circle cx="14" cy="5" r="4" fill="#18CB6A" stroke="#EFF5FF" stroke-width="2" />}
		</Svg>
	);
};

export default LogoSvg;
