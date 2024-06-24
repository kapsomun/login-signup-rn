import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface ISvg {
	style?: object;
}

const MinusSvg: FC<ISvg> = ({ style }) => {
	return (
		<Svg style={style} viewBox="0 0 14 2" fill="none">
			<Path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0 0.999756C0 0.447471 0.391751 -0.000244141 0.875 -0.000244141H13.125C13.6082 -0.000244141 14 0.447471 14 0.999756C14 1.55204 13.6082 1.99976 13.125 1.99976H0.875C0.391751 1.99976 0 1.55204 0 0.999756Z"
				fill="#2E2E2E"
			/>
		</Svg>
	);
};
export default MinusSvg;
