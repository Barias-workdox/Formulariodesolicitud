/** All assistant tracking constants */
export class AssistantTrackingConstants {
  public sendQuery = 'BC: Send query';
  public closeAssistant = 'BC: Close drawer';
  public metadataTabChange = 'BC: Open data extraction';
  public chatTabChange = 'BC: Open chat';
  public copyToClipboard = 'BC: Copy to clipboard';
  public positiveFeedback = 'BC: Positive feedback';
  public negativeFeedback = 'BC: Negative feedback';
  public selectSuggestion = 'BC: Used suggestion';
  public clickSuggestions = 'BC: Click on suggestions';
  public changeContractKind = 'BC: Edit contract type';
  public changeMetadata = 'BC: Edit contract data';
  public summaryScroll = 'BC: Summary scroll';
  public copySummary = 'BC: Copy summary';
  public generateSummary = 'BC: Generate summary';
  public generateContractReport = 'BC: Generate contract report';
  public documentViewerCopyAction = 'Document viewer: Copy action';
  public documentViewerTranslateAction = 'BC: Document viewer: Translate action';
  public documentViewerExplainAction = 'BC: Document viewer: Explain action';
  public clickAnswerReference = 'BC: Answer reference clicked';
  public clickCustomPrompt = 'BC: Custom prompt clicked';
  public deleteCustomPrompt = 'BC: Custom prompt deleted';
  public createCustomPrompt = 'BC: Custom prompt created';
  public editCustomPrompt = 'BC: Custom prompt edited';
  public clickSignatureAI = 'BC: Click Signature AI';
}

export const assistantTrackingConstants = new AssistantTrackingConstants();
