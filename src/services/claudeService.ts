interface ConsultaCliente {
    mensaje: string;
    userId?: string
}

interface RespuestaAgente{
    texto: string;
    tipoAccion: 'CATALOGO' | 'PERSONALIZADO';
    timestamp: Date
}