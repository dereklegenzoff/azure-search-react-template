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

    var data = req.body;
    //var input = context.bindings.input;
    console.log(context);
    console.log(req);

    let facets = process.env["SearchFacets"].split(",");
    var searchOptions = {
        top: data.top,
        skip: data.skip,
        includeTotalCount: true,
        facets: facets
    }

    // Sending the search request
    const searchResults = await client.search(data.search, searchOptions);

    var output = []
    for await (const result of searchResults.results) {
        //console.log(`${result.document.business_title}\n${result.document.job_description}\n`);
        output.push(result);
    }

    context.log(searchResults);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { 
                count: searchResults.count, 
                results: output, 
                facets: searchResults.facets
            }
    };
};
