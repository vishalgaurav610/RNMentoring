import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from "react-native"
import CatalogueCard from '../components/cards/CatalogueCard';
import Header from '../components/headers/Header';
import SearchBar from '../components/searchBar/SearchBar';
import { MAIN_SCREEN_HEADER_TITLE } from '../consts/appConst';
import { PRIMARY_COLOR, SHADOW_COLOR_DARK } from '../consts/colorsConst';


const MainScreen = () => {
    const [catalogueList, setCatalogueList] = useState([])
    const [showLoader, toggleShowLoader] = useState(true)

    useEffect(() => {
        getCatalogueData()
    }, [])

    const getCatalogueData = async () => {
        const catResponse = await axios.get("https://demo.spreecommerce.org/api/v2/storefront/products")
        if(catResponse.data && catResponse.data.data) {
            setCatalogueList(catResponse.data.data)
        }
        toggleShowLoader(false)
    }

    return(
        <View style={{width: '100%', height: '100%'}}>
            <Header
                title= {MAIN_SCREEN_HEADER_TITLE}
            />
            <SearchBar />
            <View style={{alignItems: 'center'}}>
                <FlatList 
                    data={catalogueList}
                    numColumns={2}
                    renderItem={({item, index}) => <CatalogueCard catalogueData={item}/> }
                />
            </View>
            {
                showLoader && (
                    <View style={styles.loading}>
                        <ActivityIndicator  size={70}  color= {PRIMARY_COLOR}/>
                    </View>
                )
            }
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});