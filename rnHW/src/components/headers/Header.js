
import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import VectorSVG from "../../assets/Vector.svg"
import CartVectorSVG from "../../assets/CartVector.svg"

const Header = ({ title, onAvatarPressed }) => {
  const backPress = () => {
    navigation.pop();
  }

  return (
   <>
    <View style={[styles.headerContainer]}>
      <View style={styles.nameContainer}>
        <VectorSVG width={17} height={13}/>
        <Text style={[styles.nameLabel, {fontWeight: '500'}]}>{title}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
         <TouchableOpacity
               style={{marginLeft: 12}}
               onPress={onAvatarPressed}>
            <CartVectorSVG width={19} height={19}/>
        </TouchableOpacity>
        </View>
      </View>
    </View>
   </>
  );
}

export default Header;


