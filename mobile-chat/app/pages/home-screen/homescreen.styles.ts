import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  scrollView: {},
  bookingCard: {
    flex: 1,
    padding: 10,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#dbd8d8",
    height: 150,
    backgroundColor: "#FFF",
    // boxShadow: "5px 5px #dbd8d8",
  },
  bookingCardInfo: {
    flex: 2,
  },
  bookingCardActions: {
    flexDirection: "row",
  },
  bookingCardActionLeft: {
    alignItems: "flex-start",
  },
  bookingCardActionRight: {
    alignItems: "flex-end",
    // paddingRight: 10
  },
});

export default styles;
