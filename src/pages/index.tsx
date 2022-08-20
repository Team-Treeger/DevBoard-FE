import styled from "styled-components";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <Wrapper>
      <Title>
        DevBoard <Emphasize>FE</Emphasize>
      </Title>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1``;

const Emphasize = styled.span`
  color: #4eafcf;
`;
