import { StackNavigationProp } from "@react-navigation/stack";
import { View, Button, StyleSheet, Text } from "react-native";
import { StackParamList } from "../..";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "@/app/store/store";
import { getBookingsByCustomerId } from "@/app/services/bookings-service";
import { useCallback, useEffect, useState } from "react";
import { Booking } from "@/app/model/Booking";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";

// Definição do tipo para as propriedades de navegação
export type HomeScreenProps = {
  navigation: StackNavigationProp<StackParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const auth = useSelector((state: ApplicationState) => state.authReducer);
  const dispatch = useDispatch();
  const [bookings, setBookings] = useState<Booking[]>([]);

  const getCustomerBookings = async () => {
    const customerBookings = await getBookingsByCustomerId("1");
    setBookings(customerBookings);
  };

  useEffect(() => {
    getCustomerBookings();
  }, [bookings]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    // SafeAreaProvider = exibe a tela abaixo da barra de notificaçao dos celulares
    <SafeAreaProvider>
      <SafeAreaView>
        {/* header */}
        <View style={styles.homeHeader}>
          <Text style={styles.text}>🏠 Minhas reservas </Text>
        </View>
        {/* header */}
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {bookings.map((b: Booking) => (
            <>
              <View style={styles.bookingCard}>
                <Text> {b.bookingCode} </Text>
              </View>
            </>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeHeader: {
    height: "20%",
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
  scrollView: {
    flex: 1,
  },
});
