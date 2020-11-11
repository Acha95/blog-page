module.exports = {
  "title": "阿茶",
  "description": "阿茶的小作坊",
  "dest": "public",
  "base":"/blog/public/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  plugins: [
      [
        '@vuepress-reco/vuepress-plugin-bgm-player',
        {
          audios: [
            // 本地文件示例
            {
              name: 'Count on me',
              artist: 'Connie Talbot',
              url: 'https://sharefs.yun.kugou.com/202011101842/6576e4aea908bbb1ba4dc26fbc8a80d1/G140/M04/1C/15/zA0DAFuNxAaAD2fyADYGYMGITbg672.mp3',
              cover: 'http://p1.music.126.net/F-wqrMJ8AeW4x9F4kbTQ7Q==/1394180756543778.jpg?param=130y130'
            },
            {
               name: '枷锁',
               artist: '何野',
               url: 'http://m10.music.126.net/20201110191837/b967fe6f3c1a2808352a7c520b3f6847/ymusic/0f08/0559/0353/8b8634917023dc4bd78a492018cdc1af.mp3',
               cover: 'http://p2.music.126.net/V09meAIA1__m4Pj6aQMoBQ==/109951163806175491.jpg?param=130y130'
             },
             {
               name: '天亮以前说再见',
               artist: '曲肖冰',
               url: 'http://m10.music.126.net/20201110192004/c4d679846d7b02aac897b9fe25f336b8/ymusic/025a/525b/5459/502265136ce1cb0bccb6c3685ebaf71e.mp3',
               cover: 'https://p1.music.126.net/jHH9tbSF4sKWo0NMp21fgg==/109951162929110712.jpg?param=130y130'
             },
            {
              name: '终于等到你',
              artist: '张靓颖',
              url: 'http://m10.music.126.net/20201110192244/5ae815b64eeebabd1c842857bfd3affb/ymusic/ced3/84d3/1274/accd5115e82557d4b5b653d2530482d9.mp3',
              cover: 'https://p2.music.126.net/PDSLSEj5EHvGWeaTy5MqWQ==/109951163064519620.jpg?param=130y130'
            }
          ],
          position:{
            left: '10px',
            bottom: '10px',
            'z-index': '999999'
          }
        }]
  ],
  "theme": "reco",
  "themeConfig": {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ],
    locales: {
      '/': {
        lang: 'zh-CN'
      },
      '/en/': {
        lang: 'en-US'
      }
    },
    mode: 'auto',
    modePicker: true,
    "nav": [

      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Acha95",
            "icon": "reco-github"
          },
          {
            "text": "Weibo",
            "link": "https://weibo.com/u/3943412834",
            "icon": "reco-weibo"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "latte and cat",
        "desc": "喜爱的博客主题",
        "email": "",
        "link": "https://blog.smallsunnyfox.com/"
      },
      {
        "title": "主题Docs",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "阿茶",
    "authorAvatar": "/logo.png",
    "record": "生活不易，还请珍惜",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}
