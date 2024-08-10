import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "php-helper" is now active!');

    const toArr = vscode.commands.registerCommand('php-helper.toArr', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const document = editor.document;
        const selections = editor.selections;

        editor.edit(editBuilder => {
            selections.forEach(selection => {
                const text = document.getText(selection);
                const newText = text.replace(/->/g, "['").concat("']");
                editBuilder.replace(selection, newText);
            });
        });
    });

    const toObj = vscode.commands.registerCommand('php-helper.toObj', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const document = editor.document;
        const selections = editor.selections;

        editor.edit(editBuilder => {
            selections.forEach(selection => {
                const text = document.getText(selection);
                const newText = text.replace(/\['/g, "->").replace(/']$/, "");
                editBuilder.replace(selection, newText);
            });
        });
    });

    context.subscriptions.push(toArr);
    context.subscriptions.push(toObj);
}

// This method is called when your extension is deactivated
export function deactivate() {}
