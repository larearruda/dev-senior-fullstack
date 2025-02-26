import { StackParamList } from "@/app";
import Header from "@/app/components/header";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert, ScrollView, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ContainerView, FormView } from "./create-ticket.styles";
import { Booking } from "@/app/model/Booking";
import InputButton from "@/app/components/input-button";
import { ColorOptions } from "@/app/components/theme/globals";

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
        <ContainerView>
          <Header headerTitle="Abrir um solicitação" />
          <ScrollView>
            <FormView>
              <Text> reserva numero # {booking.bookingCode} </Text>
            </FormView>
            <InputButton
              color={ColorOptions.primary}
              buttonLabel="Criar solicitação"
              onPress={onClickButton}
            />
          </ScrollView>
        </ContainerView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
