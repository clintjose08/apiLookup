// var fs = require('fs');
const url='https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf&lang=en-en&text=done';
module.exports=function (req, res) {
  const data="I have hopes.I have hopes . I did something . I did somehow something something . I did"

      var datas=data.replace(/[.]/g," ")
      var wordsArray = splitByWords(datas);

      var wordsMap = createWordMap(wordsArray);
posArray(wordsArray);
      var finalWordsArray = sortByCount(wordsMap);

      console.log(finalWordsArray);
      console.log('The word "' + finalWordsArray[0].name + '" appears the most in the file ' +
        finalWordsArray[0].total + ' times');

      /*
        output:
        [ { name: 'he', total: 10 },
          { name: 'again', total: 7 },
          { name: 'away', total: 7 },
          ... ]
        The word "he" appears the most in the file 10 times

      */
      res.send(finalWordsArray)
      console.log("tested");
}


    function splitByWords (text) {
      // split string by spaces (including spaces, tabs, and newlines)
      var wordsArray = text.split(/\s+/);
      return wordsArray;
    }


    function createWordMap (wordsArray) {

      // create map for word counts
      var wordsMap = {};

      wordsArray.forEach(function (key) {
        if (wordsMap.hasOwnProperty(key)) {
          wordsMap[key]++;
        } else {
          wordsMap[key] = 1;
        }
      });

      return wordsMap;

    }
    function posArray (wordsArray) {

      // create map for word counts
      var posArray = {};

//
//         fetch(url) // Call the fetch function passing the url of the API as a parameter
// .then(function(data) {
//     console.log(data.pos);
// })
// .catch(function() {
//     // This is where you run code if the server returns any errors
// });
//     });
 
}
    function sortByCount (wordsMap) {

      // sort by count in descending order
      var finalWordsArray = [];
      finalWordsArray = Object.keys(wordsMap).map(function(key) {
        return {
          name: key,
          total: wordsMap[key]
        };
      });

      finalWordsArray.sort(function(a, b) {
        return b.total - a.total;
      });

      return finalWordsArray;

    }
