import { NativeLocaleType } from '../components/utils/i18n/i18n.interface';
import { SnakeToCamelCaseNested } from '../utils/type.util';
/** Languages supported in the intercom settings */
export type ProductTourLanguageOverrideType = Extract<NativeLocaleType, 'es' | 'en'> | 'pt-br';
export type ProductTourActionType = 'boot' | 'shutdown' | 'update' | 'hide' | 'show' | 'showMessages' | 'showNewMessage' | 'onHide' | 'onShow' | 'onUnreadCountChange' | 'trackEvent' | 'getVisitorId' | 'startTour' | 'showArticle';
type ProductTourDynamicType = {
    /** Can add extra values */
    [key: string]: unknown;
};
export type ProductTourTriggerEventParamsType = {
    action: ProductTourActionType;
    context?: number | string;
    metadata?: ProductTourDynamicType;
    library?: any;
};
/**
 * Represents the configuration settings for Intercom, a customer communication platform.
 *
 * @remarks
 * These settings define the attributes and information related to a user or customer that can be used with Intercom.
 *
 * @see {@link https://developers.intercom.com/installing-intercom/web/attributes-objects/|Intercom Attributes and Objects}
 */
export type IntercomMessengerAttributesType = {
    /** The app_id of your Intercom app which will indicate where to store any data */
    app_id: string;
    /**
     * The CSS selector of an element to trigger Intercom("show") in order to activate
     * the messenger. To target an element by ID: "#id_of_element".
     * To target elements by class ".classname_of_elements"
     */
    custom_launcher_selector: string;
    /** Hide the default launcher icon. Setting to false will forcefully show the launcher icon */
    hide_default_launcher: boolean;
    /**
     * Dictate the alignment of the default launcher icon to be on the left/right.
     * Possible values: "left" or "right" (any other value is treated as right).
     */
    alignment?: string;
    /** Move the default launcher icon vertically. Padding from bottom of screen. Minimum value: 20. Does not work on mobile. */
    vertical_padding?: number;
    /**
     * Move the default launcher icon horizontally. Padding from right side
     * of screen Minimum value: 20. Does not work on mobile.
     */
    horizontal_padding?: number;
    /**
     * Time in milliseconds for the Intercom session to be considered active.
     * A value of 5 * 60 * 1000 would set the expiry time to be 5 minutes
     */
    session_duration?: number;
    /** Used in button links and more to highlight and emphasize */
    action_color?: string;
    /** Used behind your team profile and other attributes */
    background_color?: string;
};
interface IntercomAvatarType {
    /** The value is "avatar" */
    type: string;
    /** The avatar/profile picture of the record	string	An avatar image URL. Note: needs to be https. */
    image_url: string;
}
export interface IntercomCompanyType {
    id: number;
    name: string;
    /** The Unix timestamp (in seconds) when the user signed up to your app (Only applicable to users) */
    created_at?: number;
}
/**
 * Intercom minimum data type
 *
 * @remarks check docs here https://developers.intercom.com/installing-intercom/web/attributes-objects/#data-attributes
 */
export interface IntercomDataType {
    /** Used for identity verification (Only applicable to users) */
    user_hash: string;
    /** The email address of the currently logged in user (Only applicable to users) */
    email: string;
    /** The user ID address of the currently logged in user (Only applicable to users) */
    user_id: string;
    /** The Unix timestamp (in seconds) when the user signed up to your app (Only applicable to users) */
    created_at: number;
    /** Name of the current user/lead */
    name: string;
    /** Phone number of the current user/lead */
    /** Set the messenger language programmatically (instead of relying on browser language settings) */
    language_override: string;
    /**
     * Current user's company (Only applicable to users) For field definitions see Company Object
     * in the section below Note: Company ID and company name are the minimum requirements
     * to pass a company into Intercom.
     */
    company: IntercomCompanyType & ProductTourDynamicType;
    phone?: string;
    /**
     * This value can't actually be set by the Javascript API.
     * It automatically uses the time of the last request but is a reserved attribute
     */
    last_request_at?: number;
    /**
     * Sets the [unsubscribe status]
     * (https://docs.intercom.com/faqs-and-troubleshooting/unsubscribing-users/how-do-i-unsubscribe-users-from-receiving-emails)
     * of the record
     */
    unsubscribed_from_emails?: boolean;
    /** UTM Campaign value. Note: All UTM parameters are updated automatically and cannot be manually overridden */
    utm_campaign?: string;
    /** UTM Content value */
    utm_content?: string;
    /** UTM Medium value */
    utm_medium?: string;
    /** UTM Source value */
    utm_source?: string;
    /** UTM Term value */
    utm_term?: string;
    /** Set the avatar/profile image associated with the current record (typically gathered via social profiles via email address) */
    avatar?: IntercomAvatarType & ProductTourDynamicType;
    /** An array of companies the user is associated with (Only applicable to users) */
    companies?: (IntercomCompanyType & ProductTourDynamicType)[];
    /**
     * Used for keeping track of user page views.
     * Default value is the document title property.
     */
    page_title?: string;
}
export type ProductTourSettingsType = IntercomMessengerAttributesType & IntercomDataType & ProductTourDynamicType;
/** Specific type for intercom types overrides */
export type IntercomType = {
    intercomSettings: ProductTourSettingsType;
    Intercom(action: ProductTourActionType, context?: ProductTourTriggerEventParamsType['context'], metadata?: ProductTourTriggerEventParamsType['metadata']): void;
};
export interface ProductTourSettingsCompanyParamType extends Omit<SnakeToCamelCaseNested<IntercomCompanyType>, 'createdAt'> {
    createdAt?: string;
}
type ProductTourSettingsBaseParamsType = SnakeToCamelCaseNested<IntercomMessengerAttributesType>;
type ProductTourSettingsBaseDataParamsType = SnakeToCamelCaseNested<IntercomDataType>;
/**
 * Type received to generate the product tour's inner model. This type
 * is closest to the app's user entity
 */
export interface ProductTourSettingsParamsType extends Omit<ProductTourSettingsBaseParamsType, 'customLauncherSelector' | 'hideDefaultLauncher'> {
    /** @defaultValue - `.intercom-link`*/
    customLauncherSelector?: string;
    /** @defaultValue - `true`*/
    hideDefaultLauncher?: boolean;
    user: Omit<ProductTourSettingsBaseDataParamsType, 'createdAt' | 'languageOverride' | 'lastRequestAt' | 'company' | 'companies'> & {
        createdAt: string;
        locale?: NativeLocaleType | 'br';
        company: ProductTourSettingsCompanyParamType & ProductTourDynamicType;
        companies?: (ProductTourSettingsCompanyParamType & ProductTourDynamicType)[];
    };
    custom: SnakeToCamelCaseNested<ProductTourDynamicType>;
}
export {};
