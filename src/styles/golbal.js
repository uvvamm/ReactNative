import { StyleSheet } from "react-native";
import { colorsp } from "../constans/colorsp";

    export const globalStyles = StyleSheet.create({
        screenContainer: {
            flex: 1,
            backgroundColor: colorsp.ligth,
            alignItems: "center",
            justifyContent: "center",
        },
        title: {
            fontSize: 32,
            fontWeight: 'bold',
            color: colorsp.secondary,
        }
    });