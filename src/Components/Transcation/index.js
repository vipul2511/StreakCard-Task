import React from 'react';
import { View, Text, Image, StatusBar,FlatList, BackHandler,TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Style from './Style';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Transcation=()=>{
    return(
        <View style={Style.transcationSection}>
                <View style={Style.transcationMargin}>
                  <Text style={{fontFamily:'Barlow-SemiBold',fontSize:18,fontStyle:'normal',fontWeight:"700",lineHeight:22,color:'#600063'}}>Recent transactions</Text>
    
                <View style={Style.transView}>
                  <>
                  <View style={Style.transInnerSection}>
                   <FontAwesome5 name="hamburger" size={25} color={"#8B3A8D"} />
                   </View>
                   <View style={Style.foodView}>
                  <Text style={Style.foodText}>{`Food & Drinks`}</Text>
                  <View style={{marginTop:4}}>
                  <Text style={Style.time}>{`02:30 pm`}</Text>
                  </View>
                  </View>
                  </>
                  <View style={Style.PriceView}>
                  <Text style={Style.PriceText}>-₹50</Text>
                  </View> 
                </View>
                <View style={Style.borderlineStyle} />
                <View style={{marginTop:hp('4'),flexDirection:'row'}}>
                  <>
                  <View style={Style.storeSection}>
                   <Image source={require('../../assets/Images/bill.png')} style={Style.billImg} />
                   </View>
                   <View style={Style.StoreTextView}>
                  <Text style={Style.StoreTextTitle}>{`Store sale`}</Text>
                  <View style={{marginTop:4,}}>
                  <Text style={Style.time}>{`Jun - 04:30 pm`}</Text>
                  </View>
                  </View>
                  </>
                  <View style={Style.PriceView}>
                  <Text style={Style.PriceText}>-₹140</Text>
                  </View> 
                </View>
                <View style={Style.borderlineStyle} />
                <View style={{marginTop:hp('4'),flexDirection:'row'}}>
                  <>
                  <View style={Style.moneySection}>
                  <Image source={require('../../assets/Images/star.png')} style={Style.moneyIcon} />
                   </View>
                   <View style={Style.StoreTextView}>
                  <Text style={Style.StoreTextTitle}>{`Money credited`}</Text>
                  <View style={{marginTop:4,}}>
                  <Text style={Style.time}>{`Jun - 12:30 pm`}</Text>
                  </View>
                  </View>
                  </>
                  <View style={Style.PriceView}>
                  <Text style={Style.PriceText}>+₹4500</Text>
                  </View> 
                </View>
                <View style={Style.allTranscationView} />
                <TouchableOpacity style={{marginTop:hp('3'),flexDirection:'row'}}>
                <Text style={Style.allTranscationText}>All transactions</Text>
                   <View style={{justifyContent:'center',alignItems:'center',marginTop:3}}>
                  <Icon name="arrow-right" size={20} color={"#AE65B0"} />
                  </View>
                  </TouchableOpacity>
                </View>
              </View>
    )
}
export default Transcation;