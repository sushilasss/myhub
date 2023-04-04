import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    TouchableOpacity,
    Text
} from 'react-native';
import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//     } from 'react-native-google-signin';

function App() {
     const storeString = "this is a secret string";

     RNSecureKeyStore.set("secretString", storeString, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
        .then((res) => {
             console.log("storeRes", res);
        }, (err) => {
            console.log(err);
        });

    RNSecureKeyStore.get("secretString")
    .then((res) => {
        console.log("storeRes11", res);
    }, (err) => {
    	console.log(err);
    });

    RNSecureKeyStore.remove("key1")
    .then((res) => {
    	console.log("storeRes22", res);
    }, (err) => {
    	console.log(err);
    });

     

    return (
        <SafeAreaView >
            <View style={{ width: "80%", height: "40%", borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: "20%" }}>
                <TouchableOpacity onPress = {() => {
                    throw new RuntimeException("Test Crash");
                }}  
                style={{width:"50%",height:"40%",borderRadius:10,backgroundColor:"blue"}}>
                <Text style={{color:"white",textAlign:"center",fontSize:20,marginTop:"10%"}}>press</Text>
                </TouchableOpacity>

                {/* <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                    disabled={this.state.isSigninInProgress}
                />; */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default App;






















// import React, { useEffect, useState } from 'react';
// import { View,StyleSheet } from 'react-native';
// import InterPhoneNumber from './src/views/InterPhoneNumber'


// export default function App() {
//   return (
//      <View>
//         <InterPhoneNumber />
//      </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });



























// import React, { useState } from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     View,
//     Button,
//     TouchableOpacity,
//     Text
// } from 'react-native';
// import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";


// function App() {
//     const storeString = "this is a secret string";

//     RNSecureKeyStore.set("secretString", storeString, { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY })
//         .then((res) => {
//             console.log("storeRes", res);
//         }, (err) => {
//             console.log(err);
//         });

    // RNSecureKeyStore.get("secretString")
    // .then((res) => {
    //     console.log("storeRes11", res);
    // }, (err) => {
    // 	console.log(err);
    // });

    // RNSecureKeyStore.remove("key1")
    // .then((res) => {
    // 	console.log("storeRes22", res);
    // }, (err) => {
    // 	console.log(err);
    // });

//     return (
//         <SafeAreaView >
//             <View style={{width:"80%",height:"40%",borderRadius:10,justifyContent:"center",alignItems:"center",marginTop:"20%"}}>
//                 <TouchableOpacity onPress = {() => {
//                     throw new RuntimeException("Test runtime exception");

//                 }}  
//                 style={{width:"50%",height:"40%",borderRadius:10,backgroundColor:"blue"}}>
//                 <Text style={{color:"white",textAlign:"center",fontSize:20,marginTop:"10%"}}>Next</Text>
//                 </TouchableOpacity>
//            </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({

// });

// export default App;



