# TypeScript for Node.js Develpment

This project contains the presentation and sample code for my "TypeScript for Node.js" session at [Connect.Tech](https://connect-js.com).

> To get full details, including a related video walk through and description of the presentation, read the [TypeScript for Node.js](https://jlik.me/cec) blog post.

[Run the Presentation](./TypeScriptNode/typescriptfornode.html) or [view it as a PDF](./Presentation.pdf).

## Examples

The `Examples` folder contains a simple project to illustrate various TypeScript features. The examples are best viewed from an IDE like [Visual Studio Code](https://code.visualstudio.com) for development-time feedback. You can:

`npm run-script tsc` builds JavaScript files from the examples.

`node 001-types` runs the first example.

`npm run-script tsc:w` builds and watches, useful for commenting/uncommenting code to walk through the example.

`npm run-script tsc:es6` builds for ECMAScript 2015 to illustrate differences in output despite the same TypeScript source.

## TypeScriptProject

This is a very simple project to show basic setup for Node.js development.

`npm run-script build` to build it.

`node lib/main` to run it. You should see some colorful cats.

[@JeremyLikness](https://twitter.com/JeremyLikness)

## Snippets to build yourself 

Copy the **TypeScript-NodeJs-Snippets** folder and paste it into the Visual Studio Code Extensions folder to install the JavaScript snippets for this demo. Depending on your platform it is located:

* **Windows**: `%USERPROFILE%\.vscode\extensions`
* **Mac**: `$HOME/.vscode/extensions`
* **Linux**: `$HOME/.vscode/extensions`

