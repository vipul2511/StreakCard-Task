import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
transcationSection:{width:wp('94'),height:'auto',backgroundColor:'#F4E7F5',alignSelf:'center',marginTop:30,borderRadius:10,elevation:1,borderColor:'rgba(204, 170, 207, 0.2)',borderWidth:1},
transcationMargin:{marginHorizontal:wp('5'),marginVertical:hp('3')},
transView:{marginTop:hp('4'),flexDirection:'row'},
transInnerSection:{backgroundColor:'#EDE0FF',width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:100,borderWidth:1,borderColor:'rgba(187, 151, 244, 0.35)'},
foodView:{justifyContent:'center',marginLeft:16,width:wp('30')},
foodText:{fontFamily:'Barlow-SemiBold',fontSize:18,fontWeight:'600',lineHeight:22},
time:{fontFamily:'Barlow',color:'grey',fontSize:14,fontWeight:"600",lineHeight:17},
PriceView:{justifyContent:'flex-start',alignSelf:'flex-start',width:wp('40'),marginTop:hp('1')},
PriceText:{fontFamily:'IBMPlexMono-SemiBold',fontSize:18,fontWeight:'600',lineHeight:22,textAlign:'right'},
borderlineStyle:{borderColor:'#000000',opacity:0.08,borderWidth:0.4,width:'112%',marginTop:hp('2'),marginHorizontal:wp('-5')},
storeSection:{backgroundColor:'#D7ECF3',width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:100,borderWidth:2,borderColor:'rgba(151, 222, 244, 0.35)'},
billImg:{width:wp('5'),height:hp('5'),resizeMode:'contain'},
StoreTextView:{justifyContent:'center',marginLeft:16,width:wp('30')},
StoreTextTitle:{fontFamily:'Barlow-SemiBold',fontSize:18,fontWeight:'600',lineHeight:22},
moneySection:{backgroundColor:'#F4E7B6',width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:100,borderWidth:2,borderColor:'rgba(244, 218, 151, 0.35)'},
moneyIcon:{width:wp('5'),height:hp('5'),resizeMode:'contain'},
allTranscationView:{borderColor:'#000000',opacity:0.08,borderWidth:0.4,width:'112%',marginTop:hp('2'),marginHorizontal:wp('-5')},
allTranscationText:{fontFamily:'Barlow-SemiBold',fontSize:18,fontStyle:'normal',fontWeight:"700",lineHeight:22,color:'#A655A8'}
});