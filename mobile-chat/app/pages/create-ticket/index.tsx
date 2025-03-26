import { StackParamList } from "@/app";
import Header from "@/app/components/header";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert, ScrollView, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ContainerView, FormItem, FormView } from "./create-ticket.styles";
import { Booking } from "@/app/model/Booking";
import InputButton from "@/app/components/input-button";
import { ColorOptions } from "@/app/components/theme/globals";
import InputText from "@/app/components/input-text";
import React, { useState } from "react";

export type CreateTicketProps = {
  navigation: StackNavigationProp<StackParamList, "CreateTicket">;
  route: {
    params: {
      booking: Booking;
    };
  };
};

const CreateTicket = ({ navigation, route }: CreateTicketProps) => {
  const booking: Booking = route.params?.booking;

  //Dados do ticket
  const [category, setCategory] = useState(""); // Check-in, Wi-Fi, Limpeza, Alimentação, Cobrança, Cancelamento
  const [problemType, setProblemType] = useState(""); //  Reclamação, Dúvida, Solicitação Especial)
  const [title, setTitle] = useState("");
  const [msgDescription, setDescription] = useState("");

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
              {/*  header com os dados da reserva */}
              <Text> reserva numero # {booking.bookingCode} </Text>
              <Text> hotel # nome do hotel # </Text>
            </FormView>
            <FormView>
              <FormItem>
                <InputText
                  value={category}
                  onChangeInputText={setCategory}
                  label="Categoria da solicitação"
                />
              </FormItem>
              <FormItem>
                <InputText
                  value={problemType}
                  onChangeInputText={setProblemType}
                  label="Tipo de problema"
                />
              </FormItem>
            </FormView>
            <InputButton
              color="primary"
              buttonLabel="Criar solicitação"
              onPress={onClickButton}
            />
          </ScrollView>
        </ContainerView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CreateTicket;
