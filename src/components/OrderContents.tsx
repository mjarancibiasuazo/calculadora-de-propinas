
//Importamos la función formatCurrency desde el archivo helpers
import { formatCurrency } from "../helpers"

//Importamos los tipos MenuItem y OrderItem desde el archivo tipos
import { MenuItem, OrderItem } from "../types"

//Definimos las propiedades que va a recibir el componente OrderContents
type OrderContenstProps = {
    order: OrderItem[], //la propiedad 'order' es un array de objetos de tipo 'OrderItem'
    removeItem: ( id:MenuItem['id']) => void // La propiedad 'removeItem' es una función que recibe el id de un MenuItem y no retorna nada
}

/* 
 * Componente funcional que muestra el contenido de un pedido.
 * Recibe dos propiedades: 'order' y 'removeItem'.
 */

export default function OrderContents({ order, removeItem } : OrderContenstProps) {
  return (
    <div>
       {/* Título del contenido del pedido */}
        <h2 className="font-bold text-4xl">Consumo</h2>

        <div className="space-y-3 mt-10">
          {/* Iteramos sobre el array 'order' para mostrar cada item */}
            { order.map( ( item ) => (
                    <div className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b" 
                        key={item.id}
                    >
                    
                    <div>
                        <p className="text-lg">
                          {/* Muestra el nombre y el precio del item formateado */}
                          { item.name } - { formatCurrency( item.price ) }
                        </p>
                        <p className="font-black">
                          {/* Muestra la cantidad del item y el precio total (precio * cantidad) */}
                          Cantidad: { item.quantity } - { formatCurrency( item.price * item.quantity ) }
                        </p>
                    </div>
                     {/* Botón para eliminar el item del pedido */}
                        <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                        onClick={ () => removeItem( item.id ) }
                        >
                          X
                        </button>
                    </div>
                ))}
        </div>
    </div>
  )
}


{/*Este componente es utilizado para mostrar una lista de items en un pedido, 
permitiendo al usuario ver detalles de cada item y eliminar items del pedido mediante un botón.*/}
