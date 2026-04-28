/** All Brain AI assistant constants */
export declare class AssistantConstants {
    assistantTabs: {
        readonly chat: "chat";
        readonly metadata: "metadata";
    };
    assistantOptions: readonly [{
        readonly label: "webdoxAI.assistantOptions.brainCompanion";
        readonly value: "webdoxAI.chat.assistantTitle";
        readonly id: "brainCompanion";
    }, {
        readonly label: "webdoxAI.assistantOptions.legalWhisper";
        readonly value: "webdoxAI.chat.legalWhisperTitle";
        readonly id: "legalWhisper";
    }];
    assistantOptionMap: {
        readonly brainCompanion: "brainCompanion";
        readonly legalWhisper: "legalWhisper";
    };
}
export declare const assistantConstants: AssistantConstants;
