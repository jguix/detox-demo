/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [isMessageVisible, setMessageVisible] = useState(false);
  // const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = true;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };
  const textStyle = {
    color: isDarkMode ? Colors.white : Colors.black,
  };

  const buttonHandler = async () => {
    setMessageVisible(true);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <View>
          <Text testID="title" style={[styles.title, textStyle]}>
            E2E testing with Detox
          </Text>
          <Text
            testID="description"
            style={[styles.description, styles.marginTop, textStyle]}>
            This app is testeable with Detox. Push the button to display a
            greeting message.
          </Text>
          {isMessageVisible && (
            <Text
              testID="message"
              style={[styles.message, styles.marginTop, textStyle]}>
              Hello world!
            </Text>
          )}
        </View>

        <View style={styles.flex1}></View>
        <View style={[styles.button, styles.marginTop]}>
          <Button
            testID="message_button"
            color={Platform.OS === 'android' ? 'black' : 'white'}
            title="Say Hello"
            onPress={buttonHandler}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    backgroundColor: 'black',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    marginTop: 32,
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  description: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: '400',
  },
  flex1: {
    flex: 1,
  },
  marginTop: {
    marginTop: 24,
  },
  message: {
    fontSize: 96,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  },
  tokenContainer: {
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 8,
    padding: 5,
    fontSize: 12,
    fontWeight: '300',
  },
});

export default App;
