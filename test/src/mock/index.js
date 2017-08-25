// 引入mockjs

const Mock = require('mockjs');

// 获取 mock.Random 对象

const Random = Mock.Random;

// mock一组数据

const produceNewsData = function() {

  let articles = [];

  for (let i = 0; i < 100; i++) {

    let newArticleObject = {

      title: Random.csentence(5, 30), // Random.csentence( min, max )

      thumbnail_pic_s: Random.dataImage('100x50', ''), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码

      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名

      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串

    }

    articles.push(newArticleObject)

  }



  return {

    articles: articles

  }

};

//mock --> 计量单位数据;

const jldwData = function () {
  return {
    thead:[{
      type:"id",
      label:"序号"
    },{
      type:"number",
      label:"排序码"
    },{
      type:"name",
      label:"单位名称"
    }],
    list:[
      {
        id: 0,
        number: "0000",
        name: "条"
      },
      {
        id: 1,
        number: "0001",
        name: "台"
      },
      {
        id: 2,
        number: "0002",
        name: "张"
      },
    ]
  }

}

//mock --->修改计量单位数据
const addJldwData = function (data) {
  var newData;
  newData = [].concat(jldwData().list,JSON.parse(data.body))
  // console.log(newData);
  return newData;
}


// Mock.mock( url, post/get , 返回的数据)；

Mock.mock('/api/data', 'post', produceNewsData);

Mock.mock('/api/jldwData', 'post', jldwData);

Mock.mock('/api/pushData', 'post', addJldwData);
