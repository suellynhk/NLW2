import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string; 
}
//title e description são usadas no index.tsx do TeacherForm; ?: torna opcional- pq em algumas paginas utilizam e outras n

const PageHeader: React.FC<PageHeaderProps> = (props) => { //o PageHeader é do tipo: React.FC (function component)
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/" >
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content"> 
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> } 
                
                {props.children}
            </div>
        </header>
    )
}
/*
o operador lógico and (&&) só executa a segunda parte se a primeira for verdadeira.
é uma forma de fazer uma condicional dentro do jsx
Outra forma de fazer isso: 
{ props.description ? <p>{props.description}</p> : null } 
se tiver alguma informação de props.description mostra, se não(:) nulo.
*/
export default PageHeader;



