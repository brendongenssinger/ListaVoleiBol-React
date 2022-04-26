import { Button, Grid } from "@mui/material";
import React,{useState} from "react";

export function ListarPartidas()
{


    const[listaContras, setListaContras] = useState<string[]>();
    const[listaJogadores,SetListJogadores] = useState<string[]>();
    const[jogadoresJogando,SetJogadoresJogando] = useState<number[]>();
    const[jogadoresDeFora,SetJogadoresDeFora] = useState<number[]>();

    function getJogador(number:string)
    {
        var jogador = localStorage.getItem(number)?.valueOf();
        if(jogador != null)
            return jogador;
        else
            return "";
    }

function getJogadores()
{    
    var jogador =[""];

    for (let index = 0; index < 7; index++) {
        jogador.splice(index,0,getJogador(index.toString()))
    }

    SetListJogadores(jogador);
}

function onGerarPartidas()
{
    getJogadores();    
    ConfigurarPartidas();    
}

function ConfigurarPartidas(){

    var inicioJogadores = [0,1,2,3];
    var inicioJogadoresFora = [4,5,6];

    for (let index = 0; index < 30; index++) 
    {
        if(index==0){
            SetJogadoresJogando(inicioJogadores)   
            SetJogadoresDeFora(inicioJogadoresFora)
        }
        else{
            var jogadoresRemovidos = inicioJogadores.splice(0,1);
            SetJogadoresJogando([]);
            for (let j = 0; j < inicioJogadoresFora.length; j++) {

                const element = inicioJogadoresFora[j];
                SetJogadoresJogando(inicioJogadores.splice(1,3,element));                
            }

            inicioJogadoresFora = jogadoresRemovidos
            
        }
        
    }

}

function SetPartida()
{
    // var mensagem = "";    

    // var valor = !jogadoresJogando[1];
    // if(valor != "undefinied"){
    //         mensagem = valor?.valueOf() ?? "";

    // }

    
    // setListaContras([""]);
        
}

return(
    <React.Fragment>
        <div>
            <h1>Partida 1</h1>   
            <Grid xs={8}>
                <Button variant="outlined" onClick={()=> onGerarPartidas()}>Gerar Partidas</Button>                
            </Grid> 
            <Grid xs={4}>
                <div>

                {listaContras?.map((x)=>(
                    
                        <p>{x}</p>
                ))}
                </div>

            </Grid>              
        </div>
    </React.Fragment>
);

   
}

export default ListarPartidas;