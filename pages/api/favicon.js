// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const url = require('url')
const request = require('request')
export default (req, res) => {
  const { page_url, size = 24 } = req.query
  // 根据page_url,size返回特定大小的的网址图片
  const urlObj = url.parse(page_url)
  if(urlObj.slashes && urlObj.protocol && urlObj.host) {
    const faviconIconUrl = `${urlObj.protocol}//${urlObj.host}/facicon.ico`
    request.get('http://google.com/img.png').pipe(res)
  } else {
    // 创建一个图片流返回
  }
  res.status(200).json({ name: 'John Doe' })
}
