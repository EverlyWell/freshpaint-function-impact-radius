// The following APIs and libraries are available at runtime:
// * @google-cloud/bigquery@6.0.1 as google.cloud.bigquery
// * aws-sdk@2.1079.0 as AWS
// * atob@2.1.2 as atob
// * btoa@1.2.1 as btoa
// * crypto as crypto
// * form-data@2.4.0 as FormData
// * oauth@0.9.15 as OAuth
// * xml@1.0.1 as xml
// * lodash@4.17.15 as _
// * node-fetch@2.6.0 as fetch

/**
 * Handle track event
 */
async function onTrack(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#track
  /**
   * Impact Radius event parameters
   * {
   *   'CampaignId': '1000'
   *   'EventTypeId': '9876'
   *   'EventDate': 'NOW'
   *   'ClickId': 'QiiWXOVnrQ3SQHl24jQjyxBGUkmzfJ3i1VHrWM0'
   *   'CustomerId': 'BCZ2WVSH674563PDPYOTM3AXDQ'
   *   'CurrencyCode': 'USD'
   *   'OrderId': 'O1234567'
   *   'OrderDiscount': '15.00'
   *   'OrderPromoCode': '15BUCKSOFF'
   *   'ItemSku1': '1ABC2345'
   *   'ItemName1': 'Product Name 1'
   *   'ItemCategory1': 'Hardware'
   *   'ItemQuantity1': '2'
   *   'ItemSubTotal': '28.00'
   *   'ItemSku2': '9ZXY7654'
   *   'ItemName2': 'Product Name 2'
   *   'ItemCategory2': 'Gardening'
   *   'ItemQuantity2': '3'
   *   'ItemSubTotal': '99.00'
   * }
   */

  const endpoint = `https://api.impact.com/Advertisers/${settings.AccountSID}/Conversions`;

  await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${btoa(
        `${settings.accountSID}:${settings.authToken}`
      )}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(event),
  });
}

/**
 * Handle identify event
 */
async function onIdentify(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#identify
  throw new EventNotSupported('identify is not supported');
}

/**
 * Handle group event
 */
async function onGroup(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#group
  throw new EventNotSupported('group is not supported');
}

/**
 * Handle page event
 */
async function onPage(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#page
  throw new EventNotSupported('page is not supported');
}
