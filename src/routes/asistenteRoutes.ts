import { Router } from "express";

const router = Router();

router.post('/consultar', (req, res)=>{
    const {mensaje, cliendId}=req.body;

    if(!mensaje){
        return res.status(400).json({error:'El mensaje es obligatorio'});
    }

    console.log(`Consulta recibida de ${cliendId || 'Anónimo'}:${mensaje}`)

    res.json({
        respuesta:'Recibi tu consulta sobre muebles, Estamos conectando con claude..',
        status:'recibido'
    })
})

export default router;