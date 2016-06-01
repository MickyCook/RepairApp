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
    marginTop: 15,
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
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10
  },
  statusReport: {
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderBottomColor: '#000'
  },
  title: {
    textAlign: 'left',
    marginBottom: 25,
    marginLeft: 10,
    fontSize: 20
  },
  date: {
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 5
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
      getProgress(boolName){
    if (boolName == "foo"){
      return 50;
    }
  }
render(){
  var getProgress = function(boolName){
    if (boolName == "foo"){
        return 90;
    }
  }
  return (
      <ScrollView 
        style={styles.container}
        horizontal={false}>
        <Text
          style={styles.title}
          >Current Status:</Text>
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
              margin: 10,
              width:  200 ,
              alignSelf: 'center'
            }}
            progress={ getProgress("foo")  / 100}
            progressTintColor={"rgba(74,144,226,1)"} 
          />
        <Text style={styles.statusReport}>{this.props.userInfo.repair_description}</Text>
      <ProgressViewIOS 
            style={{
              margin: 10,
              width: 300,
              alignSelf: 'center',
              height: 1,
              marginBottom: 25
            }}
            progress={ 100  / 100}
            progressTintColor={"rgba(0,0,0,1)"} 
          />
        <Text style={styles.title}>Repair Feed:</Text>
        <Text style={styles.date}>09/17/15</Text>
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
      <Text style={styles.text}>Getting Vehicle ready for primer</Text>
      </ScrollView>
    )
}
};

module.exports = Dashboard;
