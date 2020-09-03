import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
    TouchableOpacity
} from 'react-native';


import ReactNativeBiometrics from 'react-native-biometrics';



ReactNativeBiometrics.isSensorAvailable().then((resultObject) => {
  const {available, biometryType} = resultObject;

  if (available && biometryType === ReactNativeBiometrics.TouchID) {
    console.log('TouchID is supported');
  } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
    console.log('FaceID is supported');
  } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
    console.log('Biometrics is supported');
  } else {
    console.log('Biometrics not supported');
  }
});

ReactNativeBiometrics.createKeys('Confirm fingerprint')
    .then((resultObject) => {
      const { publicKey } = resultObject
      console.log(publicKey)
      // sendPublicKeyToServer(publicKey)
    })

// let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
// let payload = epochTimeSeconds + 'some message'
//
// ReactNativeBiometrics.createSignature({
//   promptMessage: 'Sign in',
//   payload: payload
// })
//     .then((resultObject) => {
//       const { success, signature } = resultObject
//
//       if (success) {
//         console.log(signature)
//         // verifySignatureWithServer(signature, payload)
//       }
//     })


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>


          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Login</Text>

            <TextInput style={styles.textButtonStyle} placeholder={'CPF'}></TextInput>

            <TextInput style={styles.textButtonStyle} placeholder={'Senha'}></TextInput>
      <TouchableOpacity style={styles.buttonStyle}><Text style={styles.textStyle}>Entrar</Text></TouchableOpacity>
            </View>



          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

  textButtonStyle: {
    borderStyle: "solid",
    borderColor: '#222',
    borderWidth: 1,
    marginTop: 8,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    textAlign: "center",
  },
  buttonStyle: {
    marginTop: 8,
    fontWeight: '700',
    padding: 15,
    fontSize: 22,
    color: '#222',
    backgroundColor: '#f04f4f',
  },
  textStyle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',

  },
});

export default App;
