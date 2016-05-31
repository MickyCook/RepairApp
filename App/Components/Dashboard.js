import Lightbox from 'react-native-lightbox'
import {
  ScrollView,
  Text,
  View,
  ProgressViewIOS,
} from 'react-native'
var React = require('react-native');


var {
  StyleSheet,
  Image,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 150,
    width: 250,
    marginTop: 25,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  text: {
    textAlign: 'center',
    marginTop: 25
  }
});

class Dashboard extends React.Component{
   makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if(btn === 0){
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1){
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }
render(){
  return (
      <ScrollView 
        style={styles.container}
        horizontal={false}>
          <Lightbox >
            <Image 
              style={{
                height: 202, 
                width: 300,
                alignSelf: 'center'
              }}
              source={{uri: this.props.userInfo.avatar_url}}
            />
          </Lightbox>
          <ProgressViewIOS 
            style={{
              margin: 20,
              width: 100,
              alignSelf: 'center'
            }}
            progress={50 / 100}
            progressTintColor={"rgba(74,144,226,1)"} 
          />
        <Text style={styles.text}>Repair Status: {this.props.userInfo.repair_description}</Text>
      </ScrollView>
    )
}
};

module.exports = Dashboard;
