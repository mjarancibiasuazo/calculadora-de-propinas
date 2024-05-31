// Importamos el hook useState desde react
import { useState } from 'react' 
// Importamos los tipos MenuItem y OrderItem desde el archivo de tipos
import { MenuItem, OrderItem } from '../types/index' //Importamos los types

// Definimos el hook personalizado useOrder
export default function useOrder() {

  // Estado para almacenar los items del pedido (order) y la función para actualizarlo (setOrder)
  const [order, setOrder] = useState<OrderItem[]>([]) //Generic
  
  // Estado para almacenar la propina (tip) y la función para actualizarlo (setTip)
  const [ tip, setTip ] = useState(0)

  // Función para agregar un item al pedido
  const addItem = ( item: MenuItem ) => {
    // Verifica si el item ya existe en el pedido
    const itemExist = order.find(orderItem => orderItem.id === item.id)
    if( itemExist ){
      // Si el item ya existe, incrementa su cantidad
      const updatedOrder = order.map( orderItem => orderItem.id === item.id ? 
        { ...orderItem, quantity: orderItem.quantity + 1 }: 
        orderItem
      )
      setOrder(updatedOrder) 
    
    }else{
      // Si el item no existe, agrégalo con una cantidad de 1
      const newItem = {...item, quantity: 1}
      setOrder([...order, newItem ])
    }
}
  // Función para eliminar un item del pedido
  const removeItem = ( id : MenuItem['id']) => {
    // Filtra el pedido para excluir el item con el id especificado
   setOrder (order.filter( item => item.id !== id ) )
  }

  // Función para completar el pedido
  const placeOrder = () => {
    // Resetea el pedido y la propina a sus valores iniciales
    setOrder([])
    // Reset the tip to 0
    setTip(0)
  }
  
    // Retornamos un objeto con el estado y las funciones para manipularlo
    return {
      order,
      tip,
      setTip,
      addItem,
      removeItem,
      placeOrder
    }
    
  
}

{/*Este hook personalizado useOrder proporciona un conjunto de estados y funciones que permiten gestionar un pedido, 
incluyendo la adición y eliminación de items, así como el cálculo y el reseteo de la propina. 
Es útil para encapsular la lógica del pedido en una aplicación React.*/}