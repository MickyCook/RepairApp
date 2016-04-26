

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
          title: 'Repair App',
          component: Main
        }} />
    );
  }
}

AppRegistry.registerComponent('CPBRepairApp', () => CPBRepairApp);
