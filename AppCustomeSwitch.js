import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Switch } from 'react-native';
import CustomSwitch from './CustomSwitch';
import styles from './styles';

export default function App() {
  const [location,setLocation] = useState(false)
  const [mic,setMic] = useState(false)
  const [storage,setStorage] = useState(false)

  const toggleLocation = () => {
    setLocation(previousState=>!previousState)
  }
  const toggleMic = () => {
    setMic(previousState=>!previousState)
  }
  const toggleStorage = () => {
    setStorage(previousState=>!previousState)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Location is {location ? "on" : "off"}</Text>
      <CustomSwitch isEnable={location} toggleSwitch={setLocation}/>
      <Text style={styles.text}>Mic is {mic ? "on" : "off"}</Text>
      <CustomSwitch isEnable={mic} toggleSwitch={setMic}/>
      <Text style={styles.text}>Storage is {storage ? "on" : "off"}</Text>
      <CustomSwitch isEnable={storage} toggleSwitch={setStorage}/>
    </View>
  );
}


