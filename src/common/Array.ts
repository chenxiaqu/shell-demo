const ArrayMethods = {
  /**
   * 判断固定数组内是否有重复对象 （暂判断路由）
   * @param originData 原数组
   * @param value 相当于数组内对象id
   * @param flat 是否扁平化处理
   */
  isDuplicates(originData: any[], value, flat) {
    // 将多层路由扁平化
    if (flat) originData = this.flat(originData);
    let result = originData.filter(item => item.name === value);
    return result[0];
  },

  // 递归扁平化数组（暂判断路由）
  flat(originData: any[]) {
    let arr: any[] = [];
    originData.forEach(item => {
      arr.push(item);
      if (item.children && item.children.length > 0) {
        this.flat(item.children);
      }
    });
    return arr;
  }
};

export { ArrayMethods };
