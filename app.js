
var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
//массив из тегов
let tagCount = {};


for (var i = 0; i < tags.length; i++) {  
if (tagCount[tags[i]]) {
    tagCount[tags[i]]++;
  } else {
    tagCount[tags[i]] = 1;
  }
}

console.log(tagCount); 



var sortedTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1]);
console.log(sortedTags); 
