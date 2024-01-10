import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import colors from '../../../utils/colors'
import coin from '../../../assets/coin.png'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Header() {
  const {  user } = useUser()

  return (
    <View>
      <View style={[{ justifyContent: "space-between" }, styles.displayView]}>

        <View style={styles.displayView}>
          <Image source={{ uri: user.imageUrl }} style={styles.img} />
          <View>
            <Text style={styles.headerText} > Welcome </Text>
            <Text style={styles.headerTitle} > {user?.fullName} </Text>
          </View>
        </View>

        <View style={styles.displayView}>
          <Image source={coin} style={styles.coin} />
          <Text style={styles.headerTitle}>123</Text>

        </View>

      </View>
      <View style={[styles.displayView, { justifyContent: "space-between", backgroundColor: colors.WHITE, marginTop: 25, paddingLeft: 20, paddingRight: 10, borderRadius: 99 }]}>
        <TextInput style={{ fontFamily: "outfit", fontSize: 18, }} placeholder='Search for Courses' />
        <Ionicons name='search-circle' size={50} color={colors.PRIMARY} />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  displayView: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "outfit-bold",
    color: colors.WHITE
  },
  headerText: {
    fontFamily: "outfit",
    color: colors.WHITE
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 99
  },
  coin: {
    width: 40,
    height: 40,
    borderRadius: 99
  }

})