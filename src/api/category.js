// 定义分类相关的API接口数据
import request from '@/utils/request'
/**
 * 获取所有的分类（顶级，二级，对应的商品推荐数据）
 * @returns promise
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
