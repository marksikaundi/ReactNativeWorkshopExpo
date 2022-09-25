import { View, Text, Switch } from 'react-native'
import React from 'react'
import styles from './styles'

// const CustomSwitch = () => {
//   return (
//     <View>
//       <Text>CustomSwitch</Text>
//     </View>
//   )
// }

export default function CustomSwitch(props){
    return(
        <View>
            <Switch 
            trackColor={{false:"red",true:"green"}}
            thumbColor={"black"}
            ios_backgroundColor="black"
            onValueChange={props.toggleSwitch}
            value={props.isEnabled}
            />
        </View>
    )
}