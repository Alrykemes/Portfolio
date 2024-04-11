import { StyledCard } from "./Styles";
import Button from "../Button";
import Icon from "@mdi/react";
import { mdiLink } from "@mdi/js";
import Github from "../../assets/icons/github.svg";

export const CardProject = ({projImage, title, descricao, linkProj, linkRepo}) => {
return(
    <StyledCard>
        <img src={projImage} alt={title} />
        <h1>{title}</h1>
        <div className="botoesDiv">
        <a href={linkProj} target="_blank" rel="noopener noreferrer">
            <Button label2={<Icon path={mdiLink} size={1.3} />}/>
        </a>
        <a href={linkRepo} target="_blank">
            <Button label2={<img src={Github} className="botao"/>}/>
        </a>
        </div>
        <p>{descricao}</p>
    </StyledCard>
);
}

export default CardProject;