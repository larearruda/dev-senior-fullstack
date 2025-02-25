import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { StackParamList } from "../..";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "@/app/store/store";
import { getBookingsByCustomerId } from "@/app/services/bookings-service";
import { useCallback, useEffect, useState } from "react";
import { Booking } from "@/app/model/Booking";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import styles from "./homescreen.styles";
import Header from "@/app/components/header";
import InputButton from "@/app/components/input-button";

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

  const onPressBookingActions = (booking: Booking) => {
    console.log(booking);
    navigation.navigate("CreateTicket", { booking: booking });
  };

  const onPressTalkWithChat = (booking: Booking) => {
    navigation.navigate("Chat", { booking: booking });
  };

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
            <Header headerTitle="Minhas viagens" />
            {bookings.map((b: Booking) => (
              <View style={styles.bookingCard} key={b.id}>
                <View style={styles.bookingCardInfo}>
                  <Text> {b.bookingCode} </Text>
                </View>

                <View style={styles.bookingCardActions}>
                  <View style={styles.bookingCardActionLeft}>
                    {/* <TouchableOpacity onPress={() => onPressBookingActions(b)}>
                      <Text>Abrir uma solicitação</Text>
                    </TouchableOpacity> */}
                    <InputButton
                      buttonLabel="Abrir solicitação"
                      onPress={() => onPressBookingActions(b)}
                    />
                  </View>

                  <View style={styles.bookingCardActionRight}>
                    {/* <TouchableOpacity
                      onPress={() => Alert.alert("chamar atendente")}
                    >
                      <Text>Falar com um atendente</Text>
                    </TouchableOpacity> */}
                    <InputButton
                      buttonLabel="Falar com um atendente"
                      onPress={() => onPressTalkWithChat(b)}
                    />
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
