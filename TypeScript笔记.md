# TypeScript学习笔记

##### 1.是js的一个超集，兼容ES5、ES6，微软开源

通过NODE.JS安装ts npm install -g typescript    编译：将ts编译为可以被浏览器识别的js

引入了和面向对象编程语言（C#）类似的编程方法，但是实质上还是会被编译成js文件执行

##### 2.ts数据类型:增加类型校验，代码更加规范

ES5：可以

var flag=true;

flag=456;

ts不可以，报错

**ts定义变量必须制定类型**

var num:number=123;

数组定义：1.var arr:number[]=[1,2,3];

2.var arr:Array<number>=[1,2,3];

===========

元组类型：（tuple）数组内部类型不一致时使用

let arr:[number,string]=[123,'hhh'];//数组中每一个位置指定类型

============

枚举类型：enum Flag{success=1,error=0};

=====

任意类型 any :

获取界面元素的用法

======

undefined类型

var num:number|undefined；

=======

空类型null

一个元素可能是很多种类型时

=========

function run():void{

}

never类型:其他类型，不是任何类型，从不会出现

var a:never;

##### 3.ts中的函数

ES5定义函数

1.function run(){

return 'run';

}

2.匿名函数

var run2=function(){

return 'run2';

}

ts中强调类型，参数，返回值类型

ES5中形参和实参可以不一样，但是ts必须一致





