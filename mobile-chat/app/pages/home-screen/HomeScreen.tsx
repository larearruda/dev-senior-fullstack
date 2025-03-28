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
import InputButton from "@/app/components/input-button/InputButton";
import CardArea from "@/app/components/card-area/card-area";
import Header from "@/app/components/header/Header";
import { Container } from "./home-screen.styles";

// Definição do tipo para as propriedades de navegação
export type HomeScreenProps = {
  navigation: StackNavigationProp<StackParamList, "Home">;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
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
    getBookingsByCustomerId("2")
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
        <Container>
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
            {bookings.map((b: Booking, index) => (
              <CardArea key={index}>
                {/* header pro card  */}
                {/* <Text> {b.bookingCode} </Text> */}
                <InputButton
                  color="primary"
                  buttonLabel="Abrir solicitação"
                  onPress={() => onPressBookingActions(b)}
                />
                <InputButton
                  color="dark"
                  buttonLabel="Falar com um atendente"
                  onPress={() => onPressTalkWithChat(b)}
                />
              </CardArea>
            ))}
          </ScrollView>
        </Container>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
