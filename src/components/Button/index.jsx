import { StyledButton } from "./Styles";

const Button = ({label, label2}) => {
    return(
        <StyledButton>
            {label} {label2}
        </StyledButton>
    );
}

export default Button;