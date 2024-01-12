import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

interface CountryData {
  currencies: { [key: string]: { name: string } };
  flags: { png: string };
  languages: string[];
  name: { official: string };
  population: number;
  region: string;
}

const Countries = styled.div`
  display: flex;
  font-size: 1rem;
  flex-direction: column;
`;

const Country = styled.article`
  background-color: #fff;
  box-shadow: 0 2rem 5rem 1rem rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;
  width: 13rem;
  height: 20rem;
  border-radius: 0rem;
  margin: 0.2rem;
`;

const Image = styled.img`
  background-color: #eee;
  height: 8rem;
  object-fit: cover;
  width: 13rem;
`;

const Data = styled.div`
  padding: 0rem 0.2rem;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

const Region = styled.h4`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: #888;
`;

const Row = styled.p`
  margin-bottom: 1rem;
`;

const People = styled.span``;

const Mic = styled.span``;

const Currency = styled.span``;

function Card() {
  const [countryName, setCountryName] = useState("");
  const [data, setData] = useState<CountryData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      if (countryName.trim() === "") {
        setData(null);
        return;
      }

      setLoading(true);
      const response = await axios.get(
        "https://restcountries.com/v3.1/name/" + countryName
      );
      let [responseData] = response.data;
      setData(responseData);
    } catch (error) {
      setError('Error fetching data from the API')
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value);
  };

  return (
    <Countries>
      <div>
        <input
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter Country Name"
          type="text"
          value={countryName}
        />
      </div>
      {loading && <p>Loading...</p>}
      {data !== null && (
        <Country>
          <Image src={data.flags.png} alt="" />
          <Data>
            <Name>{data.name.official}</Name>
            <Region>{data.region}</Region>
            <Row>
              <People>{data.population}</People>
            </Row>
            <Row>
              <Mic>{Object.values(data.languages)[0]}</Mic>
            </Row>
            <Row>
              <Currency>{Object.values(data.currencies)[0].name}</Currency>
            </Row>
          </Data>
        </Country>
      )}
    </Countries>
  );
}

export default Card;
