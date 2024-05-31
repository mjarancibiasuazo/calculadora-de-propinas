// Definimos las opciones de propina disponibles

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  // Definimos las propiedades que va a recibir el componente TipPercentageForm
  type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>, // La propiedad 'setTip' es una función para actualizar el estado de la propina
    tip: number  // La propiedad 'tip' es un número que representa el porcentaje de propina seleccionado
  }

  /* 
 * Componente funcional que muestra un formulario para seleccionar el porcentaje de propina.
 * Recibe dos propiedades: 'setTip' y 'tip'.
 */
export default function  TipPercentageForm( { setTip, tip } : TipPercentageFormProps) {
  return (
    <div>
      {/* Título del formulario de propina */}
        <h3 className="font-black text-2xl">Propina</h3>

        <form>
                {/* Iteramos sobre las opciones de propina para generar los inputs de radio */}
                { tipOptions.map( tipOption => (
                    <div className="flex gap-2" key={ tipOption.id }>
                      {/* Input de radio para seleccionar la propina */}
                      <input 
                        id={ tipOption.id } 
                        type="radio" 
                        name="tip" 
                        value={ tipOption.value }
                        onChange={ e => setTip( +e.target.value ) }
                        checked={ tipOption.value === tip }
                        
                        />
                        {/* Etiqueta para el input de radio */}
                        <label 
                        htmlFor={ tipOption.id }
                        >
                        { tipOption.label }
                        </label>
                    </div>
                ))}

        </form>

    </div>
  )
}

{/*Este componente es utilizado para permitir al usuario seleccionar un porcentaje de propina mediante opciones de radio, 
actualizando el estado de la propina seleccionado en la aplicación. */}