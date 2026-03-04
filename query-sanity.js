const https = require('https');
require('dotenv').config({ path: '.env.local' });

const options = {
  hostname: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io`,
  path: `/v2024-01-01/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}?query=${encodeURIComponent('*[_type == "category"]{title}')}`,
  method: 'GET'
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log(JSON.parse(data));
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
