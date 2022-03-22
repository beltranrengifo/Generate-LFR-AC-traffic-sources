const generate = async ({ referrer, date = new Date() }) => {
  try {
    return await http.post(
      'https://osbasahpublisher-ac-asahuat.lfr.cloud/',
      getPayload({ referrer, date }),
      {
        headers: {
          'osb-asah-project-id': 'asah0878884185e94d299b56779700af5d43',
          Referer: referrer,
        },
      }
    )
  } catch (e) {
    throw new Error(JSON.stringify(e))
  }
}

exports.generate = generate

/* request().then((res) => {
  const {
    status,
    config: { headers },
    data,
  } = res
  console.log({ status, headers, data })
}) */
