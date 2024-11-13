import { StyleSheet, TouchableOpacity } from "react-native";

interface Props{
    value: string;
    index: number;
    onPress: (index: number) => void;
    isFlipped: boolean;
    isMatched: boolean;
}

export function Card(){
    return(
        <TouchableOpacity>

        </TouchableOpacity>
            
        
    )
} 

const style = StyleSheet.create({
    Card: {
        height: 68,
        width: 68,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})