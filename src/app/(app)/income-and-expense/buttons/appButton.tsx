/* import { Button, ButtonGroup } from '@chakra-ui/react'

<Button colorScheme='blue'>Button</Button> */

import React from 'react';

interface Buttons {
  onClick: () => void;
  label: string;
}

const Button: React.FC<Buttons> = ({ onClick, label }) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
};

export default Button;