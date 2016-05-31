import { Image } from 'react-native'
var React = require('react-native');
var api = require('../utils/api');
var Dashboard = require('./Dashboard');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
    mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#0171b5',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#0171b5',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  header: {
    fontSize: 35,
    alignSelf: 'center',
    color: '#fff',
    marginBottom: 20,
    backgroundColor: 'transparent'
  }
});

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
  handleChange(event){
    this.setState({
      username: event.nativeEvent.text
    })
  }
  handleSubmit(){
    this.setState({
      isLoading: true
    });
    api.getRepair(this.state.username)
      .then((res) => {
        if(res.message === 'Not Found'){
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: res.name || "Select an Option",
            component: Dashboard,
            passProps: {userInfo: res}
          });
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
      });
  }
  render() {
    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return(
      <Image style={styles.backgroundImage}
          source={{uri:'http://cookpaintbody.com/api/images/bmw.jpg'}}
        >
        <View style={styles.mainContainer}>
      <Image 
        style={{
          width: 64,
          height: 64,
          alignSelf: 'center'
        }}
        resizeMode={"contain"}
        source={{uri:'http://cookpaintbody.com/api/images/paint4.png'}}
      />
      <Text style={styles.header}>Cook Paint & Body</Text>
      <TextInput
        style={styles.searchInput}
        value={this.state.username}
        placeholder={'Enter Username'}
        placeholderTextColor={"rgba(255,255,255,0.9)"}
        onChange={this.handleChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color="#111"
          size="large"></ActivityIndicatorIOS>
        {showErr}
      </View>
      </Image>
      )
  }
};

module.exports = Main;
