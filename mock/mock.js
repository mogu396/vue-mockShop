// const Mock = require('mockjs')
// const Random = Mock.Random

// const home = Mock.mock({
//   'success': true,
//   'id': '@id',
//   'data': {
//     "swiper|3-6": [
//       {
//         'id': '@id',
//         'imgPath': Random.image('1000x500', Random.color(), '#FFF', 'jpg', 'shopSwiper'),
//       }
//     ],
//     'recommend|10': [
//       {
//         'id': '@id',
//         'imgPath': Random.image('400x200', Random.color(), '#FFF', 'jpg', 'shopRecommend'),
//       }
//     ],
//     'shopItem|60': [
//       {
//         'id': '@id',
//         'imgPath': Random.image('400x400', Random.color(), '#FFF', 'jpg', 'shopItem'),
//         'title': '@last',
//       }
//     ]
//   }

// })

// const category = Mock.mock({
//   'success': true,
//   'id': '@id',
//   'data': {
//     'categoryList|10': [
//       {
//         'id': '@id',
//         'title': '@cname',
//         'list|20': [
//           {
//             'id': '@id',
//             'imgPath': Random.image('400x400', Random.color(), '#FFF', 'jpg', 'cateItem'),
//             'title': '@last',
//           }
//         ]
//       }
//     ],

//   }

// })

// const detail = Mock.mock({
//   'success': true,
//   'id': '@id',
//   'data': {
//     'swiper|2': [{
//       'imgPath': Random.image('400x400', Random.color(), '#FFF', 'jpg', ''),
//       'id': '@id'
//     }],
//     "panelInfo|1": [{
//       'id': '@id',
//       'title|1': ['Redmi Note 11 4G 5000万AI三摄',
//       '小米笔记本Pro X 14 将一块高性能光追显卡装入轻薄本',
//       '小米净水器S1 800G 800G超大通量，制水速度翻一倍 ',
//       '小米路由器Mesh 多通道高速混合传输 ',
//       'Redmi X65 2022款 双120Hz高刷屏 ',
//       ],
//       'intro': Random.cparagraph(2),
//       'price|99-2000': 100,
//       'choose|3': [{
//         'id': '@id',
//         'color|+1': ['咸蛋黄', '面包白', '青草绿'],
//         'size|+1': ['64g', '128g', '256g']
//       }]
//     }],
//     'contentImgSrc|8': [{
//       'imgPath': Random.image('600x600', Random.color(), '#FFF', 'jpg', '')
//     }]
//   }
// })

// module.exports = (app) => {
//   console.log(home);
//   app.get('/api/home/multidata', (req, res) => {
//     res.status(200).json(home)
//   })

//   app.get('/api/category', (req, res) => {
//     res.status(200).json(category)
//   })

//   app.get('/api/detail', (req, res) => {
//     res.status(200).json(detail)
//   })

// }

