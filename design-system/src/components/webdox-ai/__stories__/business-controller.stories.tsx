import { useToggle } from 'react-use';

import { BusinessSummaryController } from '../controllers/business-summary-controller';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/WebdoxAI/Controllers/BusinessSummaryController',
  component: BusinessSummaryController,
} as Meta<typeof BusinessSummaryController>;

const Template: StoryFn<typeof BusinessSummaryController> = (args) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <BusinessSummaryController
      {...args}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  summary: `**Informe Contractual**\n\n**Síntesis del documento:**  \nEl presente documento es un Contrato de Confidencialidad celebrado entre las empresas WEBDOX, representada por Iván Villanueva, y PLAZA MEVE SA DE CV, representada por Roberto Cantú. Mediante este contrato, ambas partes se comprometen a proteger y no divulgar la información confidencial intercambiada en el marco de una posible negociación y compra de servicios que una de las partes ofrece a la otra. Se establecen las obligaciones, excepciones y sanciones en caso de incumplimiento, definiendo la vigencia indefinida mientras exista relación comercial y un periodo posterior obligatorio de confidencialidad. Este documento cuenta con firmas electrónicas certificadas y cumple con la normativa NOM-151-SCFI-2016.\n\n**Información más importante:**\n\n- **Tipo de documento:** Contrato de Confidencialidad (NDA).  \n- **Partes contratantes:**  \n  - WEBDOX, representada por Iván Villanueva.  \n  - PLAZA MEVE SA DE CV, representada por Roberto Cantú.  \n- **Objeto del contrato:**  \n  - Proteger la información confidencial relacionada con planes de negocio y servicios que una parte ofrece a la otra, específicamente vinculada a la posible contratación de un servicio no especificado plenamente ("NOMBRE DEL SERVICIO A CONTRATAR").  \n- **Obligaciones principales:**  \n  - No divulgar información confidencial a terceros.  \n  - Proteger la información con el mismo cuidado que la propia.  \n  - Utilizar la información solo para fines autorizados en el contrato (compra de servicios/productos).  \n- **Excepciones a la confidencialidad:**  \n  - Información conocida antes de la divulgación.  \n  - Información desarrollada independientemente o recibida legalmente sin restricciones.  \n  - Información que sea de dominio público sin culpa del receptor.  \n  - Información recibida de terceros sin violación de confidencialidad.  \n- **Duración y vigencia:**  \n  - Vigencia indefinida mientras exista relación comercial.  \n  - Obligación de confidencialidad posterior a la terminación durante al menos dos años.  \n- **Devolución o destrucción de la información:**  \n  - En un plazo máximo de 7 días hábiles tras la terminación del contrato, con penalizaciones por incumplimiento.  \n- **Fecha del contrato:** Firmado electrónicamente el 4 de junio de 2025.  \n- **Jurisdicción:** Se someten a las leyes y tribunales del «Estado De Jurisdicción» (no especificado en el documento).  \n- **Firmas:**  \n  - Iván Villanueva (WEBDOX).  \n  - Roberto Cantú (PLAZA MEVE SA DE CV).  \n- **Certificación:** Cuenta con certificado de firmas electrónicas conforme a la NOM-151-SCFI-2016.  \n- **Otros aspectos importantes:**  \n  - No se ceden derechos ni obligaciones sin consentimiento por escrito.  \n  - Modificaciones solo mediante acuerdo escrito de ambas partes.  \n  - Responsabilidad por daños y perjuicios en caso de incumplimiento.  \n\nEste documento es un acuerdo formal y vinculante que establece claramente las condiciones para el intercambio seguro de información confidencial entre las partes involucradas en una negociación o relación comercial.`,
  user: { firstName: 'Lola' },
};
