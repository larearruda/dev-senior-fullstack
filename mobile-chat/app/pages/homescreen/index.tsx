import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { StackParamList } from "../..";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "@/app/store/store";
import { getBookingsByCustomerId } from "@/app/services/bookings-service";
import { useCallback, useEffect, useState } from "react";
import { Booking } from "@/app/model/Booking";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import styles from "./homescreen.styles";

// Definição do tipo para as propriedades de navegação
export type HomeScreenProps = {
  navigation: StackNavigationProp<StackParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const auth = useSelector((state: ApplicationState) => state.authReducer);
  const dispatch = useDispatch();
  const [bookings, setBookings] = useState<Booking[]>([]);

  const [refreshing, setRefreshing] = useState(false);

  const getCustomerBookings = async () => {
    const customerBookings = await getBookingsByCustomerId("1");
    // console.log(customerBookings.response);
    if (customerBookings.success) {
      setBookings(customerBookings.response);
    } else setBookings([]);
    // console.log(bookings);
  };
  const onRefreshBookings = useCallback(() => {
    console.log("atualizar reservas");
    setRefreshing(true);
    // setTimeout(() => {
    //   setRefreshing(false);
    // }, 1000);
    getBookingsByCustomerId("1")
      .then((updatedBookings) => {
        setRefreshing(false);
        if (updatedBookings.success) {
          setBookings(updatedBookings.response);
        } else setBookings([]);
      })
      .catch((e) => {
        setRefreshing(false);
        setBookings([]);
      });
  }, []);

  useEffect(() => {
    getCustomerBookings();
  }, []);

  return (
    // SafeAreaProvider = exibe a tela abaixo da barra de notificaçao dos celulares
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView
            // contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefreshBookings}
              />
            }
          >
            {/* header */}
            <View style={styles.homeHeader}>
              <Text>🏠 Minhas viagens </Text>
            </View>
            {/* header */}
            {bookings.map((b: Booking) => (
              <View style={styles.bookingCard} key={b.id}>
                <Text> {b.bookingCode} </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
