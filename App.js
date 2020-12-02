/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Linking,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {View, Text} from 'react-native-picasso';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      url:
        'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=829751643419a7128b7ada50de590067&format=json',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({loading: true});

    fetch(this.state.url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.topartists.artist,
          loading: false,
        });
      });
  };

  render() {
    return (
      <View>
        <ScrollView>
          {this.state.data.map((item) => (
            <View className="m-sm">
              <Card>
                <CardImage
                  source={{
                    uri:
                      'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
                  }}
                  title="Top Artistas"
                />
                <CardTitle
                  title={item.name}
                  subtitle={'oyentes: ' + item.listeners + ' personas'}
                />
                <CardContent>
                  <Text className="mt-sm">{'MBID: ' + item.mbid}</Text>
                  <Text className="mt-sm">{'streamable: ' + item.streamable}</Text>
                  <Text className="mt-sm">
                    para saber mas del artista presiona el siguiente boton:
                  </Text>
                </CardContent>
                <CardAction separator={true} inColumn={false}>
                  <CardButton
                    onPress={() => Linking.openURL(item.url)}
                    title="ver"
                    color="blue"
                  />
                </CardAction>
              </Card>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});
