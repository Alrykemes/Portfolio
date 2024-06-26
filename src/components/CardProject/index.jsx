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
            <Button label2={<Icon className="icone" path={mdiLink} />}/>
        </a>
        <a href={linkRepo} target="_blank" rel="noopener noreferrer">
            <Button label2={<img src={Github} className="botao" alt="Github"/>}/>
        </a>
        </div>
        <p>{descricao}</p>
    </StyledCard>
);
}

export default CardProject;