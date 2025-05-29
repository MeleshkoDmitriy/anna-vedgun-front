import clsx from 'clsx';
import styles from './Spinner.module.scss';
import { LoadingIcon } from '../icons';
import { iconInlineStyles } from '@/styles/inline-styles';

type TSpinnerColors = 'white' | 'black' | 'gray';

interface SpinnerProps {
  color: TSpinnerColors;
}

export const Spinner = ({ color }: SpinnerProps) => {
  const spinnerStyles = clsx(styles.spinner, {
    [styles.white]: color === 'white',
    [styles.black]: color === 'black',
    [styles.gray]: color === 'gray',
  });

  return (
    <div className={spinnerStyles}>
      <LoadingIcon style={iconInlineStyles} />
    </div>
  );
};
