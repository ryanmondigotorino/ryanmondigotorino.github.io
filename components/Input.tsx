import { Wrapper, Field } from 'styles/styled-components/components/input.styled';

type Props = {
  type: 'text' | 'number' | 'textArea';
  name: string;
  placeholder?: string;
  reference?: any;
  defaultValue?: string;
  styles?: React.CSSProperties;
}

const Input: React.FC<Props> = ({ type, name, defaultValue, placeholder, reference, styles }) => {
  const inputProps = {
    ref: reference,
    type,
    name,
    defaultValue,
    placeholder,
  };

  return (
    <Wrapper className={type} style={styles}>
      {type !== 'textArea' ? <Field.Input {...inputProps}  /> : <Field.TextArea {...inputProps} />}
    </Wrapper>
  );
};

export default Input;
