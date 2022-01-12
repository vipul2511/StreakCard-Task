import React, { useEffect,useRef,useState } from 'react';
import { View, Text, Image, StatusBar,FlatList, BackHandler,TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Style from './Style';
import {connect} from "react-redux";
import CommonActions from "../../Store/Common/Actions"
import SlotMachine from "react-native-slot-machine"
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecentTranscation from "../../Components/Transcation"
import Savings from "../../Components/Savings"
import Gameoftheday from "../../Components/GamOfTheDay";
const Dashboard=(props)=>{
   
    const [jackpot,setjackpot]=useState('')
    useEffect(()=>{  
     props.getJackpotValue()
    },[]);
    useEffect(()=>{
      let nu=props.common.getJackpotNumber.toString();
     let jackpotnumber= parseFloat(nu.replace(/,/g, ''));
      setjackpot(jackpotnumber);
    },[props.common])
    const isFocused=useIsFocused()
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
        
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
        };
      }, [backButtonHandler]);
      function backButtonHandler() {
        if (isFocused) {
          BackHandler.exitApp();
          return true;
        }
      }
      return(
        <SafeAreaView>
          <ScrollView  >
            <View style={{flex:1,backgroundColor:'#fff'}}>
            <LinearGradient start={{x: 0.1, y: 1}} end={{x: 0.5, y: 0.1}} colors={['#6C0070', '#AD54AF', '#AB0CB0']} style={Style.linearGradient}>
              <View style={Style.logoView}>
                <Image source={require('../../assets/Images/streak-logo.png')} style={Style.logo} />
                <TouchableOpacity>
                  <View style={Style.userSection}>
                    <Image style={Style.userProfileImg} source={require('../../assets/Images/user.png')} />
                    <View style={Style.usernameView}>
                    <Text style={Style.username}>{props.form.name}</Text>
                    </View>
                    <View style={{justifyContent:'center'}}>
                     <Icon name="arrow-drop-down" size={30} style={{marginRight:wp('1')}} color={"#FDBBFF"} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
                 
                <ImageBackground  source={require('../../assets/Images/ImageBackground.png')}  imageStyle={{ borderRadius: 10}} style={Style.backgroundImgStyle}>
                 <View style={Style.balanceSection}>
                   <View style={{flexDirection:'column'}}>
                  <View>
                    <Text style={Style.balanceHeading}>Balance</Text>
                  </View>
                  <View style={{marginTop:hp('1')}}>
                    <Text style={Style.balanceText}>₹12,000</Text>
                  </View>
                  </View>
                  <TouchableOpacity style={Style.eyeView}>
                    <Feather name='eye' color={"#430754"} size={20} />
                  </TouchableOpacity>
                  </View>
                  <View style={Style.savingSection}>
                   <View style={{flexDirection:'column'}}>
                  <View>
                    <Text style={Style.savingHeading}>Savings</Text>
                  </View>
                  <View style={Style.SavingView}>
                    <Text style={Style.savingAmt}>₹36,800</Text>
                    <TouchableOpacity style={Style.savemoreView}>
                    <Text style={Style.savemoreText}>Save more</Text>
                  </TouchableOpacity>
                  </View>
                  
                  </View>
                  
                  {/* </View> */}
                  
                  </View>
                </ImageBackground>

                <View style={{width:wp('91'),height:hp('30'),alignSelf:'center',marginTop:hp('0'),flexDirection:'row',marginBottom:20}}>
                <TouchableOpacity style={Style.scanqrView}>
                   <Text style={Style.scanqrText} >Scan code</Text>
                   <View style={Style.qrCircleView}>
                   <Ionicons name="md-scan-sharp" size={20} color={"white"}/>
                   </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={Style.arrowBtn}>
                   <Feather name="arrow-up-right" size={30} color={"white"} style={{fontWeight:'bold'}}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={Style.morebtn}>
                   <Feather name="more-horizontal" size={30} color={"white"} style={{fontWeight:'bold'}}/>
                  </TouchableOpacity>
                </View>
              </LinearGradient>

               {/* transcation  */}
                <RecentTranscation />
               {/* Savings  */}
                <Savings />
               {/* Game of the day  */}
               <Gameoftheday jackpot={jackpot} />

                
              <View style={Style.bottomView}>
                 <Image  source={require('../../assets/Images/Image.png')} style={Style.bottomImg} />
                 <TouchableOpacity style={Style.parentbtnView}>
                    <Text style={Style.parentbtnText}>Parental controls</Text>
                    <Feather name="settings" size={20} color={"#B5B5B5"} />
                  </TouchableOpacity>
                  </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const mapStateToProps = (state) => ({
    common: state.common,
    form: state.common.profileForm
});

const mapDispatchToProps = (dispatch) =>  ({
    getJackpotValue: (data) =>dispatch(CommonActions.getJackpotData(data)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
