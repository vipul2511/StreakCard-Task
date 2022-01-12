import React, {useRef} from 'react';
import { View, Text,TouchableOpacity, } from 'react-native';
import SlotMachine from "react-native-slot-machine"
import Icon from 'react-native-vector-icons/MaterialIcons';
import Style from './Style';
const gameoftheday=({jackpot})=>{
    const inputEl = useRef(null);
    return(
    <>
    <View style={Style.gameSection}>
                <View style={Style.gameMargin}>
                <Text style={Style.gameTitle}>Game of the day</Text>
                 <View style={Style.slotMachineStyle}>
                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <SlotMachine initialAnimation={false} text={'8884'} ref={inputEl} width={64.5} height={107}  duration={6000} range="123456789" />
            </View>
                 </View>
                 <View style={Style.winSection}>
                   <Text style={Style.winText}>Win prizes worth ₹4000 or more.</Text>
                   <TouchableOpacity onPress={()=>{inputEl.current.spinTo(jackpot)}} style={Style.tryluckbtn}>
                    <Text style={Style.tryluckText}>Try your luck</Text>
                  </TouchableOpacity>
                 </View>
                 
                  </View>
                 </View>
                 <View style={Style.gameBottomSection}>
                <TouchableOpacity style={Style.gameBottomView}>
                <Text style={Style.gameBottomtext}>View all games</Text>
                   <View style={{justifyContent:'center',alignItems:'center',marginTop:3}}>
                  <Icon name="arrow-right" size={20} color={"#A3503E"} />
                  </View>
                  </TouchableOpacity>
                </View>
    </>
    )
}
export default gameoftheday;