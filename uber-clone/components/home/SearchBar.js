import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function SearchBar(props) {
    const [city, setCity] = useState();
    const onChange = (text) => {
        setCity(text);
     }
  return (
    <View style={{marginTop:15, flexDirection:"row"}}>
    {/* can not create account to call api GG Places (must billing :v) */}
      <GooglePlacesAutocomplete
        textInputProps={{
            onChangeText: onChange
            }}
        query={{key: ""}}
        placeholder = "Search..."
        styles={{
            textInput:{
                backgroundColor:"#eee",
                borderRadius: 20,
                fontWeight:"700",
                marginTop:7,
            },
            textInputContainer:{
                backgroundColor:"#eee",
                borderRadius: 50,
                flexDirection:"row",
                alignItems:"center",
                marginRight:10
            },
        }}
        renderLeftButton={()=>(
            <View>
                <Ionicons name='location-sharp' size={24} style={{marginLeft:10}}></Ionicons>
            </View>
        )}
        renderRightButton={()=>(
           <TouchableOpacity onPress={()=>{
               if(city==""){
                   setCity("Little Saigon");
               }
               props.setCity(city);
           }}>
                <View
                style={{
                    flexDirection:"row",
                    marginRight: 8,
                    backgroundColor: "white",
                    padding: 9,
                    borderRadius: 30,
                    alignItems:"center",
                }}
            >
                <Entypo name='magnifying-glass' size={20}  /> 
            </View>
           </TouchableOpacity>
        )}
      />
    </View>
  );
}
