import { ButtonOutline } from './button-outline/ButtonOutline';
import { ButtonSolid } from './button-solid/ButtonSolid';
import { ComponentPropsWithoutRef, FC } from 'react';

export type TButtonVariant = 'solid' | 'outline';
export type TButtonSize = 'sm' | 'md';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant: TButtonVariant;
  size: TButtonSize;
  text: string;
  onClick?: () => void;
  link?: string;
}

export const Button: FC<ButtonProps> = ({ variant, size, text, onClick, link }) => {
  switch (variant) {
    case 'solid':
      return <ButtonSolid size={size} onClick={onClick} link={link} text={text} />;
    case 'outline':
      return <ButtonOutline size={size} onClick={onClick} link={link} text={text} />;
    default:
      <ButtonOutline size={size} onClick={onClick} link={link} text={text} />;
  }
};
