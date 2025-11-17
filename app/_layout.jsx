import {Tabs} from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';




export default function Layout() {
    return (
        <Tabs
        screenOptions={{
            headerShown: false,
           tabBarActiveTintColor: "rgb(120, 199, 223)",
           tabBarInactiveTintColor: "rgb(40, 114, 143)",
            tabBarStyle: {
                
                backgroundColor:"rgb(33, 33, 150)", 
                
            }
        }}
        >
            <Tabs.Screen name="index" 
            options={{title: "Início ", headerShown: false,
                tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color}/>
            }}
            />
             <Tabs.Screen name="pageone" 
            options={{title: "Obrigatório ", headerShown: false,
                tabBarIcon: ({color}) => <AntDesign name="exclamation-circle" size={24} color={color}/>
            }}
            />
            <Tabs.Screen name="pagetwo" 
            options={{title: "Livre ", headerShown: false,
                tabBarIcon: ({color}) => <AntDesign name="unlock" size={24} color={color}/>
            }}
            />
            <Tabs.Screen name="pagethree" 
            options={{title: "Sobre ", headerShown: false,
                tabBarIcon: ({color}) => <SimpleLineIcons name="user" size={24} color={color}/>
            }}
            />
            
        </Tabs>
    )
}