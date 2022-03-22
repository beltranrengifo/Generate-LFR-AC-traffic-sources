# Generate Traffic sources in Liferay's Analytics Cloud

Run this script to provide your AC account and your Liferay Portal with some fake data.
We use this script in Tango Product team for developing purposes, for our Content Performance module, which renders metrics from AC,

## Usage and configuration

Run a Liferay Portal, configure AC in your instance settings and visit a page
Open browser network tool, usually inside the browser's dev tools, you should find a request to AC:
![image](https://user-images.githubusercontent.com/19485114/159465593-a0bbf333-9c9c-4338-98fb-5d524405dec0.png)


1. Use this request url to configure the endpoint
2. Use this request payload to extract the data you want to use in the request.
3. In `ac-config.js` file replace the value, if needed:

```json
{
  "endpoint": "https://osbasahpublisher-ac-asahuat.lfr.cloud/",
  "projectId": "asah0878884185e94d299b56779700af5d43",
  "page": {
    "title": "Home - Liferay",
    "url": "http://liferay.local:8080/"
  }
}
```

4. In `payload.js` modify the data you need

Run the script: `npm run generate` or `yarn generate`.

A bunch of 200 codes should appear in node console, also an empty array in each request indicates no errors.
<img width="1087" alt="image" src="https://user-images.githubusercontent.com/19485114/159465656-267513f4-5a71-4750-bf45-1fbe2f4e6ff6.png">
