const { referrers } = require('./referrers')
const { generate } = require('./generate')

const VISITS_PER_DOMAIN = 50

for (const domains of Object.values(referrers)) {
  domains.forEach((referrer) => {
    for (let i = 0; i < VISITS_PER_DOMAIN; i++) {
      generate({ referrer, index: i }).then((res) => {
        const {
          status,
          config: { headers },
          data,
        } = res
        console.log(status, headers, data)
      })
    }
  })
}
