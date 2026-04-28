export declare const darkTheme: {
    readonly breakpoints: import('../tokens').Breakpoints;
    readonly mediaQuery: Record<keyof import('../tokens').Breakpoints, string>;
    readonly name: string;
    readonly animation: import('baseui/styles').Animation;
    readonly borders: import('baseui/styles').Borders & {
        readonly borderNone: "0rem";
        readonly borderSm: "0.25rem";
        readonly borderMd: "0.5rem";
        readonly borderCircle: "50%";
    };
    readonly colors: import('baseui/tokens').PrimitiveColors & import('baseui/themes').FoundationColors & import('baseui/themes').ComponentColors & import('baseui/themes').CoreSemanticColors & import('baseui/themes').CoreExtensionSemanticColors & import('baseui/themes').DeprecatedSemanticColors & import('baseui/themes').HoveredAndPressedSemanticColors & {
        [x: string]: string;
    } & Partial<import('../..').AppColors>;
    readonly direction: "auto" | "rtl" | "ltr";
    readonly grid: import('baseui/styles').Grid;
    readonly icons?: import('baseui/styles').Icon;
    readonly lighting: import('baseui/styles').Lighting & Partial<import('baseui/styles').Lighting & import('../../_deprecated/v1/lighting').Lighting>;
    readonly sizing: import('baseui/styles').Sizing;
    readonly typography: import('baseui/styles').Typography & Partial<Record<keyof import('baseui/styles').Typography, import('../../_deprecated/v1/typographies').Typography>>;
    readonly zIndex: import('baseui/styles').ZIndex;
    readonly spacing: import('../..').ThemeSpacingType;
    readonly elevations: import('../tokens').Elevations;
};
