module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/management/pages/:handle',
      handler: 'management.findPageByHandle',
    },
  ],
};
