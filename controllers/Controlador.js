import React, {Component} from 'react';
import {
  Image,
  Linking,
} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-material-cards';
import {View, Text} from 'react-native-picasso';

export default class Controlador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      url:'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=829751643419a7128b7ada50de590067&format=json&limit=10&page=2',
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
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
        {this.state.data.map((item) => (
          <View key={item.name} className="m-sm">
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
                <Text className="mt-sm">
                  {'streamable: ' + item.streamable}
                </Text>
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
      </View>
    );
  }
}
