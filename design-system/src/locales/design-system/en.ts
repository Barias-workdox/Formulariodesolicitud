export const en = {
  403: {
    actionButton: 'Back to the portal',
    description: "We're sorry, but you do not have permission to view this content.",
    subtitle: 'Access denied',
    title: '403',
  },
  404: {
    actionButton: 'Go to homepage',
    description: 'It seems this resource is no longer available or never existed.',
    title: 'Page not found',
    subtitle: 'An error has occurred',
  },
  accountMenu: {
    languageSelector: {
      title: 'Language',
    },
  },
  boolean: {
    true: 'Yes',
    false: 'No',
  },
  dataTable: {
    addColumns: 'Add columns',
    addColumnsEmpty: 'Empty column list',
    sortBy: {
      title: 'Sort by',
      hideColumn: 'Hide column',
      dataType: {
        string: {
          asc: 'A to Z',
          desc: 'Z to A',
        },
        number: {
          asc: 'Lowest to highest',
          desc: 'Highest to lowest',
        },
        date: {
          asc: 'Oldest first',
          desc: 'Newest first',
        },
      },
    },
    ariaLabels: {
      ascChecked: 'ascending checked',
      descChecked: 'descending checked',
      sortingAsc: 'sorting ascending',
      sortingDesc: 'sorting descending',
      sortingButton: 'sorting button',
      resizeColumnLine: 'resize column line',
    },
  },
  dynamicDialog: {
    header: {
      actions: {
        expand: 'Expand',
        minimize: 'Minimize',
        close: 'Close',
      },
    },
  },
  filePicker: {
    select: 'Select document',
    uploadStatuses: {
      progressCompleted: '100% Completed',
      progress: '{{number}}% Uploading',
    },
  },
  filtersGroup: {
    activeFiltersCount: '{{count}} out of {{max}} filters applied',
    cleanAllFilters: 'Clear filters',
    maxActiveFiltersReached:
      'You have reached the maximum number of filters allowed. Remove one to add another.',
  },
  locales: {
    en: 'English',
    es: 'Spanish',
    pt: 'Portuguese',
    fr: 'French',
  },
  datePicker: {
    placeholder: 'Select a date',
  },
  messageBox: {
    ariaLabels: {
      input: 'Rich text editor',
      boldButton: 'Bold',
      italicButton: 'Italic',
      underlineButton: 'Underline',
    },
  },
  general: {
    back: 'Back',
    collapse: 'Collapse',
    continue: 'Continue',
    cancel: 'Cancel',
    delete: 'Remove',
    drag: 'Drag',
    edit: 'Edit',
    empty: 'No results',
    empty2: 'No results',
    items_one: '{{data}} item',
    items_other: '{{data}} items',
    menu: 'Menu',
    regenerate: 'Regenerate',
    save: 'Save',
    search: 'Search',
    send: 'Send',
    writeMessage: 'Write a message...',
    beta: 'Beta',
    betaVersion: 'Beta Version',
    close: 'Close',
    translate: 'Translate',
    explain: 'Explain',
    expand: 'Expand',
    goBack: 'Go back',
    stop: 'Stop',
    download: 'Download',
    clearContent: 'Clear content',
    editContent: 'Edit content',
    confirmEdit: 'Confirm edit',
    cancelEdit: 'Cancel edit',
    stepOf: 'Step {{current}} of {{steps}}',
    rename: 'Rename',
  },
  multipleAvatars: {
    additional_one: '+{{count, number}} additional',
    additional_other: '+{{count, number}} additional',
  },
  inactivityModal: {
    expiredSession: 'Your session has expired by inactivity.',
    keepSession: 'Keep me connected',
    login: 'Log in',
    subtitle: 'Inactive user',
    warning: 'Beware, your session is about to expire.',
  },
  select: {
    placeholder: 'Select an option',
    create: 'Add',
  },
  notification: {
    closeNotification: 'Close notification',
  },
  table: {
    column: 'Column',
    columnOrderAsc: 'Ascending',
    columnOrderDesc: 'Descending',
    add: 'Add {{name}}',
    order: 'Order',
    removeColumn: 'Remove Column',
    columnsEmpty: 'No columns selected',
    delete: 'Delete',
    positionSignature: 'Position signature',
    edit: 'Edit',
    view: 'View',
  },
  userMultiselect: {
    placeholder: 'First name, last name, email...',
    saveButton: 'Save',
    noResults: 'No results found',
    selectUsers: 'Select users',
  },
  entitiesMultiselect: {
    placeholder: 'Select...',
    searchPlaceholder: 'Search by name...',
    people: 'People',
    company: 'Companies',
    validationPending: 'Pending validation',
    noResults: 'No results',
  },
  week_days: {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  },
  collaborationDetails: {
    status: {
      active: 'In progress',
      canceled: 'Cancelled',
      finished: 'Finished',
    },
    header: {
      customerName: '<strong>Organization:</strong> {{customerName}}',
    },
    reason: 'Reason',
    collaborationHistory: 'Collaboration history',
    approvalActivity: 'Approval activity',
    updatedText: {
      updated: 'Updated on {{date}}',
      pending: 'Approval pending',
      rejected: 'Rejected the document on {{date}}',
      approved: 'Approved the document on {{date}}',
    },
    documentStatus: {
      pending: 'Pending',
      longPending: 'Pending approval',
      approved: 'Approved',
      rejected: 'Rejected',
    },
    deletedDocumentAlert: {
      title:
        'This document has been deleted from the Workflow and is no longer possible to register it in the collaboration.',
    },
  },
  contractNegotiationCollaboration: {
    forms: {
      comments: {
        label: 'Comments (Optional)',
        placeholder: 'Write a comment describing the approval.',
      },
      uploadNewVersion: {
        placeholder: 'Write a comment that describes the version change.',
      },
    },
    bannerCollaboration: {
      canceled:
        'The negotiation was canceled in {{date}} You can review the reason for cancellation in the history.',
      finished: 'The negotiation ended in {{date}}',
    },
    bannerDocument: {
      approved: 'You approved this document in {{date}}',
      pending: 'Your approval is pending for this document.',
    },
    documentsTab: {
      documents: 'Documents',
      negotiable: 'Negotiable',
      background: 'Background',
    },
    commentsTab: {
      comments: 'Comments',
    },
    historyTab: {
      activityHistory: 'Activity history',
    },
    activityTab: {
      title: 'Collaboration Status',
      approvers: 'Approvers',
      filterByDocument: 'Filter by document:',
      banner: {
        status: {
          active: {
            title: 'Pending negotiation',
            subtitle: 'Updated in {{date}}',
          },
          canceled: {
            title: 'Negotiation canceled',
            subtitle: 'Canceled in {{date}}',
          },
          finished: {
            title: 'Negotiation finished',
            subtitle: 'Ended in {{date}}',
          },
        },
      },
      thirdParty: {
        status: {
          approved: 'Approved in {{date}}',
          pending: 'Pending approval.',
        },
      },
    },
    approvalInformation:
      'The approval will be recorded in the activity history and in the list of approvers for the contract negotiation.',
    approveDocument: 'Approve document',
    approve: 'Approve',
    updatedAt: 'Updated on {{updatedAt}} by {{updatedBy}}.',
    uploadedAt: 'Uploaded on {{uploadedAt}} by {{uploadedBy}}.',
    lastModification: 'Last modification',
    lastModificationBy: 'On {{updatedAt}} by {{updatedBy}}',
    document: 'Document',
    version: 'Version {{version}}.0',
    updatedOnDate: 'Updated on {{date}}',
    showSummary: 'Show summary',
    state: 'State',
    lastUpdated: 'Last updated',
    lastUpdatedDate: 'On {{date}} by {{user}}',
    finalize: 'Finalize',
    finalizeWarning:
      'You are finalizing contract negotiations with one or more documents containing pending approvals.',
    finalizeInfo:
      'Select the documents you want to be added to the Workflow at the end of the negotiation.',
    cancel: 'Cancel collaboration',
    cancelModal: {
      alert:
        'By confirming the cancellation, the negotiation process with third parties will stop. This action will be recorded in the audit, and in the Workflow history.',
      stepTitle: 'Key points to consider about canceling negotiations:',
      step1: '1. Third parties will not be able to approve or upload new versions.',
      step2: '2. Workflow managers can download documents, but lose approval records.',
      step3: '3. Canceled negotiation audit available when entering from the collaboration list.',
      cancelationReason: 'Reason for cancellation*',
      cancelationReasonPlaceholder: 'Write the reason why you want to cancel the process.',
    },
    endNegotiation: 'End negotiation',
    editDocument: 'Edit document',
    writeDocument: 'Write document',
    uploadNewVersion: 'Upload new version',
    loadNewVersionInfo:
      'When uploading a new version, the approval record of all users will be automatically deleted.',
    load: 'Load',
    collaborationActivities: {
      create:
        '<strong>{{userFullName}}</strong> initiated a new contract negotiation collaboration.',
      cancel: '<strong>{{userFullName}}</strong> canceled the contract negotiation collaboration.',
      finish: '<strong>{{userFullName}}</strong> finished the contract negotiation collaboration.',
      documentApproved:
        '<strong>{{userFullName}}</strong> approved version {{version}} of the document "{{documentName}}".',
      viewedDocument: '<strong>{{userFullName}}</strong> viewed the document "{{documentName}}".',
      downloadDocument:
        '<strong>{{userFullName}}</strong> downloaded the document "{{documentName}}".',
      collaborationComment: '<strong>{{userFullName}}</strong> made a comment:',
      documentUpload:
        '<strong>{{userFullName}}</strong> uploaded a new version of the document "{{documentName}}" (Version {{version}}).',
      approvalsRestart:
        'Approvals have been restarted because a new version was uploaded to the document "{{documentName}}".',
      versionUpload:
        '<strong>{{userFullName}}</strong> uploaded a new version of the document "{{documentName}}" (Version {{version}}).',
      newDocuments:
        '<strong>{{userFullName}}</strong> added new documents to the contract negotiation:',
      deletedDocuments:
        '<strong>{{userFullName}}</strong> deleted a document from the contract negotiation:',
      newThirdParties: '<strong>{{userFullName}}</strong> added new users to contract negotiation:',
      deletedThirdParties:
        '<strong>{{userFullName}}</strong> removed a user from contract negotiation:',
      documentUpdatedLocally:
        '<strong>{{userFullName}}</strong> has edited a document generating a new version of the document "{{documentName}}" (Version {{version}}).',
    },
  },
  collaborationUploadDetails: {
    reason: 'Reason for request',
    collaborationActivity: 'Collaboration Activity',
    updatedActivity: 'Last update',
    documentStatus: {
      pending: 'Pending documents',
      approved: 'Uploaded documents',
    },
    document: {
      pending: 'The document has not been loaded',
      uploaded: 'Uploaded on {{date}}',
    },
    notification:
      'The uploaded documents will appear as antecedent in the workflow after the collaboration is completed.',
    requiredDocument: 'Required document',
    optionalDocument: 'Optional document',
  },
  messages: {
    deleteTitle: 'Are you sure you want to delete this comment?',
    edited: 'Edited:',
    newMessage: 'New comment',
    emptyState: {
      writeAMessage: 'Write a message or',
      mention: 'Mention',
      askForInformation: 'someone in the comment box to request information',
    },
    inquiry: {
      resolve: 'Resolve',
      resolved: 'Resolved',
    },
  },
  documentViewerModal: {
    previewNotAvailable: 'Preview not available',
  },
  copyToClipboardButton: {
    defaultTooltipText: 'Copy message',
    copiedTooltipText: 'Message copied',
    defaultText: 'Copy',
    copiedText: 'Copied',
    copyContent: 'Copy content',
    contentCopied: 'Content copied',
  },
  feedbackButton: {
    undo: 'Undo evaluation',
    positive: 'Useful',
    negative: 'Not useful',
  },
  forms: {
    validations: {
      required: 'This field can not be blank',
      phoneFormat: 'The phone format is incorrect',
      phoneCountryRequired: 'Please select a country for the phone number',
      noLink: 'This field contains URLs. Delete the links and try again',
      maxLength: 'This field cannot be longer than {{length}} characters',
    },
    BRA: {
      phone: {
        label: 'Phone number',
        placeholder: 'E.g.: +55969856963',
      },
      nic: {
        tooltip: 'CPF',
        label: 'CPF',
        placeholder: "Enter the signer's CPF",
        validation: '"${originalValue}" is not a valid CPF. Ex: 111.111.111-11',
      },
    },

    ECU: {
      phone: {
        label: 'Phone Number',
        placeholder: 'E.g.: 0991891020',
      },
      nic: {
        tooltip: 'CI, RUC, CE, or PAS',
        label: 'ID Document Number',
        placeholder: "Enter the user's ID document",
      },
    },
    PER: {
      nic: {
        tooltip: 'DNI, RUC, CE, or PAS',
        label: 'ID Document Number',
        placeholder: "Enter the user's ID document",
      },
    },
    MEX: {
      nic: {
        tooltip: 'RFC',
        label: 'RFC',
        placeholder: "Enter the user's RFC",
        validation: '"${originalValue}" is not a valid RFC.',
      },
    },
    CHL: {
      nic: {
        tooltip: 'RUT',
        label: 'RUT',
        placeholder: "Enter the user's RUT",
        validation: '"${originalValue}" is not a valid rut. Ex: 11.111.111-1',
      },
    },
    COL: {
      nic: {
        validation: '"${originalValue}" is not a valid NIT.',
      },
    },
    default: {
      phone: {
        label: 'Phone number',
        placeholder: 'E.g.: +56912345678',
      },
      nic: {
        tooltip: 'CC, CE, PEP or PAS',
        label: 'ID Document Number',
        placeholder: "Enter the user's ID document",
        invalidRuc: '"${originalValue}" is not a valid RUC.',
        invalidCi: '"${originalValue}" is not a valid CI.',
        invalidDni: '"${originalValue}" is not a valid Identity Document Number.',
        invalidPas: '"${originalValue}" is not a valid passport (PAS).',
        invalidCe: '"${originalValue}" is not a valid CE.',
        invalidCc: '"${originalValue}" is not a valid CC.',
        invalidPep: '"${originalValue}" is not a valid PEP.',
      },
    },
  },
  webdoxAI: {
    main: 'AI Assistant',
    question: 'Ask whatever you want...',
    composerPlaceholder: 'Ask me about the document...',
    composerPlaceholderWithPrompts: 'Type or press / to access your saved prompts...',
    legalWhisperComposerPlaceholder: 'Make your legal inquiries...',
    baseQuestionTitle: 'Ask Webdox Brain Companion',
    suggestions: 'Suggestions',
    contractSummary: 'Contract summary',
    assistantLayout: {
      dynamicViewTooltip: 'Change view mode to dynamic view',
      sideViewTooltip: 'Change to side view',
    },
    metadataDescriptiveLoading: {
      title: 'Extracting contract data...',
      text1: 'Contract type',
      text2: 'Parties',
      text3: 'Counterparties',
      text4: 'Amounts',
      text5: 'Contract date',
      text6: 'Expiration date',
    },
    tabsTitles: {
      contractSheet: 'Contract Sheet',
      askMe: 'Ask Me',
    },
    suggestionsSection: {
      description:
        "To search faster, use <bold>'Suggestions'</bold>. They are specific commands that help you get precise results.",
      buttonText: 'Query Suggestions',
    },
    prompts: {
      v1: {
        contractorData: 'Contractor data',
        contractedData: 'Contracted data',
        termOfContract: 'Term of contract',
        operationCosts: 'Operation costs',
        fileData: 'File data',
      },
    },
    disclaimer: {
      title: 'Important Information',
      body: 'Webdox AI is designed to generate coherent and cohesive responses to the best of its ability. However, since this tool relies on existing text patterns and statistics, it may occasionally produce responses that contain inconsistencies or incorrect information.',
      checkbox: 'Do not show this message again',
    },
    assistantDisclaimer:
      'As an AI assistant, I can make mistakes. Always verify important information.',
    legalWhisperDefaultMessage: {
      title: 'Do you have any questions about legal matters?',
      content:
        'Ask your question, and I will provide guidance on topics like labor law, tax law, administrative law, and more. 👩🏻‍💻',
      disclaimer:
        'Remember: this consultation is exclusively about legal matters, not about visible documentation.',
    },
    planUsage: {
      popovers: {
        planTrial: {
          title: 'Plan features',
          unlimitedTitle: 'Unlimited',
          description:
            'Your trial allows you to make up to {{total}} general chat consultations per company account.',
          unlimitedDescription: 'Your organization’s plan has no query limit.',
          progress: '{{used}} of {{total}} consultations available',
          disclaimer: 'Unused consultations within a month do not roll over',
          action: 'Contact your administrator to upgrade the plan',
          notification: 'You have reached the limit of trial queries. Contact your administrator.',
        },
      },
    },
    webdoxAIButton: {
      greetings: 'Hello, {{userName}}!',
      documentInProcessInformation: {
        detail:
          "I am <bold>Brain Companion</bold>, your virtual assistant. I'm here to help you with anything you need. Please give me a few minutes while I process the document information...",
      },
      genericErrorInformation: {
        title: 'Document not processed',
        detail:
          "Unfortunately, I couldn't process the document. I suggest you <bold>reload the page</bold> to try again...",
        actions: {
          reasons: 'Why was my document not processed?',
          reloadPage: 'Reload the page',
        },
      },
      processFailedErrorInformation: {
        title: 'Damaged or Invalid Document',
        detail: 'The document is damaged or in a format that is not supported for processing.',
        actions: {
          reasons: 'How to fix a damaged document?',
        },
      },
      chatShortcutInformation: {
        detail:
          'I am <bold>Brain Companion</bold>, your virtual assistant.<br/>How can I assist you?',
      },
      legalWhisperGreetings: {
        detail:
          'I am <bold>Legal Whisper</bold>, your legal consultant. I can assist you with any legal inquiries you have to support your processes and legal negotiations.',
      },
      suiteAIGreetings: {
        detail:
          'Alongside our AI assistants, you can quickly query documents with <bold>Brain Companion</bold> or solve your legal doubts with <bold>Legal Whisper</bold>. Your smart ally for every need! 👩🏻‍💻',
      },
      legalWhisperGenericError: {
        title: 'Legal Whisper is having issues...',
        detail: 'We are experiencing communication problems, please reload again...',
      },
      legalWhisperChatShortcut: {
        detail: 'I am <bold>Legal Whisper</bold>, your legal consultant. How can I assist you?',
        composerPlaceholder: 'Make your legal inquiries...',
      },
      businessSummaryGreetings: {
        detail:
          'Hello, I invite you to review the <bold>document summary</bold> generated with AI ✨.',
      },
      encryptedDocumentError: {
        title: 'Invalid Document',
        detail:
          '<strong>The document is encrypted</strong> and cannot be processed. We recommend deleting it, decrypting it, and uploading it again.',
      },
    },
    dataExtraction: {
      testDataExtraction: 'Test Data Extraction!',
      dataExtractionTitle: 'Data extracted with AI',
      quickActionsTitle: 'Quick actions with AI',
      dataExtractionDisclaimer:
        '<strong>Brain Data Extraction</strong> is an AI-powered module that allows extracting relevant data from contracts.',
      description:
        'Here you will find a summary of the data extracted from the document. If there is an error, use the editing option. ✍',
      contractTypeModification:
        'If you modify the contract type, Brain Companion will provide new suggestions for the document.',
      contractData: 'CONTRACT DATA',
      contractType: 'Contract Type',
      contractSummaryGeneration: {
        title: 'Generate a summary',
        description:
          'A brief version of the document that highlights the main ideas of the original content.',
        isLoading: 'Generating summary...',
      },
      contractReportGeneration: {
        title: 'Generate a report',
        description:
          'A tool that presents and organizes the key details of the contract in a clear manner.',
        isLoading: 'Generating contract report...',
      },
      contractTypes: {
        contract_of_employment: 'Employment Contract',
        contract_for_the_sale_and_purchase_of_goods: 'Sale and Purchase of Goods Contract',
        lease_agreement: 'Lease Agreement',
        comodato_agreement: 'Comodato Agreement',
        service_agreement: 'Service Agreement',
        confidentiality_agreement: 'Confidentiality Agreement',
        leasing_agreement: 'Leasing Agreement',
        distribution_agreement: 'Distribution Agreement',
        insurance_policy: 'Insurance Policy/Contract',
        supply_agreement: 'Supply Agreement',
        factoring_agreement: 'Factoring Agreement',
        mandate_agreement: 'Mandate Agreement',
        loan_agreement: 'Loan/Mutual Agreement',
        pledge_agreement: 'Pledge Agreement',
        mortgage_agreement: 'Mortgage Agreement',
        other: 'Other',
      },
      metadata: {
        first_party: 'Parties',
        second_party: 'Counterparties',
        party: 'Party',
        party_plural: 'Parties',
        counterparty: 'Counterparty',
        counterparty_plural: 'Counterparties',
        amount: 'Amount',
        contract_date: 'Contract date',
        expiration_date: 'Expiration date',
        start_date: 'Start date',
        end_date: 'End date',
        contract_type: 'Contract type',
      },
      unavailable: {
        title: 'Extracting Data',
        description: 'Please wait while we finish analyzing the contract information...',
      },
      localizeDataInDocument: 'Locate data in the document',
      viewEntitiesDirectory: 'View {{metadataValue}} in the directory',
      metadaDataByContextMsg: 'This data was determined based on the context of the contract',
      metadataAreLoadingMsg:
        'We are extracting some attributes using AI. Once the process is completed, they will automatically appear in their corresponding fields.',
      metadataListIsEmpty: 'It was not possible to extract data for this document.',
    },

    tableCopyToClipboardButton: {
      defaultTooltipText: 'Copy table',
      copiedTooltipText: 'Table copied',
      defaultText: 'Copy table',
    },
    textCopyToClipboardButton: {
      defaultTooltipText: 'Copy text',
      copiedTooltipText: 'Text copied',
      defaultText: 'Copy text',
    },
    selectionCopyToClipboardButton: {
      defaultTooltipText: 'Copy selection',
      copiedTooltipText: 'Selection copied',
    },
    assistantOptions: {
      brainCompanion: 'Brain Companion',
      legalWhisper: 'Legal Whisper',
      businessSummary: 'Business summary',
    },
    legalWhisperSettings: {
      newConversation: 'New conversation',
      recentConversations: 'Recent conversations',
      recentConversationsEmptyState: {
        title: 'No results found',
        description: 'Try another term or create a new conversation to start an inquiry',
      },
      deleteConversationModal: {
        title: 'Delete conversation',
        description:
          'Are you sure you want to delete the conversation ["<strong>{{conversationTitle}}</strong>"]? This action is irreversible and cannot be undone.',
        submit: 'Yes, delete',
      },
      editConversationModal: {
        title: 'Rename',
        formControl: {
          title: {
            label: 'Name',
            placeholder: 'Conversation name',
          },
        },
      },
      countryAndAreaSettings: {
        title: 'Country and area',
        country: 'Country',
        area: 'Area',
      },
    },
    legalWhisperAnswerRating: {
      title: "How do you rate Legal Whisper's answer?",
      submitButton: 'Submit answer',
      observationsPlaceholder: 'Describe the problem you have found...',
      unratedAnswerAlert: 'Before making a new query, you must rate Legal Whisper’s last response.',
      rateButton: 'Rate',
      ratingDescription: {
        value1: 'The answers do not meet expectations.',
        value2: 'The answers are unclear or inaccurate.',
        value3: 'The answers are acceptable, but could be improved.',
        value4: 'The answers are good and mostly useful.',
        value5: 'The answers are excellent and fully meet expectations.',
      },
      answerProblem: {
        title: 'What aspects of the information do you think we should improve?',
        options: {
          mainAnswer: 'Main answer',
          quotes: 'Quotes',
          legalWhisperUsage: 'Legal Whisper usage mode',
          systemError: 'System error',
        },
      },
      mainAnswerProblem: {
        title:
          'What observations do you have about the answer (the text provided by Legal Whisper)?',
        options: {
          notAlignedWithInvestigation:
            'The answer is not consistent with the judicial investigation.',
          tooLong: 'The answer is too long.',
          other: 'Other observation.',
        },
      },
      legalWhisperUsage: {
        title: 'What usage issues have you experienced when using Legal Whisper?',
        options: {
          notIntuitive: 'The tool is not intuitive to use.',
          unclearOrganization: 'The information is not clearly organized.',
          other: 'Feedback process observations.',
        },
      },
      systemError: {
        title: 'What errors have you encountered while using Legal Whisper?',
        options: {
          answerLoadingError: 'The Legal Whisper response did not load correctly.',
          other: 'Other observation.',
        },
      },
      quoteTypeToImprove: {
        title: 'What type of quotes have you had issues with?',
        options: {
          legal: 'Legal quotes',
          jurisprudential: 'Jurisprudential quotes',
          administrative: 'Administrative quotes',
        },
      },
      quoteProblem: {
        title: 'What problem have you had with {{quoteType}}?',
        options: {
          quoteNotInForce: 'One or more quotes are no longer in force.',
          irrelevantQuote: 'One or more quotes are not relevant to the issue raised.',
          incorrectQuoteInformation: 'One or more quotes have incorrect information.',
          other: 'Other observation.',
        },
      },
      quotesToImprove: {
        title: {
          quoteNotInForce: 'Select the quotes that are outdated',
          irrelevantQuote: 'Select the quotes that are not relevant to the original question',
          incorrectQuoteInformation: 'Select the quotes that contain incorrect information',
        },
        showAllQuotes: 'Show all quotes',
      },
      successMessage: {
        title: 'Thank you very much for your response! 🙌',
        subtitle: 'We value your opinion to improve the experience and accuracy of the platform.',
        anyOtherProblem: 'Would you like to point out any other aspect to improve?',
        closeButton: 'Finish and close',
      },
    },
    chat: {
      references: 'References used',
      assistantTitle: 'Brain Companion Assistant',
      legalWhisperTitle: 'Legal Whisper',
      assistantSelectPlaceholder: 'AI Services',
      metadataTitle: 'Data Extraction',
      welcome: 'Welcome!',
      copyMessage: 'Copy message',
      expandTable: 'Expand table',
      unavailableMessageTitle: 'It is not possible to use the assistant.',
      unavailableMessageBody: 'We are still processing your file, reload this view, and try again.',
      emptyLoadingMessagesText:
        'We are preparing the document for your queries with the assistant...',
      emptyPreviousMessagesText:
        'I am loading the previously queried information, please give me a moment...',
      emptyMessagesText: 'You can now start conversations with Webdox AI',
      suggestionsTextV1:
        "Use the assistant's suggestions to enhance your experience with the document.",
      suggestionsText:
        'Use the contract type suggestions to enhance your experience with the assistant.',
      loadingAnswer: 'I am analyzing your inquiry.<br/>It will only take a moment',
      legalWhisper: {
        disclaimer:
          'This response was generated based on the facts provided in your question and the internal database of Legal Whisper, which reviewed the following library of regulations to arrive at the response to the legal facts presented in your question. This review does not constitute legal advice. For any further inquiries, consult a lawyer.',
      },
      legalQuotes: 'Legal Quotes',
      jurisprudentialQuotes: 'Jurisprudential Quotes',
      administrativeQuotes: 'Administrative Quotes',
      relatedArticle_one: '{{count}} articles',
      relatedArticle_other: '{{count}} related articles',
      showMoreQuotes: 'Show more quotes',
      showLessQuotes: 'Show fewer quotes',
      errors: {
        title: 'Webdox AI Error',
        documentEnable: 'An error occurred while enabling the document. Please try again later.',
        createQuestion: 'An error occurred while generating the query. Please try again.',
        createConversation: 'An error occurred while starting the conversation. Please try again.',
        fetchConversation:
          'An error occurred while loading the conversation history. Please try again.',
      },
      firstAnswer: {
        title: 'Welcome to your daily assistant!',
      },
      contractKindAnswer: {
        description: 'Query suggestions for "<sp>{{contractKind}}</sp>"',
        description2:
          'If the contract type information is incorrect, you can modify it at any time.',
        editContract: 'Edit contract type',
        contractSheet: 'Contract sheet',
        suggestions: 'More suggestions',
      },
      basicPromptsAnswer: {
        description: 'Below, I provide you with some query suggestions to help you get started.',
      },
      suggestionsAnswer: {
        question: 'Give me suggestions for this document',
        description: 'Here is the complete list of query suggestions for you to start working 😎',
      },
      reference: 'Reference:',
      pageNumber: 'Page {{pageNumber}}',
      feedback: {
        modal: {
          title: '{{kind}} Evaluation',
          cancelButton: 'Cancel',
          submitButton: 'Submit',
          mandatory: 'mandatory',
          optional: 'optional',
          comments: 'Comment ({{kind}})',
          notification: {
            title: 'Evaluation',
            bodySuccess: 'Your evaluation has been successfully submitted.',
            bodyError: 'Your evaluation could not be submitted. Please try again.',
          },
          positive: {
            text: 'positive',
            body: 'This information helps us improve the assistant experience.',
          },
          negative: {
            text: 'negative',
            commentsPlaceholder: 'What did you dislike about the provided response?',
            body: 'Please select the option you consider most appropriate:',
            options: {
              unhelpful: 'The answer is not helpful',
              incomplete: 'The answer is incomplete',
              not_real: 'The answer is incorrect',
              custom: 'Other',
            },
          },
        },
      },
      processingAnswer: 'Processing...',
      descriptiveLoading: {
        text1: 'We are searching for information',
        text2: 'This may take a few minutes',
        text3: 'Due to the volume, it may take longer',
      },
      blockedFeatureInfo:
        'The owner of this account has blocked this functionality, please contact an administrator for more information.',
      customPrompts: {
        myPrompts: 'My prompts',
        mySavedPrompts: 'My saved prompts',
        addCustomPrompt: 'Add custom prompt',
        emptyMessage: "You don't have any saved prompts yet.",
        deleteModal: {
          title: 'Confirm deletion',
          subtitle: 'Do you want to delete your saved prompt from Brain?',
          description:
            'Once you delete the prompt, it will disappear from the initial chat list with Brain.',
          submit: 'Yes, delete',
        },
        formModal: {
          title: 'Add custom prompt',
          promptTitle: {
            label: 'Prompt title',
            placeholder: 'Enter a short title',
          },
          promptContent: {
            label: 'Enter a prompt',
            placeholder: 'Enter one or more prompts...',
          },
        },
      },
      quickActions: {
        confirmationKey: 'Enter',
        footerConfirmationMessage: 'to Confirm',
        footerNavigateMessage: 'to Navigate',
      },
    },
  },
  fileuploader: {
    browseFiles: 'Browse files',
    dragAndDropMessage: 'Drag and drop the document here',
    allowedExtensions: 'Supported files: {{allowedExtensions}}',
    selectFromPC: 'Select from PC',
    filesToImport_one: '{{count}} file to upload ({{size}})',
    filesToImport_other: '{{count}} files to upload ({{size}})',
    uploadFiles: 'Upload files',
    uploadFolder: 'Upload folder',
  },
  currency: {
    formattedCurrency: '{{value, currency}}',
  },
  storybook: {
    deprecatedComponent:
      'Deprecated component, prefer <strong>{{name}}</strong> for new initiatives',
  },
  deleteModal: {
    modal: {
      confirm: {
        header: 'Confirm deletion',
      },
      starting: {
        header: 'Initiating deletion',
      },
      in_progress: {
        header: 'Deletion in progress',
        body: 'Please wait while the deletion is being completed...',
      },
    },
    disclaimer: 'This action is irreversible, and you will not be able to recover it.',
    actionButton_one: 'Yes, delete',
    actionButton_other: 'Yes, delete everything',
  },
  decisionTree: {
    rule: '{{number}}° Rule',
    ruleDeleteModal: {
      title: 'Automation Rule Deletion',
      body: 'If you delete the previously configured automation rule, it will no longer work in the process specified above.\n\nDo you want to continue anyway?',
    },
    groupTitle: 'Block {{letter}}',
    groupRuleComplete: 'Complete rule',
    groupRuleIncomplete: 'Incomplete rule',
    groupSubtitle: 'Choose from the options available below to create an automation rule.',
    swapGroup: 'Swap Block',
    deleteGroup: 'Delete block',
    if: 'If',
    is: 'is',
    or: 'Or',
    orMessage: 'Only one condition must be fulfilled',
    and: 'And',
    andMessage: 'Both conditions must be met',
    then: 'Then',
    selectObject: 'Select an object',
    selectType: 'Select a type',
    selectAction: 'Select an action',
    addCondition: 'Add condition',
    addGroup: 'Add block',
    actions: 'Actions',
    actionsSubtitle: 'Select an action to perform when the above conditions are met.',
    requester: 'Requester',
    request: 'Request',
    profile: 'Profile',
    group: 'Group',
    equals: 'equals',
    notEquals: 'not equals',
    graterThan: 'grater than',
    graterOrEqual: 'greater thar or equals to',
    lessThan: 'less than',
    lessOrEqual: 'less than or equals to',
    true: 'True',
    false: 'False',
    assign: 'Assign',
    startWorkflow: 'Start workflow',
    distributionModeOptions: {
      disabled: 'No automatic assignment',
      freeLabel: '(Free)',
      defaultDescription:
        'Requests are NOT automatically assigned. Any group member can see them and choose to take them manually.',
      globalSequential: 'Automatic assignment by global workload',
      globalSequentialDescription:
        'Consider requests of any type received by a user during the calendar month.',
    },
  },
  suggestionsInput: {
    latestSearches: 'Recent searches...',
  },
  calendar: {
    today: 'Today',
    last7Days: 'Last 7 days',
    lastMonth: 'Last month',
    clear: 'Clear',
    submit: 'Apply',
    yesterday: 'Yesterday',
  },
  sidebar: {
    ariaLabels: {
      mainMenu: 'Webdox main menu',
      collapseMenu: 'Collapse menu',
      expandMenu: 'Expand menu',
      content: 'Sidebar navigation content',
    },
  },
  fileDownloadManager: {
    ariaLabels: {
      closeButton: 'Close download manager',
      downloadFileButton: 'Download file',
    },
    fileItemStatusLabel: {
      finished: 'Completed',
      error: 'Compression error',
    },
    goToDownloads: 'Go to downloads',
    headerStatusLabels: {
      finished: 'File ready',
      downloading: 'Compressing',
      error: 'Compression error',
    },
    headerTitle: {
      finished: 'Download completed',
      downloading: 'Preparing download',
      error: 'Download error',
    },
  },
  fileUploadManager: {
    all: 'All',
    completed: 'Uploaded',
    rejected: 'Errors',
    pending: 'Pending',
    uploading: 'Uploading',
    errors: 'Errors',
    omitted: 'Omitted',
    canceled: 'Canceled',
    fileActionTooltip: {
      pending: 'Cancel Upload',
      completed: 'View document',
      rejected: 'Retry',
      omitted: '',
      uploading: 'Cancel Upload',
    },
    fileStatusLabels: {
      pending: 'Pending',
      completed: 'Completed',
      canceled: 'Canceled',
      omitted: 'Omitted',
      uploading: 'Uploading',
    },
    progress: {
      idle: '',
      uploading: 'Importing {{count}} of {{total}} items',
      finished: '{{count}} of {{total}} items imported',
      canceled: 'Canceled',
    },
    emptyState: {
      defaultTitle: 'No documents uploaded',
      finished: {
        completed: {
          title: 'Documents were not uploaded',
          description: "You can try again from the 'Errors' tab.",
        },
        omitted: {
          title: 'No files were omitted',
        },
        rejected: {
          title: 'No errors during upload',
        },
      },
    },
    cancel: 'Cancel',
    empty: 'No files in this category',
    imports: 'Imports',
    uploads: 'Uploads',
    retry: 'Retry',
  },
  phoneInput: {
    placeholder: 'Enter phone number',
    countryCodeAriaLabel: 'Country code selector',
  },
};
