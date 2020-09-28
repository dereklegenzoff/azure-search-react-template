# Azure Cognitive Search UI

This sample is a react template for Azure Cognitive Search.

## Prerequisites

- A GitHub account
- [Node.js and Git](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=shopathome-github-jopapa) installed
- The [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions?WT.mc_id=shopathome-github-jopapa) installed
- The [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=shopathome-github-jopapa) installed

## Setup application

1. Clone (or Fork and Clone) this repository

1. Rename the "api/local.settings.json.rename" to "api/local.settings.json".

The "local.settings.json" file holds all of the keys that the application needs. You'll need to copy these keys in from the corresponding template output in the portal.

| local.settings.json setting | Template output           |
| --------------------------- | ------------------------- |
| STORAGE_ACCOUNT             | storage_account           |
| STORAGE_KEY                 | storage_key               |
| STORAGE_CONNECTION_STRING   | storage_connection_string |
| MAP_KEY                     | map_key                   |
| AI_API_KEY                  | ai_api_key                |
| GITHUB_API_KEY              | Github API key            |

## Running the application locally

This project can be run anywhere, but VS Code is required for local debugging.

1. Open the application with VS Code.

### Running the frontend

1. Install frontend dependencies...

   ```bash
   npm install
   ```

1. Run the frontend project in the browser (automatically opens a browser window).

   ```bash
   npm start
   ```

### Running the API

1. From VS Code, press <kbd>F5</kbd>

## Deploying the App to Static Web Apps

1. Create a [new Static Web App](https://portal.azure.com/#create/Microsoft.StaticApp).

1. Select the Github repo for this project from the Azure Web Apps create screen.

For more information on Static Web Apps, check out the [Static Web Apps documentation](https://aka.ms/swadocs).
