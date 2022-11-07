// HELPER FUNCTION; 編集不可 -- ここから
Array.isEqual = function (array1, array2) {
    if (!array1 || !array2)
        return false

    if (array1.length !== array2.length)
        return false

    for (i = 0, l = array1.length; i < l; i++) {

        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            if (Array.isEqual(array1[i], array2[i]))
                return false  
        }           
        else if (array1[i] !== array2[i]) { 
            return false
        }           
    }       
    return true;
}
// HELPER FUNCTION; 編集不可 -- ここまで

/*
上記 HELPER FUCTION と下部のTESTSの出力結果を参考に
配列操作ライブラリ '_' を作成し、以下のような関数を実装してください。

filter - each のような処理で TESTSの出力になるような配列を返す
map - each のような処理ですが関数によって内容を変更する配列を返す
reduce - 配列の値を縮小する。初期値はオプションとして指定できる
head - 配列の初期値を取得
tail - 配列の最後の値を取得
join - 与えられた文字列の引数を配列要素に結合
*/

// FILL OUT THE FUNCTIONS *****************

const $ = {
  filter: function (param, executeFunc) {

      let resultArray = [];
      param.forEach( (val) => {
          const result = executeFunc(val);
          
          result ? resultArray.push(val): false;
      });
      return resultArray;
  },
  map: function (param, executeFunc) {

      let resultArray = [];
      param.forEach( (val) => {
          const result = executeFunc(val);
          resultArray.push(result);
      });
      return resultArray;
  },
  reduce: function (param, executeFunc, init) {

      let accumulate = 0;
      if (init) accumulate = init;
      
      param.forEach( (val) => {
          const result = executeFunc(accumulate, val);
          accumulate = result;
      });

      return accumulate;
  },
  head: function (param) {
      if (param instanceof Array) {
          return param[0];
      }
  },
  tail: function (param) {
      if (param instanceof Array) {
          return param[param.length -1];
      }

  },
  join: function (param, joinParts) {
      let result = "";
      param.forEach( (val, index) => {
          if (param.length -1 === index) {
              result = `${result}${val}`;
          } else {
              result = `${result}${val}${joinParts}`;
          }
      });

      console.log(result);
      return result;
  }
};
// *****************************************

// TESTS

(_ => {
  console.log('Running _.filter...');

  // Filtering array
  console.log(
    Array.isEqual($.filter([1, 2, 3], function (num) { return num < 2 }),[1])
  );

  // Filtering empty array
  console.log(
    Array.isEqual($.filter([], function (num) { return num < 2 }),[])
  );

  console.log('Running _.map...');

  // Mapping array
  console.log(
    Array.isEqual($.map([5, 6, 7], function (num) { return num + 3 }),[8, 9, 10])
  );

  // Mapping empty array
  console.log(
    Array.isEqual($.map([], function (num) { return num < 2 }),[])
  );

  console.log('Running _.reduce...');

  // Adding numbers
  console.log(
    ($.reduce([1, 2, 3], function (acc, num) { return acc + num }) === 6)
  );

  // Adding empty list
  console.log(
    Array.isEqual($.reduce([], function (acc, num) { return acc + num }),[])
  );

  // Adding with initial value
  console.log(
    ($.reduce([], function (acc, num) { return acc + num }, 0) === 0)
  );

  console.log(
    ($.reduce([1, 2, 3], function (acc, num) { return acc + num }, 4) === 10)
  );

  console.log('Running _.head...');

  // Getting top of array
  console.log(
    ($.head([1, 2, 3]) === 1)
  );

  // Getting top of empty array
  console.log(
    ($.head([]) === undefined)
  );

  console.log('Running _.tail...');

  // Getting tail of array
  console.log(
    ($.tail([1, 2, 3]) === 3)
  );

  // Getting tail of empty array
  console.log(
    ($.tail([]) === undefined)
  );

  console.log('Running _.join...');

  // Joining array
  console.log(
    ($.join(['to','be', 1], '-') === 'to-be-1')
  );

  // Joining empty array
  console.log(
    ($.join([], '-') === '')
  );
})();
