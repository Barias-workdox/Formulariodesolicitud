const e = {
  dataTypes: {
    string: {
      label: "Texto",
      description: "Tipo de dado de texto que permite inserir até 70 caracteres no total."
    },
    text: {
      label: "Parágrafo",
      description: "Tipo de dado de texto estendido que permite inserir parágrafos ou descrições longas de até 250 caracteres no total."
    },
    date: {
      label: "Data",
      description: "Tipo de dado de calendário que permite inserir e selecionar uma data."
    },
    list: {
      label: "Lista",
      description: "Tipo de dado de seleção única que permite escolher um valor entre diferentes opções predefinidas."
    },
    boolean: {
      label: "Booleano",
      description: "Tipo de dado de alternância que permite ativar ou desativar uma opção de forma binária (sim/não)."
    },
    number: {
      label: "Número",
      description: "Tipo de dado numérico que permite inserir apenas valores."
    },
    percentage: {
      label: "Porcentagem",
      description: "Tipo de dado numérico que permite inserir valores em formato de porcentagem."
    },
    email: {
      label: "E-mail",
      description: "Tipo de dado de texto que permite inserir endereços de e-mail em formato válido (exemplo: usuario@dominio.com)"
    },
    directory: {
      label: "Contato",
      description: "Tipo de dado de referência que permite selecionar um contato da biblioteca de contatos."
    },
    money: {
      label: "Moeda",
      description: "Tipo de dado numérico que permite inserir valores monetários com separador decimal e símbolo de moeda."
    },
    unknown: {
      label: "Desconhecido",
      description: ""
    }
  },
  metadata: {
    amount: {
      label: "Valor",
      description: "O valor de um contrato é o valor econômico total que uma das partes se compromete a pagar à outra. Representa a quantia acordada para a execução do contrato."
    },
    contract_type: {
      label: "Tipo de Contrato",
      description: "Indica os principais direitos e obrigações de um contrato. Por exemplo, pode ser um contrato de compra e fornecimento, arrendamento, prestação de serviços ou contrato de trabalho, entre outros."
    },
    counterparty: {
      label: "Contraparte",
      label_plural: "Contrapartes",
      description: "É a entidade ou parte com a qual o contrato é celebrado; é quem assina o acordo com você ou sua empresa e também assume direitos e obrigações de acordo com os termos estabelecidos."
    },
    end_date: {
      label: "Data de Término",
      description: "Representa a data oficial em que o contrato termina. A partir desse momento, as partes deixam de estar vinculadas pelos termos principais do contrato."
    },
    start_date: {
      label: "Data de Início",
      description: "É a data em que o contrato entra em vigor e sua obrigação principal se torna exigível. Marca o início das obrigações puras e simples estabelecidas no contrato."
    },
    party: {
      label: "Parte",
      label_plural: "Partes",
      description: "É a entidade ou pessoa que participa da celebração de um contrato; representa sua empresa ou você mesmo na assinatura do acordo e, assim como a contraparte, assume direitos e obrigações conforme os termos estabelecidos."
    }
  }
};
export {
  e as pt
};
//# sourceMappingURL=pt.js.map
