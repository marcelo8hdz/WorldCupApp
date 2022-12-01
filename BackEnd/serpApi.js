const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("a63e5fc584a51edbebbea9586dff60cb307928c962430b7383c5571a67d12034");


const params = {
  q: "manchester united",
  location: "austin, texas, united states"
};

const callback = function(data) {
  console.log(data["sports_results"]);
};

// Show result as JSON
search.json(params, callback);