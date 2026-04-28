import { ProductTourSettingsParamsType, ProductTourSettingsType, ProductTourTriggerEventParamsType } from '../interfaces/product-tour.interface';
type LibraryType = any;
/** Product tour utilities and transformers */
export declare class ProductTourUtils {
    private _settings;
    /** @deprecated broken */
    private _library?;
    /**
     * The product tour third party library used (ie: Intercom)
     *
     * @deprecated broken
     */
    get library(): LibraryType;
    /** The current settings of the product tour required by the library */
    get settings(): ProductTourSettingsType;
    /** Map the product tour's raw data to the required by the library */
    set settings({ customLauncherSelector, hideDefaultLauncher, user: { createdAt, company, companies, locale, ...restUser }, custom, ...restSettings }: ProductTourSettingsParamsType);
    /**
     * Set the current product tour library in the class object
     *
     *  @deprecated broken
     */
    set library(value: LibraryType);
    /**
     * Triggers a custom product tour event from the used library
     */
    triggerEvent({ action, context, metadata, library, }: ProductTourTriggerEventParamsType): void;
    /** Reusable snippet used to instantiate Intercom library */
    instantiateLibrary(appId: string): void;
    /** It maps all supported languages and returns the correct ISO 639-1 added in the intercom configuration */
    private mapLocale;
    /** Map the raw settings company entity into intercom company entity */
    private mapCompany;
}
export {};
