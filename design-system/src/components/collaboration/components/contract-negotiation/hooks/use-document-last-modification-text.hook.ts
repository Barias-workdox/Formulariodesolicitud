import { useTranslation } from '@components/utils/i18n/utils';
import { formatDateAsText } from '@components/utils/strings/date.utils';
import { useLocale } from '@contexts/locale-provider';

import { useContractNegotiationContext } from '../../../logic/contexts';

import type { CollaborationDocument, DocumentVersion } from '../../../interfaces';

export interface IUseDocumentLastModificationText {
  lastModificationText: string;
}

export interface IUseDocumentLastModificationTextProps {
  document: Pick<CollaborationDocument, 'updatedAt' | 'negotiable' | 'officeDocumentVersion'>;
  selectedDocumentVersion: DocumentVersion;
}

/** The number 1 is considered the first version of a document. */
const FIRST_VERSION = 1;

/**
 * A custom hook to generate a text representation of the last modification of a collaboration document.
 * This hook calculates the "last modified" text for a given document and user.
 *
 * If the document is not negotiable, the collaboration responsible user (user who created the collaboration)
 * is used to represent who uploaded the document.
 *
 * @returns An object containing the last modification text as a string.
 *
 * @remarks
 * This hook should be used within the context of the `ContractNegotiationContext` to ensure correct behavior.
 */
export const useDocumentLastModificationText = ({
  document,
  selectedDocumentVersion,
}: IUseDocumentLastModificationTextProps): IUseDocumentLastModificationText => {
  const { collaborationResponsible } = useContractNegotiationContext();
  const { locale } = useLocale();
  const { t } = useTranslation();

  const { updatedAt, negotiable } = document;
  const {
    versionNumber,
    user: versionUser,
    updatedAt: versionUpdatedAt,
  } = selectedDocumentVersion ?? {};
  const { firstName, lastName } = versionUser || collaborationResponsible;

  let lastModificationText = '';

  if (!negotiable || versionNumber === FIRST_VERSION) {
    lastModificationText = t('contractNegotiationCollaboration.uploadedAt', {
      uploadedAt: formatDateAsText(updatedAt, locale, true),
      uploadedBy: `${firstName} ${lastName}`,
    });
  } else {
    lastModificationText = t('contractNegotiationCollaboration.updatedAt', {
      updatedAt: formatDateAsText(versionUpdatedAt, locale, true),
      updatedBy: `${firstName} ${lastName}`,
    });
  }

  return { lastModificationText };
};
