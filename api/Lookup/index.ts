import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { SearchClient, AzureKeyCredential } from "@azure/search-documents";

const indexName = process.env["SearchIndexName"];
const apiKey = process.env["SearchApiKey"];
const searchServiceName = process.env["SearchServiceName"];

// Create a SearchClient to send queries
const client = new SearchClient(
    `https://` + searchServiceName + `.search.windows.net/`,
    indexName,
    new AzureKeyCredential(apiKey)
);

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    //context.log(req);

    // Reading inputs from HTTP Request
    const id = (req.query.id || (req.body && req.body.id));
    
    // Returning the document with the matching id
    const document = await client.getDocument(id)

    context.log(document);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { document: document}
    };

};

export default httpTrigger;