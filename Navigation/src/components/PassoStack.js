import React from 'react'
import {View, Text, Button} from 'react-native';

export default props => (
  
  <View style={{flex: 1}}>
      <View >
      {console.warn(props.avancar != null)}
        {props.avancar ? <Button title='Avancar' onPress={() => {props.navigation.navigate(props.avancar)}}/> : false }
      </View>
      <View style={{flex: 1}}>
          {props.children}
      </View>
  </View>
)
