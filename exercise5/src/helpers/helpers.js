export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}

  // TODO: implement logic here
  groupByKey(array, key) {
    const result = {};
    array.forEach((item) => {
      if (!result[item[key]]) {
        result[item[key]] = [];
      }
      result[item[key]].push(item);
    });
    console.log(result);
    return result;
  },

  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue = "none") {
    // TODO: implement logic here
    for (var i = 0, path = path.split("."), len = path.length; i < len; i++) {
      obj = obj[path[i]];
    }
    return obj;
  },
};
