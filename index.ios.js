import NavigationBar from 'react-native-navbar'
import { Image } from 'react-native'
import Lightbox from 'react-native-lightbox'


var React = require('react-native');
var Main = require('./App/Components/Main');


var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;


var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000'
  },
});

class CPBRepairApp extends React.Component{
  render() {
    return (
        <NavigatorIOS
          style={styles.container}
          initialRoute = {{
            title: 'Follow Your Repair',
            component: Main
          }} />
    );
  }
}

AppRegistry.registerComponent('CPBRepairApp', () => CPBRepairApp);
