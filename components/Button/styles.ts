import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: "auto",
    backgroundColor: "rgb(41, 41, 241)",
    minWidth: '70%',
  },
  buttonText: {
    textAlign: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "white",
  },
  underlineButton: {
   paddingVertical : 8,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  pressed: {
    opacity: 0.8,
    backgroundColor: "rgb(65, 65, 245)",
  },
});

export default styles;
