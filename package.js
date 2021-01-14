Package.describe({
  name: 'renanccastro:paginated-subscription',
  summary: "Easily paginate a subscription that takes a limit parameter.",
  version: "0.2.4",
  git: "https://github.com/renanccastro/paginated-subscription.git"
});

Package.onUse(function (api, where) {
  api.versionsFrom("METEOR@1.11.1");
  api.addFiles('paginated_subscription.js', 'client');
});
