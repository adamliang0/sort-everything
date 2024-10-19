import * as vscode from 'vscode';

import { getSelectedRange } from '@/editor/Ranger';
import { getText } from '@/editor/Reader';
import { replaceSelectedText } from '@/editor/Replacer';
import { getSorter } from './Sorter';

export function sortFile(): void {
  const textEditor = vscode.window.activeTextEditor;

  if (!textEditor) {
    return;
  }

  const { languageId } = textEditor.document;
  const sorter = getSorter(languageId);

  try {
    const range = getSelectedRange(textEditor);
    const unsorted = getText(textEditor, range);
    const sorted = sorter(unsorted);
    if (sorted.type === 'success') {
      void replaceSelectedText(textEditor, range, sorted.payload);
    } else {
      void vscode.window.showWarningMessage(`Failed to sort "${languageId}": ${sorted.error}`);
    }
  } catch (error) {
    void vscode.window.showWarningMessage(
      `Failed to sort "${languageId}": ${(error as Error).message}`
    );
  }
}
