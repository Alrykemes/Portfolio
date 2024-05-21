import { StyledCard } from "./Styles";
import Icon from "@mdi/react";

export const CardContato = ({titleContato, content, content2, content3, pathIcon}) => {
    return(
        <StyledCard>
            <h3><Icon className="icone" path={pathIcon}/>{titleContato}</h3>
            <p>{content}</p>
            <p>{content2}</p>
            <p>{content3}</p>
        </StyledCard>
    );
}

export default CardContato;