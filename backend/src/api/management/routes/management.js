module.exports = {
  routes: [
    {
      "method": "POST",
      "path": "/management/webhook/custom",
      "handler": "management.handleWebhookCustom",
    },
    {
      method: 'GET',
      path: '/management/pages/:handle',
      handler: 'management.findPageByHandle',
    },
    {
      method: 'POST',
      path: '/management/submissions/:formHandle',
      handler: 'management.createSubmission',
    },
  ],
};
