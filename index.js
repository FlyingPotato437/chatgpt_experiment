const { Configuration, OpenAIApi } = require ("openai");
const express = require ('express');
const configuration = new Configuration({
    organization: "org-jaBlCE0vUiNqJ9NYfrO45nPj",
    apiKey: 
    "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",
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();


// create a simple express api that calls the function above

const res = require("express/lib/response");
const app = express()
const port = 3080

app.post('/', async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
    console.log(response.data.choices[0].text)
    res.json({
        data: response.data
    })

});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}) 