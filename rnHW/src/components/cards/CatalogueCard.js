import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles';

const CatalogueCard = (props) => {

    return (
        <TouchableOpacity
            onPress={() => alert('Card clicked')}
            style={styles.catalogueCardContainer}
        >
            {/* <Text onPress={() => alert('https://picsum.photos/' +props.catalogueData.relationships.images.data[0].id)}>
                getCatalogueData
            </Text> */}
            <Image
                source={{uri : `https://picsum.photos/'${props.catalogueData.relationships.images.data[0].id}`}}
                style={{width: 100, height: 100, alignSelf: 'center'}}
                width={100}
                height={100}
            />
            <Text style={styles.headerText}>
                {props.catalogueData.attributes.name}
            </Text>
            <Text style={styles.subHeaderText}>
                {props.catalogueData.attributes.display_price}
            </Text>
        </TouchableOpacity>
    )
}

export default CatalogueCard