import type { ReactElement } from 'react';

/** Metadata required of the selected files */
export interface FileType {
  /** Size of the file in bytes */
  size: number;
}

export type SelectionType = 'files' | 'folder';

export type SelectionOption = { label: ReactElement; id: SelectionType };
