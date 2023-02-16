
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https:\/web.bestgame99.com/api/pay/getPayInformation?amount=1`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'appid' : `104753`,
'Host' : `web.bestgame99.com`,
'imeil' : `8681355D-A70F-4C2B-9A98-1B93B7613C24`,
'branch' : ``,
'deviceinfo' : `iPhone`,
'agent' : `c223`,
'Connection' : `keep-alive`,
'xh-username' : `msa_1676570305_MFE2`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) ChinaDailyForiPad`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Referer' : `https://web.bestgame99.com/pay?roleId=524386&productDesc=%E5%85%83%E5%AE%9D&amount=1.00&gameId=104770&productName=%E5%85%83%E5%AE%9D&appId=104753&timestamp=1676577537&altUsername=msa_1676570305_MFE2&osType=ios&noncestr=rryldmzaiopm&token=048c9773fb3f43688c6e95a5f8e08d04&imei=8681355D-A70F-4C2B-9A98-1B93B7613C24&orderId=177920230217035857158791233&agent=c223&osInfo=iPhone&username=18730103201&sdkVersion=2.0&serverId=98&sign=AFD4D1EEAC373F44922ADE8EE285395E`,
'udid' : `00008110-0002483C3680401E`,
'sign' : `bffdc33605506a10a9ad30dda772cd94`,
'noncestr' : `kH0HL3njExBJ`,
'token' : `048c9773fb3f43688c6e95a5f8e08d04`,
'Accept' : `application/json, text/plain, */*`,
'timestamp' : `1676577538`,
'sdk-version' : `2.0`,
'game-id' : `104770`,
'device' : `3`,
'username' : `18730103201`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
