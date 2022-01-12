import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({

savingSection:{width:wp('94'),height:hp('30'),backgroundColor:'#F5F7FB',alignSelf:'center',marginTop:30,borderTopLeftRadius:10,borderTopRightRadius:10,elevation:1,},
savingMargin:{marginHorizontal:wp('5'),marginVertical:hp('3')},
savingTitle:{fontFamily:'Barlow-SemiBold',fontSize:18,fontStyle:'normal',fontWeight:"700",lineHeight:22,color:'#112854'},
description:{width:wp('70'),marginTop:hp('2')},
descriptionText:{fontFamily:'Barlow-SemiBold',fontWeight:'600',lineHeight:22,fontSize:18,color:'#5682AB'},
innerSection:{width:wp('80%'),height:hp('12%'),backgroundColor:'#FFFFFF',marginTop:hp('2'),elevation:1,justifyContent:'center',flexDirection:'row',borderRadius:10},
line:{width:3,opacity:0.3,backgroundColor:'#58698CE5',borderColor:'#58698CE5',height:'70%',alignSelf:'flex-start',marginLeft:wp('2')},
name:{color:'#31446B',fontFamily:'Barlow-SemiBold',fontSize:18,lineHeight:30,marginBottom:hp('1')},
totalSaving:{color:'black',fontFamily:'Barlow-SemiBold',fontSize:18,lineHeight:25},
AddViewbtn:{width:wp('94'),height:hp('10'),backgroundColor:'#EEF1F3',alignSelf:'center',marginTop:1,elevation:1,borderBottomEndRadius:10,borderBottomStartRadius:10},
AddViewbtnMargin:{marginTop:hp('3'),marginHorizontal:wp('5'),flexDirection:'row'},
AddViewText:{fontFamily:'Barlow-SemiBold',fontSize:18,fontStyle:'normal',fontWeight:"700",lineHeight:22,color:'#5770A4'}







});