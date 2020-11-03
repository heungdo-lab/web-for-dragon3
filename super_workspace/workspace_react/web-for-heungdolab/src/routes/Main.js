import React, { useState } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import moment from "moment";

const MONTH = "Month";
const DATE = "Date";
const YEAR = "Year";

const Container = styled.div`
  ${(props) => props.theme.flexBox};
  width: 100%;
  min-height: 50vh;
  @media (max-width: 450px) {
    &:not(:last-child) {
      padding-top: 5px;
    }
  }
  @media (min-width: 450px) {
    padding-top: 70px;
  }
`;

const Wrapper = styled.div``;

const ResultBox = styled.div`
  ${(props) => props.theme.flexBox};
  width: 100%;
  height: 80px;
  margin-bottom: 50px;
  ${(props) => props.theme.resultBox};
`;

const ResultText = styled.h1`
  color: white;
`;

const DateContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 100px;
  }
  @media (max-width: 450px) {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
  @media (min-width: 450px) and (max-width: 650px) {
    &:not(:last-child) {
      margin-bottom: 75px;
    }
  }
`;

const DateBox = styled.div`
  display: flex;
`;

const TextInputBox = styled.div`
  &:not(:last-child) {
    margin-right: 20px;
  }
  @media (max-width: 450px) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  @media (min-width: 450px) and (max-width: 650px) {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

const TextInput = styled.input`
  width: 140px;
  height: 50px;
  font-size: 40px;
  color: ${(props) => props.theme.blackColor};
  padding: 10px 20px;
  text-align: center;
  ::placeholder {
    ${(props) => props.placeholder}
  }
  :focus {
    outline-color: ${(props) => props.theme.redColor};
  }
  @media (max-width: 450px) {
    width: 80px;
    height: 40px;
    font-size: 20px;
    padding: 5px 5px;
  }
  @media (min-width: 450px) and (max-width: 650px) {
    width: 110px;
    height: 45px;
    font-size: 30px;
    padding: 7px 8px;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.blackColor};
  font-size: 45px;
  margin-bottom: 0px;
  @media (max-width: 450px) {
    font-size: 25px;
  }
  @media (min-width: 450px) and (max-width: 650px) {
    font-size: 35px;
  }
`;

const Text = styled.h1`
  color: ${(props) => props.theme.blackColor};
  font-size: 24px;
  margin-right: 30px;
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export default () => {
  const newDate = new Date();
  const month = moment(newDate).format("MM");
  const date = moment(newDate).format("DD");
  const year = moment(newDate).format("YYYY");
  const [startMonth, setStartMonth] = useState(month);
  const [startDate, setStartDate] = useState(date);
  const [startYear, setStartYear] = useState(year);
  const [endMonth, setEndMonth] = useState(month);
  const [endDate, setEndDate] = useState(date);
  const [endYear, setEndYear] = useState(year);

  const startOnChange = (event) => {
    const {
      target: { value, placeholder },
    } = event;

    if (placeholder === month && value !== "") setStartMonth(value);
    else if (placeholder === date && value !== "") setStartDate(value);
    else if (placeholder === year && value !== "") setStartYear(value);
  };

  const endOnChange = (event) => {
    const {
      target: { value, placeholder },
    } = event;

    if (placeholder === month && value !== "") setEndMonth(value);
    else if (placeholder === date && value !== "") setEndDate(value);
    else if (placeholder === year && value !== "") setEndYear(value);
  };

  const daysCalculator = (item) => {
    const calStartDate = moment(
      `${startMonth}.${startDate}.${startYear}`,
      "MM.DD.YYYY"
    );
    const calEndDate = moment(
      `${endMonth}.${endDate}.${endYear}`,
      "MM.DD.YYYY"
    );

    const remaingDays = calEndDate.diff(calStartDate, "days");

    if (remaingDays.toString() === "NaN") {
      return "X";
    } else if (remaingDays < 0) {
      return `D+${Math.abs(remaingDays)}`;
    } else {
      return `D-${remaingDays}`;
    }
  };

  return (
    <>
      <Helmet>
        <title>Days Calculator</title>
      </Helmet>
      <Container>
        <Wrapper>
          <ResultBox>
            <ResultText>{daysCalculator()}</ResultText>
          </ResultBox>
          <DateContainer>
            <Title>Start Date</Title>
            <DateBox>
              <TextInputBox>
                <Text>{MONTH}</Text>
                <TextInput placeholder={month} onChange={startOnChange} />
              </TextInputBox>
              <TextInputBox>
                <Text>{DATE}</Text>
                <TextInput placeholder={date} onChange={startOnChange} />
              </TextInputBox>
              <TextInputBox>
                <Text>{YEAR}</Text>
                <TextInput placeholder={year} onChange={startOnChange} />
              </TextInputBox>
            </DateBox>
          </DateContainer>
          <DateContainer>
            <Title>End Date</Title>
            <DateBox>
              <TextInputBox>
                <Text>{MONTH}</Text>
                <TextInput placeholder={month} onChange={endOnChange} />
              </TextInputBox>
              <TextInputBox>
                <Text>{DATE}</Text>
                <TextInput placeholder={date} onChange={endOnChange} />
              </TextInputBox>
              <TextInputBox>
                <Text>{YEAR}</Text>
                <TextInput placeholder={year} onChange={endOnChange} />
              </TextInputBox>
            </DateBox>
          </DateContainer>
        </Wrapper>
      </Container>
    </>
  );
};
