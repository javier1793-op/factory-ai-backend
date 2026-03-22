import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import asistenteRoutes from './routes/asistenteRoutes.js'

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use('/api/asistente',asistenteRoutes)

app.post ('/api/consulta', (req, res)=>{
    const {mensaje}= req.body;

    console.log("Recibimos una consulta sobre: ",mensaje);

    res.json({
        texto:"Hola javier, recibi tu mensaje. Pronto te responderé tu consulta",
        tipoAccion:"CATALOGO"
    })
});

app.listen(PORT, ()=>{
    console.log(`Servidor de la fabrica corriendo en http://localhost:${PORT}`)
})