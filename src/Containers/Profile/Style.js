
import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        marginLeft:wp('5'),
        marginBottom:hp('4')
    },
    profile:{
        fontFamily:'IBMPlexSans-Medium',
        fontWeight:"600",
        fontSize:22,
        color:'#500061'
    },
    cross:{width:wp('8'),height:hp('4'),borderRadius:100,backgroundColor:'#fff',elevation:5,marginRight:wp('5'),justifyContent:'center',alignItems:'center'},
    subhead:{
        width:wp('70'),
      marginVertical:hp('2')
    },
    subheadText:{
        fontFamily:'IBMPlexSans-SemiBold',
        color:'#646464',
        fontSize:16,
        lineHeight:20.8
    },
    lineview:{borderColor:'#500061',borderWidth:0.8,width:wp('90'),opacity:0.1},
    form:{
        marginVertical:hp('3')
    },
    formLabel:{color:'#41536D',fontFamily:'IBMPlexSans-Medium',fontSize:14},
    input:{fontFamily:'IBMPlexSans-Medium',paddingLeft:wp('3'),fontSize:18,width:wp('90')},
    otpText:{
        fontFamily:'IBMPlexSans-Medium',
        color:'#8A8A8A' 
    },
    centerStyle:{justifyContent:'center',alignItems:'center',
    marginTop:hp('3 ')
},
createProfilebtn:{
    width:wp('90'),
    height:hp('8'),
    marginRight:wp('3'),
    backgroundColor:'#500061',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
},
ProfilecenterStyle:{
    justifyContent:'center',
    alignItems:'center'
},
createProfiletext:{
    color:'#FFFFFF',
    fontFamily:'IBMPlexSans-SemiBold',
    fontSize:20,
    lineHeight:26
}
});