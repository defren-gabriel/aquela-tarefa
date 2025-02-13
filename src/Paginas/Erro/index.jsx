import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Erro.module.css";

const Erro = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/");
    }, []);

    return(
        <>
            <h1 className={styles.titulo1}>A pagina requisitada não existe, redirecionando para o início...</h1>
        </>
    );
}

export default Erro;