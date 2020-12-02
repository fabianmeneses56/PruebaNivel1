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
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      loading: false,
      data:[],
      url:'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=829751643419a7128b7ada50de590067&format=json'

    }
  }

  componentDidMount(){
    this.getData();
  }

  getData=()=>{

    this.setState({loading:true})

    fetch(this.state.url)
    .then(res=>res.json())
    .then( res=> {

      this.setState({
        data: res.topartists.artist,
        loading:false
      })

    });
  }

  render(){
    return (
            <View>
    <ScrollView>
        {this.state.data.map(item=>(
          
         /*  <View>
            <Image source={{uri: item.image}}/>
          </View> */
          <View>
            <Text>{item.name}</Text>
            <Text>{item.listeners}</Text>
            <Text>{item.mbid}</Text>
            <Text>{item.url}</Text>
            <Text>{item.streamable}</Text>
            <Image style={{width:50, height:50}} source={{uri:'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png'}}/>
          </View>
     
        ))}
    </ScrollView>

      </View>
    );
  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


