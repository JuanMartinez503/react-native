import {View, ScrollView , SafeAreaView} from 'react-native'; //safe area view is used to make sure the content is not hidden by the notch or the home indicator
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import {COLORS, icons, images, SIZES} from '../constants'
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'
const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite , }}>
        <Stack.Screen options={{
            headerStyle: {
                backgroundColor: COLORS.lightWhite,
            
            },
            headerShadowVisible: false,
            headerLeft: ()=> (<ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />),
            headerRight: ()=> (<ScreenHeaderBtn iconUrl={images.profile} dimension='60%' />),
            headerTitle: ''
        }} />
        <ScrollView >
            <View style={{flex:1, padding:SIZES.medium}} >
                <Welcome />
                <Nearbyjobs />
                <Popularjobs />
            </View>
   
        </ScrollView>
        </SafeAreaView>
    );
    }
export default Home;
