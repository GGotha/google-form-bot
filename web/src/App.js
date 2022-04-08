import { useCallback, useState } from "react";
import axios from "axios";
import { Box, Button, Text } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);
  const [currentInterval, setCurrentInterval] = useState(3000);

  const vote = useCallback(async () => {
    try {
      await axios.post(
        "https://docs.google.com/forms/d/e/1FAIpQLSdZDiHCztvOE4SOICzZBPAMWfdYnbMm5WVPiHedSjB-6y0Klg/formResponse?entry.1135870437=Op%C3%A7%C3%A3o%204%20%E2%80%93%20Samsung%20versus%20Apple&draftResponse=%5B1,null,%5B%5Bnull,null,%5B%22Op%C3%A7%C3%A3o%204%20%E2%80%93%20Samsung%20versus%20Apple%22%5D,false,null,null,1135870437%5D%5D,null,%5B%22-9015358315957581321%22%5D%5D"
      );

      setCount((count) => count + 1);
    } catch (err) {
      console.log("erro ao computar voto");
    }
  }, []);

  const voteEachSeconds = useCallback(
    (seconds) => {
      clearInterval(currentInterval);
      const timer = setInterval(vote, seconds);

      setCurrentInterval(timer);
    },
    [currentInterval, vote]
  );

  const onStop = useCallback(() => {
    clearInterval(currentInterval);
  }, [currentInterval]);

  return (
    <Box bgColor="#333" h="100vh">
      <Box pos="absolute" top="50%" right="50%" transform="translate(50%,-50%)">
        <Text color="white" textAlign="center">
          <Text fontSize="48px">{count}</Text> votos computados
        </Text>

        <Box display="flex" my={5}>
          <Button
            bgColor="black"
            color="white"
            onClick={() => voteEachSeconds(5000)}
          >
            Votar a cada 5s
          </Button>
          <Box mx={1} />
          <Button
            bgColor="black"
            color="white"
            onClick={() => voteEachSeconds(2000)}
          >
            Votar a cada 2s
          </Button>
          <Box mx={1} />
          <Button
            bgColor="black"
            color="white"
            onClick={() => voteEachSeconds(1000)}
          >
            Votar a cada 1s
          </Button>
          <Box mx={1} />
          <Button
            bgColor="black"
            color="white"
            onClick={() => voteEachSeconds(500)}
          >
            Votar a cada .5s
          </Button>
          <Button
            bgColor="black"
            color="white"
            onClick={() => voteEachSeconds(100)}
          >
            Votar a cada .1s
          </Button>
          <Box mx={1} />
          <Button bgColor="red" color="white" onClick={onStop}>
            Parar
          </Button>
          <Box mx={1} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
