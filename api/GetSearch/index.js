const { SearchClient, AzureKeyCredential } = require("@azure/search-documents");

const indexName = "good-books";
const apiKey = "";

// Create a SearchClient to send queries
const client = new SearchClient(
    `https://delegenz-sandbox.search.windows.net/`,
    indexName,
    new AzureKeyCredential(apiKey)
);

module.exports = async function (context, req) {

    var data = req.body;
    //var input = context.bindings.input;
    console.log(context);
    console.log(req);
    // Let's get the top 5 jobs related to Microsoft
    const searchResults = await client.search(data.search, { top: 10 });

    var output = []
    for await (const result of searchResults.results) {
        //console.log(`${result.document.business_title}\n${result.document.job_description}\n`);
        output.push(result);
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { results: output}
    };
};
