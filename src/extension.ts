import * as vscode from 'vscode';
import { sortFile } from './sort/sortFile';

export function activate(context: vscode.ExtensionContext): void {
  const disposables = [
    vscode.commands.registerCommand('bennycode.sort-everything.sortFile', sortFile),
  ];
  for (const disposable of disposables) {
    context.subscriptions.push(disposable);
  }
}
