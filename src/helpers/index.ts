// Función para formatear un número como una moneda
export function formatCurrency( quantity: number ){
    // Usamos Intl.NumberFormat para formatear el número
    return new Intl.NumberFormat('en-US', { 
        style: 'currency', // Estilo de formato es 'currency' (moneda)
        currency: 'USD' // Tipo de moneda es 'USD' (dólar estadounidense)
    }).format( quantity) // Formatea la cantidad y la retorna como una cadena de texto
}