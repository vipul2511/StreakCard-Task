
import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container:{
        flex:1
    },
    linearGradient:{
        width:wp('100'),
        height:hp('55')
    },
    bottomView:{
        flexDirection:'row'
    },
    bottomImg:{width:wp('70')
    ,height:hp('10%'),
    marginTop:hp('4.5'),
    resizeMode:"contain",
},
    parentbtnView:{
        backgroundColor:'#F7F7F7',
        borderRadius:100,
        width:wp('47%'),
        height:hp('5%'),
        elevation:1,justifyContent:'center',
        alignItems:'center',elevation:0,marginTop:hp('4.5'),
        position:'absolute',right:'10%',flexDirection:'row',
        justifyContent:'space-evenly',
    },
    parentbtnText:{
        fontFamily:'IBMPlexSans-Medium',
        fontWeight:'700',fontSize:14,
        lineHeight:18,
        textAlign:'center',
        color:'#B5B5B5',},
    morebtn:{backgroundColor:'#874687',
    width:wp('19'),height:hp('7'),
    justifyContent:'center',
    alignItems:'center',
    marginRight:12,marginTop:20,
    borderRadius:10,
    flexDirection:'row'},
    arrowBtn:{backgroundColor:'#874687',
    width:wp('19'),
    height:hp('7'),
    justifyContent:'center',
    alignItems:'center',
    marginRight:12
    ,marginTop:20,
    borderRadius:10,
    flexDirection:'row'},
    scanqrView:{backgroundColor:'#430754',width:wp('48'),height:hp('7'),justifyContent:'center',alignItems:'center',marginRight:8,marginTop:20,borderRadius:10,flexDirection:'row'},
   
    scanqrText:{fontFamily:'Barlow-Medium',color:'#fff',fontSize:18,lineHeight:22,textAlign:'center'},
   
    qrCircleView:{backgroundColor:'#650F5C',width:35,height:35,justifyContent:'center',alignItems:'center',borderRadius:100,marginLeft:wp('4')},
   
    savemoreText:{fontFamily:'IBMPlexSans-Medium',fontWeight:'700',fontSize:14,lineHeight:18,textAlign:'center',color:'#400142',},
    
    savemoreView:{backgroundColor:'#CEA4CE',borderRadius:100,width:98,height:32,elevation:1,justifyContent:'center',alignItems:'center',elevation:0},
    
    savingAmt:{fontFamily:'IBMPlexMono-SemiBold',color:'#681A60',fontSize:30,fontWeight:"600",lineHeight:39},
    
    SavingView:{marginTop:hp('1'),justifyContent:'space-between',flexDirection:'row',width:wp('85')},
   
    savingHeading:{fontFamily:'Barlow-Medium',color:'#681A6099',fontSize:18,fontWeight:"600",lineHeight:22},
   
    savingSection:{justifyContent:'space-between',flexDirection:'row',margin:'3%',marginTop:hp('0'),marginLeft:wp('4%'),height:'50%'},
    eyeView:{backgroundColor:'rgba(155, 151, 182, 0.5)',borderRadius:100,width:43,height:43,elevation:1,justifyContent:'center',alignItems:'center'},
    balanceText:{fontFamily:'IBMPlexMono-SemiBold',color:'#252525',fontSize:30,fontWeight:"600",lineHeight:39},
    balanceHeading:{fontFamily:'Barlow-Medium',color:'#9B9B9B',fontSize:18,fontWeight:"600",lineHeight:22},
    balanceSection:{justifyContent:'space-between',flexDirection:'row',margin:'3%',marginLeft:wp('4%'),height:'50%'},
    backgroundImgStyle:{width:wp('94'),height:hp('30'),alignSelf:'center',marginTop:hp('1'),},
    username:{fontFamily:'Barlow-Medium',color:'#FFFFFF',fontSize:16,fontWeight:"600"},
    usernameView:{justifyContent:'center',marginLeft:2,marginBottom:5},
    userProfileImg:{width:wp('10'),height:hp('5'),resizeMode:'contain'},
    userSection:{backgroundColor:'#430754',width:'auto',height:hp('5'),marginRight:wp('3'),marginTop:10,borderRadius:32,flexDirection:'row'},
    logo:{width:wp('8'),height:hp('8'),resizeMode:'contain',marginLeft:12},
    logoView:{marginTop:hp('3'),justifyContent:'space-between',flexDirection:'row'}



});