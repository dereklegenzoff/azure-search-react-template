const { SearchClient, AzureKeyCredential } = require("@azure/search-documents");

module.exports = async function (context, req) {

    const indexName = "good-books";
    const apiKey = "928E167099863C24E44BC5201610C0A1";

    // Create a SearchClient to send queries
    const client = new SearchClient(
        `https://delegenz-sandbox.search.windows.net/`,
        indexName,
        new AzureKeyCredential(apiKey)
    );

    // Let's get the top 5 jobs related to Microsoft
    const searchResults = await client.search("harry potter", { top: 5 });

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
