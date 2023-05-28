import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PROP = [
	{
		key: 'Chưa nhận việc',
		text: 'Chưa nhận việc',
	},
	{
		key: 'Đang tiến hành',
		text: 'Đang tiến hành',
	},
	{
		key: 'Đã hoàn thành',
		text: 'Đã hoàn thành',
	},
	{
		key: 'Chờ thanh toán',
		text: 'Chờ thanh toán',
    },
    {
		key: 'Đã thanh toán',
		text: 'Đã thanh toán',
    },
];

export default class RadioButton extends Component {
	state = {
		value: null,
	};
	render() {
		const { value } = this.state;
		return (
			<View>
                <Text style={{ paddingLeft : 15}}>Trạng thái :</Text>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
							<Text style={styles.radioText}>{res.text}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
	},
    radioText: {
        marginLeft : 15,
        fontSize: 15,
    },
	radioCircle: {
		height: 15,
		width: 15,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: '#2A7FF6',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: '#2A7FF6',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});