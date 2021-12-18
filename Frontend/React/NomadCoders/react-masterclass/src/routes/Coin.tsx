import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface Params {
  coinId: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<Params>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  useEffect(() => {
    (
      async() => {
        const infoData = await(
          await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
        ).json();

        const priceData = await(
          await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
        ).json();

        setInfo(infoData);
        setPriceInfo(priceData);
      }
    )();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{ state?.name || "Loading.." }</Title>
      </Header>
      {
        loading
          ? <Loader>Loading...</Loader>
          : null
      }
    </Container>
  );
}

export default Coin;
