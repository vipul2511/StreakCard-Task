import React, { useEffect,useState } from 'react';
import { View, Text, Image, StatusBar,FlatList, BackHandler,TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';
import Style from './Style';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux';
import CommonActions from "../../Store/Common/Actions"

const Profile=(props)=>{

    const dashboardNavigate=()=>{
        if(props.form.name){
            props.navigation.navigate('Dashboard')
        }else{
            alert('Please enter a name to show on dashboard')
        }
        
    }
      return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
        <ScrollView  >
         
        <View style={Style.container}>
            <View style={{justifyContent:'space-between',marginTop:hp('5'),flexDirection:'row'}}>
            <Text style={Style.profile}>Profile</Text>
            <TouchableOpacity style={Style.cross}>
                <Entypo name="cross" size={30} color={"red"} />
            </TouchableOpacity>
            </View>
            <View style={Style.subhead} >
                <Text style={Style.subheadText}>Enter your details so we can get to know you better.</Text>
            </View>
            <View style={Style.lineview} />
            <View style={Style.form}>
                    <View>
                        <Text style={Style.formLabel}>First Name</Text>
                        <View style={{borderColor:'#EEEEEE',borderWidth:1,width:wp('90'),marginTop:hp('2')}}>
                            <TextInput value={props.form.name} onChangeText={(data)=>{props.changeProfileForm({ edited_field: 'name', edited_value: data })}} placeholder={"Jhon"} style={Style.input} />
                        </View>
                    </View>
                    <View style={Style.form}>
                        <Text style={Style.formLabel}>Second Name</Text>
                        <View style={{borderColor:'#EEEEEE',borderWidth:1,width:wp('90'),marginTop:hp('2')}}>
                            <TextInput value={props.form.second_name} onChangeText={(data)=>{props.changeProfileForm({ edited_field: 'second_name', edited_value: data })}} placeholder={"Jhon"} style={Style.input} />
                        </View>
                    </View>
                    <View style={Style.form}>
                        <Text style={Style.formLabel}>Email</Text>
                        <View style={{borderColor:'#EEEEEE',borderWidth:1,width:wp('90'),marginTop:hp('2')}}>
                            <TextInput keyboardType={"email-address"} value={props.form.email} onChangeText={(data)=>{props.changeProfileForm({ edited_field: 'email', edited_value: data })}} placeholder={"Jhon"} style={Style.input} />
                        </View>
                    </View>
                    <View style={Style.form}>
                        <Text style={Style.formLabel}>Mobile Number</Text>
                        <View style={{borderColor:'#EEEEEE',borderWidth:1,width:wp('90'),marginTop:hp('2')}}>
                            <TextInput maxLength={10} keyboardType={"phone-pad"} value={props.form.mobile_number} onChangeText={(data)=>{props.changeProfileForm({ edited_field: 'mobile_number', edited_value: data })}} placeholder={"Jhon"} style={Style.input} />
                        </View>
                        <View style={Style.centerStyle}>
                <Text style={Style.otpText}>OTP verification in next step</Text>
            </View>
                    </View>
            </View>
            <View style={Style.ProfilecenterStyle} >
            <TouchableOpacity onPress={dashboardNavigate} style={Style.createProfilebtn}>
                <Text style={Style.createProfiletext}>Create Profile</Text>
            </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}
const mapStateToProps = (state) => ({
    form: state.common.profileForm,
});

const mapDispatchToProps = (dispatch) =>  ({
    changeProfileForm: (params) =>dispatch(CommonActions.changeProfileForm(params)),

});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);