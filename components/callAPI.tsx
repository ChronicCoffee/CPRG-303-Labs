import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const CallAPI = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                const json = await response.json();
                setData(json);
            } catch (error: any) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loading}>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>Error: {error.message}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Post Details:</Text>
            <Text style={styles.label}>User ID:</Text>
            <Text style={styles.value}>{data.userId}</Text>
            <Text style={styles.label}>Post ID:</Text>
            <Text style={styles.value}>{data.id}</Text>
            <Text style={styles.label}>Title:</Text>
            <Text style={styles.value}>{data.title}</Text>
            <Text style={styles.label}>Body:</Text>
            <Text style={styles.value}>{data.body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    loading: {
        fontSize: 18,
        color: "#333",
    },
    error: {
        fontSize: 18,
        color: "red",
    },
    heading: {
        fontSize: 22,
        color: "#333",
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        color: "#555",
        fontWeight: "bold",
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        color: "#333",
        marginBottom: 10,
    },
});

export default CallAPI;