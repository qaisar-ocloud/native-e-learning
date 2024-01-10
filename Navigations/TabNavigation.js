import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../app/screens/Home/Home';
import Course from '../app/screens/Course/Course';
import Profile from '../app/screens/Profile/Profile';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';
import Leaderboard from '../app/screens/Leaderboard/Leaderboard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();
export const TabNavigation = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator  initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: colors.PRIMARY,
                    headerShown:false
                }} >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Course"
                    component={Course}
                    options={{
                        tabBarLabel: 'Courses',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="book" size={25} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Leaderboard"
                    component={Leaderboard}
                    options={{
                        tabBarLabel: 'Leaderboard',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="leaderboard" size={25} color={color} />
                        ),
                    }}
                />
                <Tab.Screen name='Profile' component={Profile} options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="perm-identity" color={color} size={25} />
                    )
                }} />

            </Tab.Navigator>
        </NavigationContainer>

    )

}

export default TabNavigation