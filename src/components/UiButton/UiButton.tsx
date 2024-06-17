import { Button, ButtonProps } from "@chakra-ui/react";
import { Variants } from "../../constants";

interface UiButtonProps extends ButtonProps {
  variant?: Variants.ChakraButtonVariant;
}

export default function UiButton({
  variant = "outline",
  ...props
}: UiButtonProps) {
  return (
    <Button {...props} variant={variant} data-testid="@UiButton" bg="brand.900">
      {props.children}
    </Button>
  );
}
