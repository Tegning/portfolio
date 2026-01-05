import "./App.css";
import { Button, HStack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <HStack>
          <Button>Click me</Button>
        </HStack>
      </div>
    </>
  );
}

export default App;
