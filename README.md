# Generate Traffic sources in Liferay's Analytics Cloud

## Purpose

Run this script to provide your Analytics Cloud account and your Liferay Portal with some fake data.

We use this script in Tango product team just for developing purposes of our [Content Performance Tool](https://learn.liferay.com/dxp/latest/en/content-authoring-and-management/page-performance-and-accessibility/about-the-content-performance-tool.html), which renders metrics from AC.

- Clone/fork this repo
- Install dependencies: `npm i` or `yarn`

## Usage and configuration

1. Run a Liferay Portal
2. Configure AC in your instance settings and visit a page
3. Open your browser network tool, usually inside the browser's dev tools, you should find a request to AC:
   ![image](https://user-images.githubusercontent.com/19485114/159465593-a0bbf333-9c9c-4338-98fb-5d524405dec0.png)
4. Use this request url to configure the endpoint property
5. Use this request payload to extract the data you want to use in the request.
6. Open `ac-config.js` file and change the needed values:

```json
{
  "endpoint": "https://osbasahpublisher-ac-asahuat.lfr.cloud/",
  "projectId": "asah0878884185e94d299b56779700af5d43",
  "page": {
    "title": "Home - Liferay",
    "url": "http://liferay.local:8080"
  }
}
```

7. In `payload.js` modify the data you need

Run the script: `npm run generate` or `yarn generate`.

A bunch of 200 codes should appear in node console, also an empty array in each request indicates no errors.
<img width="1087" alt="image" src="https://user-images.githubusercontent.com/19485114/159465656-267513f4-5a71-4750-bf45-1fbe2f4e6ff6.png">
