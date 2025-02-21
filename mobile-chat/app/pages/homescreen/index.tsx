import { StackNavigationProp } from "@react-navigation/stack";
import { View, Button, StyleSheet, Text } from "react-native";
import { StackParamList } from "../..";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "@/app/store/store";
import { getBookingsByCustomerId } from "@/app/services/bookings-service";
import { useEffect, useState } from "react";
import { Booking } from "@/app/model/Booking";

// Definição do tipo para as propriedades de navegação
export type HomeScreenProps = {
  navigation: StackNavigationProp<StackParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const auth = useSelector((state: ApplicationState) => state.authReducer);
  const dispatch = useDispatch();
  const [bookings, setBookings] = useState<Booking[]>([]);

  const getCustomerBookings = async () => {
    const bookings = await getBookingsByCustomerId("1");
    setBookings(bookings);
  };

  useEffect(() => {
    getCustomerBookings();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Tela Inicial com minhas reservas </Text>
      <Text style={styles.text}> {JSON.stringify(auth)}</Text>
      {Array.isArray(bookings) &&
        bookings.map((b: Booking) => (
          <>
            <View style={styles.bookingCard}>
              <Text> {b.bookingCode} </Text>
            </View>
          </>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  bookingCard: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    height: 200,
    margin: 12,
    // justifyContent: "center",
    width: "90%",
  },
});
