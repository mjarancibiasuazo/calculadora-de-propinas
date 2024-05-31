// Importamos los componentes necesarios y hooks personalizados
import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';
import OrderTotals from './components/OrderTotals';
import TipPercentageForm from './components/TipPercentageForm';
import { menuItems } from './data/db';
import useOrder from './hooks/useOrder';

// Definimos el componente principal App
function App() {
  // Usamos el hook personalizado useOrder para obtener el estado y las funciones
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

  return (
    <>
      {/* Encabezado de la aplicación */}
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-medium" >Calculadora de Propinas</h1>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          {/* Sección del menú */}
          <h2 className="text-4xl font-bold">Menú</h2>
          <div className="space-y-3 mt-10">
           {/* Mapeamos sobre los items del menú y renderizamos un componente MenuItem para cada uno */}
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
         {/* Sección del pedido */}
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ?(
            <>
             {/* Contenido del pedido */}
              <OrderContents
                order={order}
                removeItem={removeItem}
              />
               {/* Formulario para seleccionar el porcentaje de propina */}
              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />
              {/* Totales del pedido y propina */}
              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            // Mensaje cuando no hay elementos en el pedido
            <p className="text-center">No hay elementos en la orden</p>
          )}

        </div>

      </main>

    </>
  )
}

export default App
