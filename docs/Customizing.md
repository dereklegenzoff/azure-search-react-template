# Customizing this template

After deploying this sample, I'd encourage you to try it out with your own search index.

Up until now, you've been working with an existing index, but creating and loading an index with your own data is straightforward. You can create an index in the [Azure portal](https://docs.microsoft.com/azure/search/search-import-data-portal), use the [REST APIs](https://docs.microsoft.com/rest/api/searchservice/create-index), or use any of the Azure SDKs such as the new [Azure SDK for Javascript/TypeScript](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/search/search-documents/) that we used in this blob post. Please see the Azure Cognitive Search [documentation](https://docs.microsoft.com/azure/search/search-get-started-portal) for more information on how to get started.

There are two main changes you'd need to make to use your own index:

### 1. Edit application settings in the portal

Navigate to the Azure portal -> find your Azure Static Web App -> select configuration -> edit the application settings.

### 2. Update Result and Detail components

Much of the UI won't require customization, however, if you integrate a new index with this template, you'll likely need to update the `Results` component and the `Details` component to reflect the fields in your index.

To give an example, the following code renders the results on the search page in `src/components/Results/Result/Result.js`. The properties `id`, `image_url`, and `original_title` of `props.document` all correspond to fields in the search index and should be updated to reflect the fields in your own search index:

```javascript
<div className="card result">
    <a href={`/details/${props.document.id}`}>
        <img className="card-img-top" src={props.document.image_url} alt="book cover"></img>
        <div className="card-body">
            <h6 className="title-style">{props.document.original_title}</h6>
        </div>
    </a>
</div>
```