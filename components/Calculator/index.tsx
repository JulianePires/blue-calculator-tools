import { Grid, GridItem, IconButton } from "@chakra-ui/react";
import { useState } from "react";

export const Calculator = () => {
  const initialState = 0;

  /* STATES */

  const [value, setValue] = useState<number>(initialState);
  const [memory, setMemory] = useState<number>(initialState);
  const [answear, setAnswear] = useState<number>(initialState);

  /* MEMORY */

  function handleAddToMemory(value: number) {
    setMemory(memory + value);
  }

  function handleDeleteFromMemory(value: number) {
    setMemory(memory - value);
  }

  function handleClearMemory() {
    setMemory(initialState);
  }

  /* INPUT VALUE */

  function onChangeValue(value: number) {
    setValue(value);
  }

  function handleClearValue() {
    setValue(initialState);
  }

  /* ANSWEAR */

  function handleChangeAnswear(value: number) {
    setAnswear(value);
  }

  function handleClearAnswear() {
    setAnswear(initialState);
  }

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <GridItem colSpan={1}>
        <IconButton aria-label="add memory" />
      </GridItem>
    </Grid>
  );
};
