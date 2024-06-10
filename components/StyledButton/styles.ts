import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 16,
    marginHorizontal: "auto",
    backgroundColor: "rgb(41, 41, 241)",
    width: "60%",
  },
  buttonText: {
    textAlign: "center",
    paddingVertical: 8,
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
