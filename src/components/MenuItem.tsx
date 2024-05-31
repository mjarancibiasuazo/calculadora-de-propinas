
//Importamos el tipo de MenuItem desde el archivo de tipos(index.ts)
import type { MenuItem } from '../types/index';

//Definmos las propiedades que va a recibir el componente MenuItem
type MenuItemProps = {
  item: MenuItem  // La propiedad 'item' es de tipo MenuItem
  addItem: ( item: MenuItem ) => void  // La propiedad 'addItem' es una función que recibe un MenuItem y no retorna nada
}
/*Mostramos el Menú*/
/*Componente Funcional que muestra un elemento del menú 
  Recibe las propiedades item y addItem
*/
export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
   <button
    className="border-2 border-teal-400 hover:bg-teal-200  p-3 text-lg rounded-lg flex justify-between w-full"
    onClick={ () => addItem( item ) }  // Al hacer clic en el botón, se llama a la función addItem con el item actual
   >
    {/* Muestra el nombre del item en un párrafo con formato de texto mediano*/}
    <p className="font-weight-medium">{ item.name }</p>
    <p className="font-bold">${ item.price }</p>
   </button>
  )
}

{/*Este componente es utilizado para mostrar un elemento de menú en una interfaz de usuario, 
permitiendo al usuario agregar el elemento a algún tipo de carrito o lista mediante un clic.*/}