const { SearchClient, AzureKeyCredential } = require("@azure/search-documents");

const indexName = process.env["SearchIndexName"];
const apiKey = process.env["SearchApiKey"];
const searchServiceName = process.env["SearchServiceName"];

// Create a SearchClient to send queries
const client = new SearchClient(
    `https://` + searchServiceName + `.search.windows.net/`,
    indexName,
    new AzureKeyCredential(apiKey)
);

module.exports = async function (context, req) {

    context.log(req);

    try {
        // Reading inputs from HTTP Request
        var q = (req.query.q || (req.body && req.body.q));
        const top = (req.query.top || (req.body && req.body.top));
        const skip = (req.query.skip || (req.body && req.body.skip));
        const filters = (req.query.filters || (req.body && req.body.filters));
        const facets = process.env["SearchFacets"].split(",");
        //var resultFields: string[] = process.env["ResultFields"].split(",");

        // Creating SearchOptions for query
        var searchOptions = {
            top: top,
            skip: skip,
            includeTotalCount: true,
            facets: facets
        }

        if (filters && filters.length > 0) {
            searchOptions.filter = filters;
        }

        // If search term is empty, search everything
        if (!q || q === "") {
            q = "*";
        }

        // Sending the search request
        const searchResults = await client.search(q, searchOptions);

        // Getting results for output
        var output = []
        for await (const result of searchResults.results) {
            output.push(result);
        }

        // Logging search results
        // context.log(searchResults);

        // Creating the HTTP Response
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: {
                count: searchResults.count,
                results: output,
                facets: searchResults.facets
            }
        };
    } catch (error) {
        context.log.error(error);

        // Creating the HTTP Response
        context.res = {
            status: 400,
            body: {
                innerStatusCode: error.statusCode || error.code,
                error: error.details || error.message
            }
        };
    }

};
