const ghpages = require('gh-pages');

ghpages.publish('dist/spa', {
  branch: 'gh-pages',
  repo: 'https://github.com/Uththunga/ethos-prompt-UI.git',
  user: {
    name: 'GitHub Actions',
    email: 'actions@github.com'
  }
}, function(err) {
  if (err) {
    console.error('Deployment failed:', err);
  } else {
    console.log('Deployment successful!');
  }
});