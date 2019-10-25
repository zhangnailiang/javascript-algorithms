/**
 * Hash表可以在常数时间内进行插入、删除和寻找 （就是有较低的时间复杂度）
 * 这是其它的数据结构难以做到的。通常使用Hash表是为了利用其高效的查找方法。
 * Hash表的核心在于如何处理冲突，不同的hash算法使用不同的冲突处理办法。
 */




function HashTable() {
   this.table = new Array(137);

   // 函数的定义 赋值给类
   this.simpleHash = simpleHash;
   this.showDistro = showDistro;
   this.put = put;
   //this.get = get;
}

function put(key, data) {
   var pos = this.betterHash(key);
   if (this.table[pos] == undefined) {
      this.table[pos] = key;
      this.values[pos] = data;
   }
   else {
      while (this.table[pos] != undefined) {
         pos++;
      }
      this.table[pos] = key;
      this.values[pos] = data;
   }
}

function get(key) {
   var hash = -1;
   hash = this.betterHash(key);
   if (hash > -1) {
      for (var i = hash; this.table[hash] != undefined; i++) {
         if (this.table[hash] == key) {
            return this.values[hash];
         }
      }
   }
   return undefined;
}

function simpleHash(data) {
   var total = 0;
   for (var i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
   }
   return total % this.table.length;
}

function showDistro() {
   var n = 0;
   for (var i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
         print(i + ": " + this.table[i]);
      }
   }
}

function betterHash(string) {
   const H = 37;
   var total = 0;
   for (var i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
   }
   total = total % this.table.length;
   if (total < 0) {
      total += this.table.length - 1;
   }
   return parseInt(total);
}

function betterHash(string) {
   const H = 37;
   var total = 0;
   for (var i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
   }
   total = total % this.table.length;
   if (total < 0) {
      total += this.table.length - 1;
   }
   return parseInt(total);
}

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
