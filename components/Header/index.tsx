import { Pressable, View } from 'react-native';
import React, { Component } from 'react';

import LogoSvg from '@/assets/svg/LogoSvg';
import styles from './styles';
import IconButton from '../IconButton';
import FavoriteSvg from '@/assets/svg/FavoriteSvg';
import BellSvg from '@/assets/svg/BellSvg';

export class Header extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.emptySpace} />
				<View style={styles.logoContainer}>
					<Pressable>
						<LogoSvg />
					</Pressable>
				</View>
				<View style={styles.iconsContainer}>
					<IconButton handlePress={() => {}}><FavoriteSvg style={styles.icon} /></IconButton>    
					<IconButton handlePress={() => {}}><BellSvg style={styles.icon}/></IconButton>  
				</View>
			</View>
		);
	}
}

export default Header;
