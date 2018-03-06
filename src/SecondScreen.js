import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class SecondScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Screen 2',
    drawerIcon: ({tintColor}) => {
      return(
        <Icons
        name="change-history"
        size={24}
        style={{color: tintColor}}
      >

      </Icons>
      );
    }
  }

  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <Text style={{ fontSize: 30, color: 'blue'}}>
          Screen 2
        </Text> 
        <Button 
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open DrawerNavigator"
         />
      </View>
    )
      
  }
}