import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { Container, Logo, YearButton, Months, MonthButton } from "./styles";

export default function Aside({ setMonth }) {
  return (
    <Container>
      <Logo />
      <YearButton>
        <FaRegCalendar size={20} />
        2020
      </YearButton>
      <Months>
        <MonthButton onClick={() => setMonth("01")}>Janeiro</MonthButton>
        <MonthButton onClick={() => setMonth("02")}>Fevereiro</MonthButton>
        <MonthButton onClick={() => setMonth("03")}>Março</MonthButton>
        <MonthButton onClick={() => setMonth("04")}>Abril</MonthButton>
        <MonthButton onClick={() => setMonth("05")}>Maio</MonthButton>
        <MonthButton onClick={() => setMonth("06")}>Junho</MonthButton>
        <MonthButton onClick={() => setMonth("07")}>Julho</MonthButton>
        <MonthButton onClick={() => setMonth("08")}>Agosto</MonthButton>
        <MonthButton onClick={() => setMonth("09")}>Setembro</MonthButton>
        <MonthButton onClick={() => setMonth("10")}>Outubro</MonthButton>
        <MonthButton onClick={() => setMonth("11")}>Novembro</MonthButton>
        <MonthButton onClick={() => setMonth("12")}>Dezembro</MonthButton>
      </Months>
    </Container>
  );
}
