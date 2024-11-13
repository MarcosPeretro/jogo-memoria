import { useState } from "react";
import { View } from "react-native";

const getInitialCards = () => {
    const cards = [
        "🍇",
        "🍎",
        "🍏",
        "🍈",
        "🍉",
        "🍊",
        "🍌",
        "🍍",
    ];
    return cards.concat(cards).sort(() => Math.random() - 0.5);
}

export function Board(){
    const [board, setBoard] = useState(getInitialCards());
    return(
        <View></View>
    )
} 