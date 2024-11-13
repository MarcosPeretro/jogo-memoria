import LottieView from "lottie-react-native"

export function ExampleLottie(){
return(
    <LottieView
        autoPlay
        loop
        source={require("../assets/Animation - 1731452439551.json")}
        style={{
            width: 100,
            height: 100,
        }}
    />
)

}