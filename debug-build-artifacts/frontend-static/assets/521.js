"use strict";
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 40521:
/*!***************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.621.0/node_modules/@aws-sdk/credential-provider-http/dist-es/index.js + 4 modules ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fromHttp: () => (/* reexport */ fromHttp)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@smithy+node-http-handler@3.1.4/node_modules/@smithy/node-http-handler/dist-es/index.js + 14 modules
var dist_es = __webpack_require__(14955);
// EXTERNAL MODULE: ../node_modules/.pnpm/@smithy+property-provider@3.1.3/node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var property_provider_dist_es = __webpack_require__(39096);
// EXTERNAL MODULE: external "fs/promises"
var promises_ = __webpack_require__(91943);
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_);
;// ../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.621.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js
const LOOPBACK_CIDR_IPv4="127.0.0.0/8";const LOOPBACK_CIDR_IPv6="::1/128";const ECS_CONTAINER_HOST="169.254.170.2";const EKS_CONTAINER_HOST_IPv4="169.254.170.23";const EKS_CONTAINER_HOST_IPv6="[fd00:ec2::23]";const checkUrl=(url,logger)=>{if(url.protocol==="https:"){return}if(url.hostname===ECS_CONTAINER_HOST||url.hostname===EKS_CONTAINER_HOST_IPv4||url.hostname===EKS_CONTAINER_HOST_IPv6){return}if(url.hostname.includes("[")){if(url.hostname==="[::1]"||url.hostname==="[0000:0000:0000:0000:0000:0000:0000:0001]"){return}}else{if(url.hostname==="localhost"){return}const ipComponents=url.hostname.split(".");const inRange=component=>{const num=parseInt(component,10);return 0<=num&&num<=255};if(ipComponents[0]==="127"&&inRange(ipComponents[1])&&inRange(ipComponents[2])&&inRange(ipComponents[3])&&ipComponents.length===4){return}}throw new property_provider_dist_es/* CredentialsProviderError */.C1(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`,{logger})};
// EXTERNAL MODULE: ../node_modules/.pnpm/@smithy+protocol-http@4.1.0/node_modules/@smithy/protocol-http/dist-es/index.js + 5 modules
var protocol_http_dist_es = __webpack_require__(78660);
// EXTERNAL MODULE: ../node_modules/.pnpm/@smithy+smithy-client@3.1.11/node_modules/@smithy/smithy-client/dist-es/index.js + 25 modules
var smithy_client_dist_es = __webpack_require__(18420);
// EXTERNAL MODULE: ../node_modules/.pnpm/@smithy+util-stream@3.1.3/node_modules/@smithy/util-stream/dist-es/index.js + 11 modules
var util_stream_dist_es = __webpack_require__(90949);
;// ../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.621.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js
function createGetRequest(url){return new protocol_http_dist_es/* HttpRequest */.Kd({protocol:url.protocol,hostname:url.hostname,port:Number(url.port),path:url.pathname,query:Array.from(url.searchParams.entries()).reduce((acc,[k,v])=>{acc[k]=v;return acc},{}),fragment:url.hash})}async function getCredentials(response,logger){const stream=(0,util_stream_dist_es/* sdkStreamMixin */.c9)(response.body);const str=await stream.transformToString();if(response.statusCode===200){const parsed=JSON.parse(str);if(typeof parsed.AccessKeyId!=="string"||typeof parsed.SecretAccessKey!=="string"||typeof parsed.Token!=="string"||typeof parsed.Expiration!=="string"){throw new property_provider_dist_es/* CredentialsProviderError */.C1("HTTP credential provider response not of the required format, an object matching: "+"{ AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }",{logger})}return{accessKeyId:parsed.AccessKeyId,secretAccessKey:parsed.SecretAccessKey,sessionToken:parsed.Token,expiration:(0,smithy_client_dist_es/* parseRfc3339DateTime */.EI)(parsed.Expiration)}}if(response.statusCode>=400&&response.statusCode<500){let parsedBody={};try{parsedBody=JSON.parse(str)}catch(e){}throw Object.assign(new property_provider_dist_es/* CredentialsProviderError */.C1(`Server responded with status: ${response.statusCode}`,{logger}),{Code:parsedBody.Code,Message:parsedBody.Message})}throw new property_provider_dist_es/* CredentialsProviderError */.C1(`Server responded with status: ${response.statusCode}`,{logger})}
;// ../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.621.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js
const retryWrapper=(toRetry,maxRetries,delayMs)=>{return async()=>{for(let i=0;i<maxRetries;++i){try{return await toRetry()}catch(e){await new Promise(resolve=>setTimeout(resolve,delayMs))}}return await toRetry()}};
;// ../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.621.0/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js
const AWS_CONTAINER_CREDENTIALS_RELATIVE_URI="AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";const DEFAULT_LINK_LOCAL_HOST="http://169.254.170.2";const AWS_CONTAINER_CREDENTIALS_FULL_URI="AWS_CONTAINER_CREDENTIALS_FULL_URI";const AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE="AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";const AWS_CONTAINER_AUTHORIZATION_TOKEN="AWS_CONTAINER_AUTHORIZATION_TOKEN";const fromHttp=(options={})=>{options.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");let host;const relative=options.awsContainerCredentialsRelativeUri??process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];const full=options.awsContainerCredentialsFullUri??process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];const token=options.awsContainerAuthorizationToken??process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];const tokenFile=options.awsContainerAuthorizationTokenFile??process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];const warn=options.logger?.constructor?.name==="NoOpLogger"||!options.logger?console.warn:options.logger.warn;if(relative&&full){warn("@aws-sdk/credential-provider-http: "+"you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");warn("awsContainerCredentialsFullUri will take precedence.")}if(token&&tokenFile){warn("@aws-sdk/credential-provider-http: "+"you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");warn("awsContainerAuthorizationToken will take precedence.")}if(full){host=full}else if(relative){host=`${DEFAULT_LINK_LOCAL_HOST}${relative}`}else{throw new property_provider_dist_es/* CredentialsProviderError */.C1(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`,{logger:options.logger})}const url=new URL(host);checkUrl(url,options.logger);const requestHandler=new dist_es/* NodeHttpHandler */.$c({requestTimeout:options.timeout??1e3,connectionTimeout:options.timeout??1e3});return retryWrapper(async()=>{const request=createGetRequest(url);if(token){request.headers.Authorization=token}else if(tokenFile){request.headers.Authorization=(await promises_default().readFile(tokenFile)).toString()}try{const result=await requestHandler.handle(request);return getCredentials(result.response)}catch(e){throw new property_provider_dist_es/* CredentialsProviderError */.C1(String(e),{logger:options.logger})}},options.maxRetries??3,options.timeout??1e3)};
;// ../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.621.0/node_modules/@aws-sdk/credential-provider-http/dist-es/index.js


/***/ })

};
;
//# sourceMappingURL=521.js.map