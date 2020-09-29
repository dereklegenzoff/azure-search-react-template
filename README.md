# Azure Cognitive Search UI

This sample is a React template for Azure Cognitive Search. It leverages the Azure SDK for Javascript/Typescript and Azure Static Web Apps to make it easy to get up and running with a simple web application.

You can view the resulting web application here: [https://victorious-beach-0ab88b51e.azurestaticapps.net/](https://victorious-beach-0ab88b51e.azurestaticapps.net/)

## Prerequisites

- A GitHub account
- [Node.js and Git](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=shopathome-github-jopapa) installed
- The [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions?WT.mc_id=shopathome-github-jopapa) installed
- The [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=shopathome-github-jopapa) installed

## Setup application

1. Clone (or Fork and Clone) this repository

1. Rename the `api/local.settings.json.rename` file to `api/local.settings.json`.

The `local.settings.json` file holds all of the keys that the application needs. You'll need to copy these keys in from the corresponding template output in the portal.

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "SearchApiKey": "<your-search-api-key>",
    "SearchServiceName": "<your-service-name>",
    "SearchIndexName": "good-books",
    "SearchFacets": "authors,language_code"
  }
}
```

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
