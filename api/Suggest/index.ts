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
    const q = (req.query.q || (req.body && req.body.q));
    const top = (req.query.q || (req.body && req.body.q));
    const suggester = (req.query.q || (req.body && req.body.q));
    
    // Let's get the top 5 suggestions for that search term
    const suggestions = await client.suggest(q, suggester, {top: top});

    //context.log(suggestions);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { document: document}
    };

};

export default httpTrigger;