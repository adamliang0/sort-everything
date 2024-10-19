import type { Range, TextEditor } from 'vscode';
import { getFullRange, getSelectedRange } from './Ranger';

export function getText(editor: TextEditor, range: Range): string {
  return editor.document.getText(range);
}

export function getFullText(editor: TextEditor): string {
  const range = getFullRange(editor);
  return getText(editor, range);
}

export function getSelectedText(editor: TextEditor): string {
  const range = getSelectedRange(editor);
  return getText(editor, range);
}
