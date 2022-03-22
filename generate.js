const http = require('axios')
const { acConfig } = require('./ac-config')
const { getPayload } = require('./payload')

const generate = async ({ referrer, date = new Date(), index }) => {
  const { endpoint, page, projectId } = acConfig

  const uniqueDate = date.setSeconds(date.getSeconds() - index)

  try {
    return await http.post(
      endpoint,
      getPayload({ referrer, date: uniqueDate, page, index }),
      {
        headers: {
          'osb-asah-project-id': projectId,
          Referer: referrer,
        },
      }
    )
  } catch (e) {
    throw new Error(JSON.stringify(e))
  }
}

exports.generate = generate
