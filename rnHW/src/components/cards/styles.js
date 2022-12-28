import {
    StyleSheet,
    Dimensions
  } from 'react-native';
import { SHADOW_COLOR_DARK, TEXT_COLOR_LIGHT, WHITE } from '../../consts/colorsConst';
const { width , height } = Dimensions.get('screen')

  
  const styles = StyleSheet.create({
    catalogueCardContainer: {
      backgroundColor: WHITE,
      width: width*.44,
      height: width*.44,
      margin: width*.02,
      padding: 5,
      borderRadius: 5,
      justifyContent: 'space-around',
      shadowColor: SHADOW_COLOR_DARK,
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: .9,
      shadowRadius: 3,
      elevation: 6
    },
    headerText:{
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
      color: TEXT_COLOR_LIGHT
    },
    subHeaderText:{
      fontSize: 15,
      fontWeight: '700',
      color: TEXT_COLOR_LIGHT
    }
  });
  
  export default styles;
  