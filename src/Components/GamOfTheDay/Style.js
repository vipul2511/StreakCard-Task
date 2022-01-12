import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({

gameSection:{width:wp('94'),height:'auto',backgroundColor:'#FBF7F5',alignSelf:'center',marginTop:30,borderTopLeftRadius:10,borderTopRightRadius:10,elevation:1,},
gameMargin:{marginHorizontal:wp('5'),marginVertical:hp('3')},
gameTitle:{fontFamily:'Barlow-SemiBold',fontSize:18,fontStyle:'normal',fontWeight:"700",lineHeight:22,color:'#631E00'},
slotMachineStyle:{width:wp('85%'),height:hp('20%'),marginTop:hp('2'),borderColor:'#F9EDEB',borderRadius:20,borderWidth:4,justifyContent:'center',alignItems:'center'},
winSection:{justifyContent:'center',alignItems:'center',marginTop:hp('2')},
winText:{fontFamily:'Barlow-SemiBold',fontSize:16,fontStyle:'normal',fontWeight:"600",lineHeight:22,color:'#AB604F'},
tryluckbtn:{backgroundColor:'#AB604F',borderRadius:100,width:wp('35'),height:hp('7'),elevation:1,justifyContent:'center',alignItems:'center',elevation:0,marginTop:hp('2')},
tryluckText:{fontFamily:'Barlow-Medium',fontWeight:'700',fontSize:17,lineHeight:18,textAlign:'center',color:'#FFFFFF',},
gameBottomSection:{width:wp('94'),height:hp('10'),backgroundColor:'#F2E9E1',alignSelf:'center',marginTop:1,elevation:1,borderBottomEndRadius:10,borderBottomStartRadius:10,},
gameBottomView:{marginTop:hp('3'),marginHorizontal:wp('5'),flexDirection:'row'},
gameBottomtext:{fontFamily:'Barlow-SemiBold',fontSize:18,fontStyle:'normal',fontWeight:"700",lineHeight:22,color:'#A3503E'}



});