import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";

function App() {
    const [value, setValue] = useState()
    return (
        <View style={{backgroundColor:"red",marginTop:400,width:"50%",height:10,borderWidth:1,}}>
        <PhoneInput
       
          placeholder="Enter phone number"
          defaultCountry="US"
          value={value}
          onChange={setValue}/>
        </View>
      )
}

const styles = StyleSheet.create({

});

export default App;
