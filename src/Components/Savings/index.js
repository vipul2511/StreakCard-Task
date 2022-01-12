import React, { useEffect,useRef,useState } from 'react';
import { View, Text, Image, StatusBar,FlatList, BackHandler,TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Style from './Style';
const Savings=()=>{
    return(
        <>
        <View style={Style.savingSection}>
        <View style={Style.savingMargin}>
            <Text style={Style.savingTitle}>Andy’s Savings</Text>
            <View style={Style.description}>
              <Text style={Style.descriptionText}>Saved a total of <Text style={{color:'black'}}> ₹6,480 </Text>this month and is close to achieving one goal</Text>
            </View>
            <View style={Style.innerSection}>
             <View style={{justifyContent:'center',}}>
             <View style={Style.line}></View>
             </View> 
             <View style={{justifyContent:'center',width:wp('70'),marginLeft:wp('4')}}>
             <Text style={Style.name}>Playstation 5 </Text>
               <Text style={Style.totalSaving}>₹36,480 saved  <Text style={{color:'#5682AB'}}>of  ₹40,000 goal </Text></Text>
             </View>
            </View>

            </View>
          </View>
          <View style={Style.AddViewbtn}>
          <TouchableOpacity style={Style.AddViewbtnMargin}>
          <Text style={Style.AddViewText}>Add and view goals</Text>
             <View style={{justifyContent:'center',alignItems:'center',marginTop:3}}>
            <Icon name="arrow-right" size={20} color={"#5770A4"} />
            </View>
            </TouchableOpacity>
          </View>
          </>
    )
}
export default Savings;