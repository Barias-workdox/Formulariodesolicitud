import { defaultLng } from '@components/utils';
import { getUnixTimestamp } from '@components/utils/strings/date.utils';

import { keysToSnakeCase } from './object-case.util';

import type {
  IntercomDataType,
  ProductTourLanguageOverrideType,
  ProductTourSettingsCompanyParamType,
  ProductTourSettingsParamsType,
  ProductTourSettingsType,
  ProductTourTriggerEventParamsType,
} from '../interfaces/product-tour.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LibraryType = any;

/** Product tour utilities and transformers */
export class ProductTourUtils {
  private _settings: ProductTourSettingsType;
  /** @deprecated broken */
  private _library?: LibraryType;

  /**
   * The product tour third party library used (ie: Intercom)
   *
   * @deprecated broken
   */
  get library(): LibraryType {
    return this._library;
  }

  /** The current settings of the product tour required by the library */
  get settings(): ProductTourSettingsType {
    return this._settings;
  }

  /** Map the product tour's raw data to the required by the library */
  set settings({
    customLauncherSelector = '.intercom-link',
    hideDefaultLauncher = true,
    user: { createdAt, company, companies, locale = defaultLng, ...restUser },
    custom,
    ...restSettings
  }: ProductTourSettingsParamsType) {
    this._settings = keysToSnakeCase<unknown>({
      customLauncherSelector,
      hideDefaultLauncher,
      createdAt: getUnixTimestamp(createdAt),
      language_override: this.mapLocale(locale),
      company: this.mapCompany(company),
      ...(companies !== undefined && { companies: companies.map(this.mapCompany) }),
      ...restUser,
      ...restSettings,
      ...custom,
    }) as ProductTourSettingsType;
  }

  /**
   * Set the current product tour library in the class object
   *
   *  @deprecated broken
   */
  set library(value: LibraryType) {
    this._library = value;
  }

  /**
   * Triggers a custom product tour event from the used library
   */
  public triggerEvent({
    action,
    context,
    metadata,
    library,
  }: ProductTourTriggerEventParamsType): void {
    if (library !== undefined) {
      library(action, context, metadata);
    }
  }

  /** Reusable snippet used to instantiate Intercom library */
  public instantiateLibrary(appId: string): void {
    // Load script from intercom
    // @ts-expect-error - Intercom library is not typed
    // eslint-disable-next-line
    (function(){const w=window;const ic=w.Intercom;if(typeof ic==='function'){ic('reattach_activator');ic('update',w.intercomSettings);}else{const d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;const l=function(){const s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + appId;const x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
  }

  /** It maps all supported languages and returns the correct ISO 639-1 added in the intercom configuration */
  private mapLocale(
    locale: ProductTourSettingsParamsType['user']['locale'],
  ): ProductTourLanguageOverrideType {
    const localeMap = {
      br: 'pt-br',
      pt: 'pt-br',
    };

    return localeMap[locale] ?? locale;
  }

  /** Map the raw settings company entity into intercom company entity */
  private mapCompany({
    createdAt,
    ...rest
  }: ProductTourSettingsCompanyParamType): IntercomDataType['company'] {
    return {
      ...rest,
      created_at: createdAt !== undefined ? getUnixTimestamp(createdAt) : undefined,
    };
  }
}
