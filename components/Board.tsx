import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "./Card";
import { getInitialCards } from "../utils/boardUtils";

interface Props {
    incrementTurn: () => void;
}


export function Board({incrementTurn}: Props) {
   
    const [cards, setCards] = useState(getInitialCards());
    const [flippedCards, setFlippedCards] = useState<number[]>([]); //ação de virar carta ex: [5, 6]
    const [matchedCards, setMatchedCards] = useState<number[]>([]); //ação de manter vista a carta pareada ex: [0, 10, 2, 6] 
    const [isFlipping, setIsFlipping] = useState(false)
    const handleCardPress = (index: number) => {
        if (isFlipping ||
            matchedCards.includes(index) ||
            flippedCards.includes(index)) {
            return;
        }

        if (flippedCards.length === 1) {
            setFlippedCards([...flippedCards, index]);
            setIsFlipping(true)
        } else {
            setFlippedCards([index])
        }
    }
    

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstIndex, secondIndex] = flippedCards;

            if (cards[firstIndex] === cards[secondIndex]) {
                setMatchedCards([...matchedCards, firstIndex, secondIndex])
            }

            setTimeout(() => {
                setFlippedCards([]);
                setIsFlipping(false);
                incrementTurn();
            }, 700);
        }
    }, [flippedCards])
    

    return (
        <View style={styles.container}>
            {cards.map((card, index) => (
                <Card
                    isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
                    backContent={card}
                    onPress={() => handleCardPress(index)}
                    key={index}
                />
            ))}
        </View>
        
    )

}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
});


