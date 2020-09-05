import React from 'react';
import Button from './styles';
// import { Container } from './styles';

function RoundButton({children}) {
  return (
    <Button>
      {children}
    </Button>
  );
}

export default RoundButton;