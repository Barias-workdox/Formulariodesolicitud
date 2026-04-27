export const es = {
  dataTypes: {
    string: {
      label: 'Texto',
      description: 'Dato tipo texto que permite ingresar hasta 70 caracteres en total.',
    },
    text: {
      label: 'Párrafo',
      description:
        'Dato tipo texto extendido que permite ingresar párrafos o descripciones largas de hasta 250 caracteres en total.',
    },
    date: {
      label: 'Fecha',
      description: 'Dato tipo calendario que permite ingresar y seleccionar una fecha.',
    },
    list: {
      label: 'Lista',
      description:
        'Dato tipo selección única que permite escoger un valor entre distintas opciones predefinidas.',
    },
    boolean: {
      label: 'Booleano',
      description:
        'Dato tipo switch que permite activar o desactivar una opción en forma binaria (sí/no).',
    },
    number: {
      label: 'Número',
      description: 'Dato numérico que permite ingresar únicamente valores.',
    },
    percentage: {
      label: 'Porcentaje',
      description: 'Dato numérico que permite ingresar valores en formato porcentaje.',
    },
    email: {
      label: 'Correo electrónico',
      description:
        'Dato tipo texto que permite ingresar direcciones de correo electrónico en un formato válido (ejemplo: usuario@dominio.com)',
    },
    directory: {
      label: 'Contacto',
      description:
        'Dato tipo referencia que permite seleccionar un contacto desde la biblioteca de contactos.',
    },
    money: {
      label: 'Moneda',
      description:
        'Dato tipo numérico que permite ingresar valores monetarios con separador de decimales y símbolo de moneda.',
    },
    unknown: {
      label: 'Desconocido',
      description: '',
    },
  },
  metadata: {
    amount: {
      label: 'Monto',
      description:
        'El monto de un contrato es el valor económico total que una de las partes se compromete a pagar a la otra. Representa la suma acordada para la ejecución del contrato.',
    },
    contract_type: {
      label: 'Tipo de Contrato',
      description:
        'Indica los derechos y obligaciones principales de un contrato. Por ejemplo, puede tratarse de un contrato de compra y suministro, arrendamiento, prestación de servicios o contrato de trabajo, entre otros.',
    },
    counterparty: {
      label: 'Contraparte',
      label_plural: 'Contrapartes',
      description:
        'Es la entidad o parte con la que se celebra el contrato; es quien firma el acuerdo contigo o con tu empresa y también asume derechos y obligaciones según los términos establecidos.',
    },
    end_date: {
      label: 'Fecha de término',
      description:
        'Representa la fecha oficial en la que el contrato finaliza. A partir de ese momento, las partes dejan de estar obligadas por los términos principales del contrato.',
    },
    start_date: {
      label: 'Fecha de inicio',
      description:
        'Es la fecha en la que el contrato entra en vigor y su obligación principal se vuelve exigible. Marca el inicio de las obligaciones puras y simples establecidas en el contrato.',
    },
    party: {
      label: 'Parte',
      label_plural: 'Partes',
      description:
        'Es la entidad o persona que participa en la celebración de un contrato; representa a tu empresa o a ti mismo en la firma del acuerdo y, al igual que la contraparte, asume derechos y obligaciones conforme a los términos establecidos.',
    },
  },
};
