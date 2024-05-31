// Importamos el hook useCallback desde react
import {  useCallback } from 'react'
// Importamos el tipo OrderItem desde el archivo de tipos
import { OrderItem } from '../types'
// Importamos la función formatCurrency desde el archivo de helpers
import { formatCurrency } from '../helpers'

// Definimos las propiedades que va a recibir el componente OrderTotals
type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

/* 
 * Componente funcional que muestra los totales del pedido incluyendo la propina.
 * Recibe tres propiedades: 'order', 'tip' y 'placeOrder'.
 */
export default function OrderTotals({ order, tip, placeOrder } : OrderTotalsProps) {

    // Calcula el subtotal del pedido usando useCallback para memorizar la función
    const subtotalAmount = useCallback(() => order.reduce( ( total, item ) => total + ( item.price * item.quantity ), 0 ), [order])

    // Calcula el monto de la propina basado en el subtotal usando useCallback
    const tipAmount = useCallback(() => subtotalAmount() * tip, [ tip, order ])

    // Calcula el monto total a pagar (subtotal + propina) usando useCallback
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [ tip, order ])
  return (

    <>
    
    {/* Contenedor para mostrar los totales */}
     <div className="space-y-3">
        <h2 className="font-bold text-2xl">Totales y Propina</h2>
        <p>Subtotal a pagar: {''}
            <span className="font-bold">{ formatCurrency( subtotalAmount() ) }</span>
        </p>
        <p>Propina: {''}
            <span className="font-bold">{ formatCurrency( tipAmount() ) }</span>
        </p>
        <p>Total a Pagar: {''}
            <span className="font-bold">{ formatCurrency( totalAmount() ) }</span>
        </p>
     </div>
            {/* Botón para guardar la orden */}
     <button
        className='w-full bg-black p-3 uppercase text-white font-bold mt-10
        disabled:opacity-10'
        disabled={ totalAmount() === 0}
        onClick={ placeOrder}
        >
            Guardar Orden

     </button>
    
    </>
    
  )
}


{/*Este componente es utilizado para mostrar los totales de un pedido, incluyendo la propina, 
y permite al usuario confirmar y guardar la orden mediante un botón. */}