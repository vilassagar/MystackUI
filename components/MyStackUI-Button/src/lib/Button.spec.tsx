import { type VariantProps } from "tailwind-variants";
import { outlineButton, solidButton,ghostButton } from "./ButtonStyles";
// define all the button attributes
type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;



// extend the base button attributes
export  interface ButtonProps extends BaseButtonAttributes {
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  buttonStyle?: VariantProps<typeof solidButton |typeof outlineButton|typeof ghostButton>;
  className?:string,
  buttonVariant?: "solid" | "outline" | "ghost";
}