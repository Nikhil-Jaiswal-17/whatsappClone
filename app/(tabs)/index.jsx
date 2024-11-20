import React from "react";
import { Text, Image, View, ScrollView, TextInput, FlatList } from "react-native";

export default function HomeScreen() {
  return (
    // <ParallaxScrollView
    // </ParallaxScrollView>
    <ScrollView style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, color: "green", fontWeight: "500" }}>WhatsApp</Text>
      <TextInput style={{ height: 50, marginTop: 20, borderRadius: 40, backgroundColor: "whitesmoke", fontSize: 16 }} placeholder="           Ask Meta AI or Search" />
      <View style={{ padding: 2, marginTop: 5 }}>
        <View style={{ flexDirection: 'row', backgroundColor: "whitesmoke", padding: 7, borderRadius: 15, marginTop: 5 }}>
          <View>
            <Image source={require('../assets/dp.jpeg')} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', flex:0}}>Mummy</Text>
            <Text>Description</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "whitesmoke", padding: 7, borderRadius: 15, marginTop: 5 }}>
          <View>
            <Image source={require('../assets/dp.jpeg')} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', flex: 0 }}>Bhaiya</Text>
            <Text>Description</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "whitesmoke", padding: 7, borderRadius: 15, marginTop: 5 }}>
          <View>
            <Image source={require('../assets/dp.jpeg')} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', flex: 0 }}>Sinu</Text>
            <Text>Description</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "whitesmoke", padding: 7, borderRadius: 15, marginTop: 5 }}>
          <View>
            <Image source={require('../assets/dp.jpeg')} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', flex: 0 }}>Chintu</Text>
            <Text>Description</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "whitesmoke", padding: 7, borderRadius: 15, marginTop: 5 }}>
          <View>
            <Image source={require('../assets/dp.jpeg')} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', flex: 0 }}>ONLY Notes</Text>
            <Text>Description</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "whitesmoke", padding: 7, borderRadius: 15, marginTop: 5 }}>
          <View>
            <Image source={require('../assets/dp.jpeg')} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', flex: 0 }}>Papa</Text>
            <Text>Description</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "whitesmoke", padding: 7, borderRadius: 15, marginTop: 5 }}>
          <View>
            <Image source={require('../assets/dp.jpeg')} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', flex: 0 }}>Office</Text>
            <Text>Description</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "whitesmoke", padding: 7, borderRadius: 15, marginTop: 5 }}>
          <View>
            <Image source={require('../assets/dp.jpeg')} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', flex: 0 }}>Amazon</Text>
            <Text>Description</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "whitesmoke", padding: 7, borderRadius: 15, marginTop: 5 }}>
          <View>
            <Image source={require('../assets/dp.jpeg')} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', flex: 0 }}>Google</Text>
            <Text>Description</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "whitesmoke", padding: 7, borderRadius: 15, marginTop: 5 }}>
          <View>
            <Image source={require('../assets/dp.jpeg')} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', flex: 0 }}>BVUR Innovation</Text>
            <Text>Description</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: "whitesmoke", padding: 7, borderRadius: 15, marginTop: 5 }}>
          <View>
            <Image source={require('../assets/dp.jpeg')} style={{ height: 50, width: 50, borderRadius: 50 }}></Image>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, textAlign: 'left', flex: 0 }}>Microsoft</Text>
            <Text>Description</Text>
          </View>
        </View>
      </View>
    </ScrollView>


  )
}

// const styles = StyleSheet.create({
//   button:{
//     width:50,
//     height:10
//   }
// })












// import { Image, StyleSheet, Platform } from 'react-native';
// import { View } from "react-native-reanimated/lib/typescript/Animated";

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
