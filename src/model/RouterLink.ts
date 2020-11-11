import MetaData from './MetaData';

export default class RouterLink {
  // 路径
  path: string = '';
  // 路由name
  name: string = '';
  // 子路由
  children: RouterLink[] = [];
  // 携带字段
  meta: MetaData = new MetaData();
}
