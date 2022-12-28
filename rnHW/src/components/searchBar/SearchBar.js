import React, { useState } from 'react';
import { Text, TextInput, View } from "react-native"
import styles from './styles';

import SearchVectorSVG from "../../assets/SearchVector.svg"
import { PRIMARY_COLOR } from '../../consts/colorsConst';

const SearchBar = () => {

    const [searchText, setSearchText] = useState()

    return (
        <View style={styles.searchBarContainer}>
            <View style={styles.searchContainer}>
                <SearchVectorSVG width={17} height={17}/>
                <TextInput
                    style={styles.searchInput}
                    placeholderTextColor={PRIMARY_COLOR}
                    placeholder=''
                    onChangeText={(text) => setSearchText(text)}
                    value={searchText}
                    autoCompleteType={"off"}
                    numberOfLines={1}
                    height={36}
                />
            </View>
        </View>
    )
}

export default SearchBar