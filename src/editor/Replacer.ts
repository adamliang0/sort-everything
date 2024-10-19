import * as vscode from 'vscode';
import type { Range, TextEditor } from 'vscode';
import { getFullRange } from './Ranger';

export const replaceSelectedText = (
  editor: TextEditor,
  range: Range,
  newText: string
): Promise<void> => {
  return new Promise((resolve) => {
    void editor
      .edit((edit) => edit.replace(range, newText))
      .then(async () => {
        await vscode.commands.executeCommand('editor.action.formatDocument');
        resolve();
      });
  });
};

export const replaceFullText = (editor: TextEditor, newText: string): Promise<void> => {
  const range = getFullRange(editor);
  return replaceSelectedText(editor, range, newText);
};
