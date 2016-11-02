


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Navigator,
  ScrollView
} from 'react-native';


class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class AwesomeProject extends Component {
  render() {
      <Text>Hello {this.props.name}!</Text>

    return (

      <View style={styles.container}>
      <ScrollView>
      <StatusBar
      backgroundColor="blue"
        barStyle="light-content"
        />
        <Navigator
        initialRoute={{statusBarHidden: true}}
        renderScene={(route, navigator) =>
            <View>
                <StatusBar hidden={route.statusBarHidden} />
            </View>
            }
        />
        <Text style={styles.intro}>I'm Troy, I Travel!</Text>
        <Text style={styles.welcome}><Greeting name='from Plainfield' /></Text>
        <Text style={styles.welcome}><Greeting name='from Austin' /></Text>
        <Text style={styles.welcome}><Greeting name='from Indy Eleven' /></Text>
        <Text style={styles.welcome}><Greeting name='from Indianapolis' /></Text>
        <Image source={require('./pond.jpg')} style={{width: 293, height: 210}}/>
        <Image source={require('./austin.jpg')} style={{width: 293, height: 210}}/>
        <Image source={require('./indy11.jpg')} style={{width: 293, height: 210}}/>
        <Image source={require('./building.jpg')} style={{width: 293, height: 210}}/>
        <Text style={styles.welcome}>
          Welcome to My App!
        </Text>
        <Text style={styles.instructions}>
          This is for testing the scrolling function.
        </Text>
        <Text style={styles.instructions}>
          If you are seeing this...I'm so happy
        </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777777',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#F5F5F1',
    margin: 10,
  },
  intro: {
    fontSize: 40,
    textAlign: 'center',
    color: '#F5F5F1',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#F5F5F1',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);



{/* <ScrollView>
  <Text style={{fontSize:96}}>Scroll me plz</Text>
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Text style={{fontSize:96}}>If you like</Text>
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Text style={{fontSize:96}}>Scrolling down</Text>
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Text style={{fontSize:96}}>What's the best</Text>
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Text style={{fontSize:96}}>Framework around?</Text>
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Image source={require('./pond.jpg')} />
  <Text style={{fontSize:80}}>React Native</Text>
</ScrollView> */}
