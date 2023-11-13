import React from "react";
import { SafeAreaView,ScrollView,ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import { SvgUri } from "react-native-svg";
const keys=[
  {
    header:"PROFILE",
    items:[
      {id:'1',image:require('./few-icons/Icon feather-user.svg'),label:'Profile Details',type:'Link',internaltext:'View & Edit Details'}
    ],
  },
  {
    header:"SECURITY",
    items:[
      {id:'1',image:require('./few-icons/envelope (1).svg'),label:'Login Shield',type:'Link',internaltext:'Enter Otp'},
      {id:'2',image:require('./few-icons/Icon feather-shield.svg'),label:'Change Secondary Pin',type:'Link',internaltext:'View & Edit Details'},
      {id:'3',image:require('./few-icons/Icon metro-mobile.svg'),label:'Device Management',type:'Link',internaltext:'View Devices'},
    ],
  },
  {
    header:"UPGRADE",
    items:[
      {id:'1',image:require('./few-icons/Icon metro-shop.svg'),label:'Merchant',type:'toggle',internaltext:'off'},
    ],
  },
  {
    header:"SETTINGS",
    items:[
      {id:'1',image:require('./few-icons/Icon feather-bell.svg'),label:'Push Notifications',type:'toggle',internaltext:'Off'},
      {id:'2',image:require('./few-icons/Group 118.svg'),label:'Help & Support',type:'Link',internaltext:''},
      {id:'3',image:require('./few-icons/Icon metro-language.svg'),label:'Language',type:'Link',internaltext:''},
      {id:'4',image:require('./few-icons/Icon ionic-ios-git-network.svg'),label:'Network fees',type:'Link',internaltext:''},
      {id:'5',image:require('./few-icons/Icon ionic-ios-qr-scanner.svg'),label:'Use Basic QR Code',type:'toggle',internaltext:''},
      {id:'6',image:require('./few-icons/envelope (1).svg'),label:'Display Currency',type:'Link',internaltext:''},
      {id:'7',image:require('./few-icons/Icon metro-mobile.svg'),label:'Device Management',type:'Link',internaltext:''},
    ],
  },
];
const Profile = () =>{
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./bg.png')} style={{width:'100%',height:'100%',}}>
        <View style={styles.whitebackground}>
          
            <ScrollView contentContainerStyle={styles.container1}>
              {keys.map(({header,items}) => (
                <View style={styles.keys} key={header}>
                  <View style={styles.keysheader}>
                  <Text style={styles.keysheadertext}>{header}</Text>
                  </View>
                  <View style={styles.Keysbody}>
                    {items.map(({id,image,label,type,internaltext}) => (
                      <View style={styles.rowwrapper} key={id}>
                        <TouchableOpacity>
                          <View style={styles.row}>
                            <Image source={image} style={{marginRight:22,width:30,height:15,resizeMode:'center'}} ></Image>
                            <View style={{flexDirection:'column'}}>
                            <Text style={styles.rowlabel}>{label}</Text>
                            <Text>{internaltext}</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </ScrollView>
          
        </View>
      </ImageBackground>
    </View>
  )
};
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  container1:{
    paddingVertical:24,
  },
  whitebackground:{
    width:'100%',
    height:'75%',
    backgroundColor:'white',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    bottom:0,
    position:'absolute',
  },
  keys:{
    paddingTop:12,
    borderTopWidth:1,
    borderColor:'#e3e3e3',
  },
  keysheader:{
    paddingHorizontal:24,
    paddingVertical:8,
  },
  keysheadertext:{
    fontSize:14,
    fontWeight:'600',
    color:'#a7a7a7',
    letterSpacing:1.2,
  },
  row:{
    height:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingRight:24,
  },
  rowwrapper:{
    paddingLeft:24,
  },
  rowlabel:{
    fontSize:17,
    fontWeight:'500',
    color:'#000'
  },
});
export default Profile;