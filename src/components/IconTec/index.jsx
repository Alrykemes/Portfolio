import { StyledIcon } from "./Styles";

export const Icones = ({svgLocal, titleIcon}) => {
    return(
        <StyledIcon>
        <img src={svgLocal} alt={titleIcon}/>
        <p>{titleIcon}</p>
        </StyledIcon>
    );
}

export default Icones;