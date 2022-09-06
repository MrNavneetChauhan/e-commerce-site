import { Container } from "@chakra-ui/react";
import { ScatterBoxLoader } from "react-awesome-loaders";
export const Loading = () => {
  return (
    <Container  w={"90%"} m="50px auto">
      <ScatterBoxLoader
        primaryColor={"#6366F1"}
        background={"white"}
      />
    </Container>
  );
};