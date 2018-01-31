const baseUrl = 'https://zhihu-daily.leanapp.cn'
export default {
	//首页最新消息
  lastStories: baseUrl + '/api/v1/last-stories/',
  //过去的消息
  beforeStories: baseUrl + '/api/v1/before-stories/',
  //首页左侧边栏主题日报列表
  themes: baseUrl + '/api/v1/themes/',
  //主题内容
  contents: baseUrl + '/api/v1/contents/',
  //主题内容其他信息
  extra: baseUrl + '/api/v1/contents/extra/',
}