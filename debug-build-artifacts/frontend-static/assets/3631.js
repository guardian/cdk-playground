"use strict";
exports.id = 3631;
exports.ids = [3631];
exports.modules = {

/***/ 73631:
/*!*********************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@aws-sdk+credential-provider-process@3.620.1/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js + 3 modules ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fromProcess: () => (/* reexport */ fromProcess)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@smithy+shared-ini-file-loader@3.1.4/node_modules/@smithy/shared-ini-file-loader/dist-es/index.js + 14 modules
var dist_es = __webpack_require__(29250);
// EXTERNAL MODULE: ../node_modules/.pnpm/@smithy+property-provider@3.1.3/node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var property_provider_dist_es = __webpack_require__(39096);
// EXTERNAL MODULE: external "child_process"
var external_child_process_ = __webpack_require__(35317);
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(39023);
;// ../node_modules/.pnpm/@aws-sdk+credential-provider-process@3.620.1/node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js
const getValidatedProcessCredentials=(profileName,data,profiles)=>{if(data.Version!==1){throw Error(`Profile ${profileName} credential_process did not return Version 1.`)}if(data.AccessKeyId===undefined||data.SecretAccessKey===undefined){throw Error(`Profile ${profileName} credential_process returned invalid credentials.`)}if(data.Expiration){const currentTime=new Date;const expireTime=new Date(data.Expiration);if(expireTime<currentTime){throw Error(`Profile ${profileName} credential_process returned expired credentials.`)}}let accountId=data.AccountId;if(!accountId&&profiles?.[profileName]?.aws_account_id){accountId=profiles[profileName].aws_account_id}return{accessKeyId:data.AccessKeyId,secretAccessKey:data.SecretAccessKey,...data.SessionToken&&{sessionToken:data.SessionToken},...data.Expiration&&{expiration:new Date(data.Expiration)},...data.CredentialScope&&{credentialScope:data.CredentialScope},...accountId&&{accountId}}};
;// ../node_modules/.pnpm/@aws-sdk+credential-provider-process@3.620.1/node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js
const resolveProcessCredentials=async(profileName,profiles,logger)=>{const profile=profiles[profileName];if(profiles[profileName]){const credentialProcess=profile["credential_process"];if(credentialProcess!==undefined){const execPromise=(0,external_util_.promisify)(external_child_process_.exec);try{const{stdout}=await execPromise(credentialProcess);let data;try{data=JSON.parse(stdout.trim())}catch{throw Error(`Profile ${profileName} credential_process returned invalid JSON.`)}return getValidatedProcessCredentials(profileName,data,profiles)}catch(error){throw new property_provider_dist_es/* CredentialsProviderError */.C1(error.message,{logger})}}else{throw new property_provider_dist_es/* CredentialsProviderError */.C1(`Profile ${profileName} did not contain credential_process.`,{logger})}}else{throw new property_provider_dist_es/* CredentialsProviderError */.C1(`Profile ${profileName} could not be found in shared credentials file.`,{logger})}};
;// ../node_modules/.pnpm/@aws-sdk+credential-provider-process@3.620.1/node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js
const fromProcess=(init={})=>async()=>{init.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");const profiles=await (0,dist_es/* parseKnownFiles */.YU)(init);return resolveProcessCredentials((0,dist_es/* getProfileName */.Bz)(init),profiles,init.logger)};
;// ../node_modules/.pnpm/@aws-sdk+credential-provider-process@3.620.1/node_modules/@aws-sdk/credential-provider-process/dist-es/index.js


/***/ })

};
;
//# sourceMappingURL=3631.js.map