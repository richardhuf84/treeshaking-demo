export default function foo() {
  console.log('foo');
  var root = document.getElementById('root');

  root.innerHTML = 'tree shaking';
}