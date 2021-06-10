import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { songOneInfo } from '../../constants/config'
import RightArrow from '../svgIcons/RightArrow'
import WaveShape from '../svgIcons/WaveShape'

const MusicSheetHeader = () => {
    return (
        <View style={styles.musicHeader}>
        <View style={styles.songTextStyle}>
          <Text
            numberOfLines={1}
            style={{color: '#ed8a42', fontSize: 16, fontWeight: 'bold', marginRight: 5}}>
            {songOneInfo.songTitle}
          </Text>
          <View style={{marginBottom: -2}}>
          <RightArrow width={14} height={14} fill="#ed8a42"/>
          </View>
        </View>
        <Image
          source={{uri: songOneInfo.posterImage}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
        <View style={styles.curveStyle}>
          <WaveShape />
        </View>
      </View>
    )
}

export default MusicSheetHeader

const styles = StyleSheet.create({
    musicHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 300,
      },
      imageStyle: {
        width: '65%',
        height: 240,
        borderRadius: 8,
      },
      curveStyle: {
        width: '100%',
        position: 'absolute',
        height: '100%',
        zIndex: -10,
        borderRadius: 50,
      },
      songTextStyle: {
        width: '65%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
      },
})
