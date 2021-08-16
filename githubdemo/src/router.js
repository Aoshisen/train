const nav = [
  {
    name: 'popular',
    path: '/',
    render() {
      return <div> This is 热门项目</div>;
    },
  },
  {
    name: 'battle',
    path: '/battle',
    render() {
      return <div>Battle</div>;
    },
  },
];

const types = ['all', 'javascript', 'ruby', 'java', 'css', 'python'];

const indexHeadNav = [{
  name: 'All',
  url: '/?tab=all',
}, {
  name: 'JavaScript',
  url: '/?tab=javascript',
}, {
  name: 'Ruby',
  url: '/?tab=ruby',
}, {
  name: 'Java',
  url: '/?tab=java',
}, {
  name: 'CSS',
  url: '/?tab=css',
}, {
  name: 'Python',
  url: '/?tab=python',
},
];
export { nav, types, indexHeadNav };
