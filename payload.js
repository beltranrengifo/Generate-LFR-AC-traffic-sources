const getPayload = ({ referrer, date, page, index }) => {
  return {
    channelId: '526694783752760762',
    context: {
      canonicalUrl: page.url,
      contentLanguageId: 'en-US',
      description: '',
      keywords: '',
      languageId: 'en-GB',
      referrer,
      timezoneOffset: '+01:00',
      title: page.title,
      url: page.url,
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
      devicePixelRatio: '1',
      screenHeight: '1329',
      screenWidth: '1720',
      groupId: '20123',
      experienceId: 'DEFAULT',
      experimentId: '',
      variantId: '',
    },
    dataSourceId: '543899885739856621',
    events: [
      {
        applicationId: 'Page',
        contextHash:
          '3c3cca7ed2b9c15d6a77b1f959e792a95319fb362882f956763f0333413f9f21',
        eventDate: date,
        eventId: 'pageUnloaded',
        eventLocalDate: date,
        properties: { viewDuration: 11301842 },
      },
      {
        applicationId: 'Page',
        contextHash:
          '3c3cca7ed2b9c15d6a77b1f959e792a95319fb362882f956763f0333413f9f21',
        eventDate: date,
        eventId: 'pageViewed',
        eventLocalDate: date,
        properties: {},
      },
      {
        applicationId: 'Page',
        contextHash:
          '3c3cca7ed2b9c15d6a77b1f959e792a95319fb362882f956763f0333413f9f21',
        eventDate: date,
        eventId: 'pageLoaded',
        eventLocalDate: date,
        properties: { pageLoadTime: 8488 },
      },
    ],
    id: `${date.toString()}-${index}`,
    userId: `${date.toString()}-${index}`,
  }
}

exports.getPayload = getPayload
