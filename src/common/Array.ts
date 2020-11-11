const ArrayMethods = {
  // 判断固定数组内是否有重复对象 （暂判断路由）
  isDuplicates(originData: any[], value) {
    let result = originData.filter(item => item.name === value);
    return result;
  }
};

export { ArrayMethods };
