import React from "react";

import { Container } from "./styles";

type Text = {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
};

const Button: React.FC<Text> = ({ title, type, className }: Text) => {
  return (
    <Container>
      <button type={type} className={className}>
        {title}
      </button>
    </Container>
  );
};

export default Button;
