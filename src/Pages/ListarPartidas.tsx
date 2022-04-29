import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import React,{useState} from "react";

export function ListarPartidas()
{


    const listaContras =new Array<number>();

    const listaJogadores = new Array<string>();

    const[listaTextNomesDuplas,setListTextoNomes] = useState<Array<string>>([]);
    const[jogadoresJogando,setJogadoresJogando] = useState<number[]>([0,1,2,3]);
    const[jogadoresDeFora,SetJogadoresDeFora] = useState<number[]>([4,5,6]);
    const [myArray, updateMyArray] = useState<number[]>();    
    const [inicioJogadores,setInicioJogadores] = useState([1,2,3,4]);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
    setOpen(false);
    };
    let valorDuplo = 1;


    function MontarDupla (){

        if(listaContras && listaJogadores){
            let dupla1 = "";
            let dupla2 = "";
            let dupla1ou2 = 1;
            let jogadores= new Array<string>();
            for (let index = 0; index < listaContras.length; index=index+2) 
            {

                if(listaContras[index]?.valueOf() || listaContras[index+1]?.valueOf())
                {
                    var jgA = listaContras[index]?.valueOf();
                    var jgB = listaContras[index+1]?.valueOf();

                    if(listaJogadores == null || listaJogadores.length ==0)
                    {
                        getJogadores();
                    }
                    
                    if(listaJogadores[jgA]?.valueOf() || listaJogadores[jgB]?.valueOf())
                    {
                            var jogadorA = listaJogadores[jgA]?.valueOf();
                            var jogadorB = listaJogadores[jgB]?.valueOf();
                            if(dupla1ou2==1){
                                dupla1 = jogadorA+" e " + jogadorB;
                                dupla1ou2 = 2;
                            }
                            else{
                                dupla2 =" X " + jogadorA+" e " + jogadorB;
                                dupla1ou2 = 1;
                                if(jogadorA && jogadorB)
                                    jogadores.push(dupla1+dupla2);                    
                            }
                    }

                } 
            }
            setListTextoNomes(jogadores);
        }

    }

    

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
    
    for (let index = 1; index < 8; index++) {
        listaJogadores.push(getJogador(index.toString()));
    }

}

function onGerarPartidas()
{ 
    setOpen(!open);
    if(!listaJogadores)
    {
        getJogadores();
    }

    ConfigurarPartidas();
    MontarDupla();    

    setOpen(false);
}

function ConfigurarPartidas(){

    listaContras.splice(0,listaContras.length); 
    listaContras.push(...[0,1,2,3]);  
    jogadoresJogando.splice(0,jogadoresJogando.length);
    jogadoresDeFora.splice(0,jogadoresDeFora.length);
    jogadoresJogando.push(...[0,1,2,3]);
    jogadoresDeFora.push(...[4,5,6]);

    let proximoJogador = -1;
    for (let index = 1; index < 30; index++) 
    {
    // const[jogadoresJogando,setJogadoresJogando] = useState<number[]>([0,1,2,3]);
    // const[jogadoresDeFora,SetJogadoresDeFora] = useState<number[]>([4,5,6]);
        var arrayJogadoresQueFicamDeFora = new Array<number>();        
        proximoJogador = jogadoresJogando[0];                
        jogadoresJogando.splice(jogadoresJogando.indexOf(proximoJogador),1);
        jogadoresDeFora.push(proximoJogador);
        arrayJogadoresQueFicamDeFora.push(...jogadoresJogando);        
        jogadoresJogando.splice(0,jogadoresJogando.length);
        //Lista dos jogadores para jogar
        listaContras.push(...jogadoresDeFora);        
        // Terminou a partida e sairam
        jogadoresJogando.push(...jogadoresDeFora);
        jogadoresDeFora.splice(0,jogadoresDeFora.length);        
        // Entra os jogadores que estavam de fora.
        jogadoresDeFora.push(...arrayJogadoresQueFicamDeFora); 
    }
}




return(
    <React.Fragment>      
        <div>
            <h1>Lista de Partida do Vôlei dos Amigos !</h1>   
            <Grid xs={8}>
                <Button variant="outlined" onClick={()=> onGerarPartidas()}>Gerar Partidas</Button>                
            </Grid>  
           
     
            <TableContainer component={Paper}>
                
            <Table sx={{ minWidth: 700 }} aria-label="customized table">                
                <TableBody>
                {
                    listaTextNomesDuplas.map((x)=>
                    <TableRow key={x}>
                        <TableCell component="th" scope="row">
                            {x}
                            </TableCell>
                    </TableRow>
                    )
                    
                }   
                </TableBody>
            </Table>
            </TableContainer>                        
        </div>            
    </React.Fragment>
);

   
}

export default ListarPartidas;