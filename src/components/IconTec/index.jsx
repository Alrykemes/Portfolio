import { StyledIcon } from "./Styles";

export const Icones = ({svgLocal, titleIcon}) => {
    return(
        <StyledIcon>
        <img src={svgLocal}/>
        <p>{titleIcon}</p>
        </StyledIcon>
    );
}

export default Icones;