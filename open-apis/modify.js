const _ = require('lodash');
const File = require('fs');
const axios = require('axios');

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY5MTM5NzQ0MH0.W5DYr62_1-EP972Aw9qyFOKc1bM-h1_Ude71Xllq_I4ArpWDmj7EQFttnXMDXRj7zjJjWhgYy1xLiL4r-0VA9Q';
// url to open api doc
const gatewayUrl = 'http://gateway-dev.wemove.com.vn';

let noRemote = false;
process.argv.forEach(val => {
  if (val === '--no-remote') {
    noRemote = true;
  }
});

console.info('noRemote:', noRemote);

const services = ['partner'];
const apis = {};

function dynamicRequire(service) {
  apis[service] = require(`./${service}.json`);
}

async function start() {
  await Promise.all(
    services.map(async service => {
      if (noRemote) {
        dynamicRequire(service);
      } else {
        console.log(`Fetching ${service}`);
        const response = await axios.default.get(
          `${gatewayUrl}/services/${service}/v3/api-docs`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        await File.writeFileSync(
          `./open-apis/${service}.json`,
          JSON.stringify(response.data, null, 2),
        );
        console.log(`Save to disk: ${service}.json`);
        dynamicRequire(service);
      }
    }),
  );

  console.log('Start modifying apis');
  _.forEach(apis, (api, name) => {
    console.log('Modifying', name);

    const modified = _.cloneDeep(api);

    // _.forEach(api.paths, (value, key) => {
    //   if (key.startsWith("/api/")) {
    //     modified.paths[`/${name}${key}`] = value;
    //     delete modified.paths[key];
    //   }
    // });

    File.writeFileSync(
      `./open-apis/${name}.custom.json`,
      JSON.stringify(modified, null, 2),
    );
  });
}

start();
