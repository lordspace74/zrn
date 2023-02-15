import MDS from 'expo-mds';
import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

function App(): JSX.Element {
  useEffect(() => {
    try {
      // Just use dummy parameters since the call is not working anyway ...
      MDS.subscribe(
        '',
        '',
        {},
        () => {},
        () => {},
      );
    } catch (error) {
      console.error('MDS.subscribe error:', error);
    }
  }, []);

  return (
    <SafeAreaView>
      <Text>MDS.subscribe is not working on Android. The app crashes</Text>
    </SafeAreaView>
  );
}

export default App;
