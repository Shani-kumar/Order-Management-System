import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
   
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent:'space-between',
    // borderTopWidth: 1,
    // borderColor: '#ccc',
    borderBottomWidth:1,
    borderColor:'#ccc'
  
  },
  leftButton: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    // borderRightWidth:0.2,
    padding: 17, 
  },
  rightButton: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 17,
    borderLeftWidth:0.1 
  },
  textright:{
    color:'#F15927',
    fontSize:15,
    fontWeight:'bold'
  },
  textleft:{
    color:'black',
    fontSize:15,
    fontWeight:'bold'
  }

});

export default styles
