import {
    StyleSheet
  } from 'react-native';
import { APP_BACKGROUND_COLOR, PRIMARY_COLOR, WHITE } from '../../consts/colorsConst';

  
  const styles = StyleSheet.create({
    headerContainer: {
      // height: 50,
      backgroundColor: PRIMARY_COLOR,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: PRIMARY_COLOR,
      padding: 12,
      shadowColor: WHITE,
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.9,
      shadowRadius: 2.65,
      elevation: 7
    },
    navHeaderContainer: {
      height: 50,
      backgroundColor: APP_BACKGROUND_COLOR,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: .2,
      borderColor: PRIMARY_COLOR,
      shadowColor: APP_BACKGROUND_COLOR,
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.9,
      shadowRadius: 2.65,
      elevation: 7
    },
    nameContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 7,
      marginRight: 10,
      alignItems: 'center'
    },
    nameLabel: {
      color: WHITE,
      fontSize: 20
    }
  });
  
  export default styles;
  