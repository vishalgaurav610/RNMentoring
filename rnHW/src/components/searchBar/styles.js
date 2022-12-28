import {
    StyleSheet
  } from 'react-native';
import { PRIMARY_COLOR, SHADOW_COLOR_DARK, WHITE } from '../../consts/colorsConst';

  
  const styles = StyleSheet.create({
    searchBarContainer: {
      backgroundColor: WHITE,
      flexDirection: 'row',
      alignItems: 'center',
      // borderWidth: 1,
      padding: 20,
      shadowColor: SHADOW_COLOR_DARK,
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: .9,
      shadowRadius: 3,
      elevation: 4
    },
    searchContainer: {
      borderColor: '#8F8F8F',
      borderWidth: 1,
      borderRadius: 4,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 13
    },
    searchInput: {
      color: PRIMARY_COLOR,
      fontSize: 12,
      paddingLeft: 14
  },
  });
  
  export default styles;
  