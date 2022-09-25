import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Switch } from 'react-native';
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
      <Switch 
      trackColor={{false:"red",true:"black"}}
      thumbColor={"blue"}
      ios_backgroundColor="red"
      onValueChange={toggleLocation}
      value={location}
      />
      <Text style={styles.text}>Mic is {mic ? "on" : "off"}</Text>
      <Switch 
      trackColor={{false:"red",true:"black"}}
      thumbColor={"blue"}
      ios_backgroundColor="red"
      onValueChange={toggleMic}
      value={mic}
      />
      <Text style={styles.text}>Storage is {storage ? "on" : "off"}</Text>
      <Switch 
      trackColor={{false:"red",true:"black"}}
      thumbColor={"blue"}
      ios_backgroundColor="red"
      onValueChange={toggleStorage}
      value={storage}
      />
    </View>
  );
}


