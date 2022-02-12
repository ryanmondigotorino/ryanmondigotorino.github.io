import ButtonWrapper from "styles/styled-components/components/button.styled";

type Props = {
  type: "button" | "submit";
  className?: string;
  label?: string;
  children?: React.ReactChild;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const Button: React.FC<Props> = ({
  type,
  className,
  label,
  children,
  onClick,
}) => {
  return (
    <ButtonWrapper type={type} className={className || ""} onClick={onClick}>
      {children || label || ""}
    </ButtonWrapper>
  );
};

export default Button;
