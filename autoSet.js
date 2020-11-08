let r = require.context('./views', true, /.vue/);
let arr = []
r.keys().forEach((key) => {
  let filename = key.split('.')[1].split('/')[1] // 获取目录src下的所有vue文件名
  arr.push({
    path: '/' + filename,
    name: '' + filename,
    component: r(key).default
  })
})

export default arr