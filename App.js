/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
} from 'react-native';
import {View} from 'react-native-picasso';
import Controlador from './controllers/Controlador';

export default class App extends React.Component {


  render() {
    return (
      <View>
        <ScrollView>
          <Controlador/>
        </ScrollView>
      </View>
    );
  }
}


