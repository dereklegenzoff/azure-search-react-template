const { SearchClient, AzureKeyCredential } = require("@azure/search-documents");

const indexName = process.env["SearchIndexName"];
const apiKey = process.env["SearchApiKey"];

// Create a SearchClient to send queries
const client = new SearchClient(
    `https://` + process.env["SearchServiceName"] + `.search.windows.net/`,
    indexName,
    new AzureKeyCredential(apiKey)
);

module.exports = async function (context, req) {
    
    var data;
    if (req.method === 'POST') {
        data = req.body
    }
    else if (req.method === 'GET') {
        data = req.query
    }

    //context.log(req);
    
    // Let's get the top 5 suggestions for that search term
    const suggestions = await client.suggest(data.searchTerm, 'sg', {top: 5});

    //context.log(suggestions);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { suggestions: suggestions}
    };
};
