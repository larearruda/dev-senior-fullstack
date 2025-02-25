import { StackParamList } from "@/app";
import Header from "@/app/components/header";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert, RefreshControl, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./create-ticket.styles";
import { Booking } from "@/app/model/Booking";
import InputButton from "@/app/components/input-button";

export type CreateTicketProps = {
  navigation: StackNavigationProp<StackParamList, "CreateTicket">;
  route: {
    params: {
      booking: Booking;
    };
  };
};

export default function CreateTicket({ navigation, route }: CreateTicketProps) {
  const booking: Booking = route.params?.booking;

  const onClickButton = () => {
    Alert.alert("msg");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Header headerTitle="Abrir um solicitação" />
          <ScrollView
          // contentContainerStyle={styles.scrollView}
          // refreshControl={
          // <RefreshControl
          //   refreshing={refreshing}
          //   onRefresh={onRefreshBookings}
          // />
          // }
          >
            <View style={styles.formBox}>
              <Text> reserva numero {booking.bookingCode} </Text>
            </View>
            <InputButton
              buttonLabel="Criar solicitação"
              onPress={onClickButton}
            />
          </ScrollView>
        </View>
        {/* <ScrollView
        // contentContainerStyle={styles.scrollView}
        >
        </ScrollView> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
