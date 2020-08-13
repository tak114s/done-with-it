import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailContainer: {
    padding: 20,
  },
  image: {
    height: 180,
    width: '100%',
    resizeMode: 'cover',
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  },
})

export default Card
