
import { useState } from "react";
import { useEffect } from "react";
import { View, Text } from "react-native";

const callAPI = () => {
    const [data, setData] = useState(null);

    useEffect(async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }, []);

    return (
        <View>
            <Text>API Data:</Text>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    );
};