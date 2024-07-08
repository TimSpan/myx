# TypeScript

## 类型注解

```ts
let age: number = 18
```

说明:代码中的 `:number` 就是类型注解。

作用:为变量**添加类型约束**。比如，上述代码中，约定变量age的类型为number(数值类型)。

解释:**约定了什么类型，就只能给变量赋值该类型的值**，否则，就会报错

## TypeScript常用基础类型

可以将 TS 中的常用基础类型细分为两类:1JS 已有类型。2TS新增类型

1、JS 已有类型

- 原始类型：number/string/boolean/null/undefined/symbol
- 对象类型：object(包括，数组、对象、函数等对象)。

2、TS 新增类型

- 联合类型、自定义类型(类型别名)、接口、元组、字面量类型、举、void、any等。

## 联合类型

需求:数组中既有number类型，又有 string类型，这个数组的类型应该如何写?

```ts
let arr: (number | string)[] = [1, 2, 3, 'a']
```

解释:  `|`  (竖线)在 TS 中叫做联合类型

由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种

注意:这是TS 中联合类型的语法，只有一根竖线，不要与js中的或( || )混淆了。

## 类型别名type

**类型别名**(自定义类型):为任意类型起别名

使用场景:当同一类型(复杂)被多次使用时，可以通过类型别名，**简化该类型的使用**，

```ts
// 不使用type需要频繁书写类型
let arr: (number | string)[] = [1, 2, 3, 'a']
let arr1: (number | string)[] = [1, 2, 3, 'a']
// 改造
type customArray = (number | string)[]
let arr2: customArray = [1, 2, 3, 'a']
```

1. 使用 `type` 关键字来创建类型别名。
2. 类型别名(比如，此处的 customArray)，可以是任意合法的变量名称。
3. 创建类型别公后，直接**使用该类型别名作为变量的类型注解**即可。

## 类型断言

有时候你会比TS 更加明确一个值的类型，此时，可以使用**类型断言**来指定更具体的类型。

比如

```ts
const alink = document.getElementById('link')
alink.href
```

```html
<a href="www.baidu.com" id="link">百度一下</a>
```

![image-20240705165531673](.\img\image-20240705165531673.png)

![image-20240705165211137](.\img\image-20240705165211137.png)

注意:getElementByld方法返回值的类型是HTMLElement，该类型只包含所有标签公共的属性或方法，不包含a标签特有的 href 等属性。

因此，这个类型太宽泛(不具体)，无法操作href等a标签特有的属性或方法。

解决方式:这种情况下就需要使用类型断言指定更加具体的类型。

```ts
const alink = document.getElementById('link') as HTMLAnchorElement
alink.href
```

![image-20240705165627560](.\img\image-20240705165627560.png)

1. 使用 `as` 关键字实现类型断言
2. 关键字 as 后面的类型是一个更加具体的类型(HTMLAnchorElement是HTMLElement 的子类型)
3. 通过类型断言，aLink的类型变得更加具体，这样就可以访问a标签特有的属性或方法了。

## 类型断言的另一种语法

另一种语法，使用`<>`语法，这种语法形式不常用

并且这种语法在 `jsx` 中会冲突，所以在写jsx的时候，这种语法是用不了的

```ts
const alink = <HTMLAnchorElement>document.getElementById('link')
```







## 对象类型

JS 中的对象是由属性和方法构成的

而 TS 中对象的类型就是在**描述对象的结构**(有什么类型的属性和方法)。

对象类型的写法:

```ts
let person: { name: string, age: number, sayHi(): void; greet(name: string): void } = {
    name: 'myx',
    age: 18,
    sayHi() { },
    greet(name) { },
}
```

```ts
let person: { name: string, age: number, sayHi: () => void, greet(name: string): void } = {
    name: 'myx',
    age: 18,
    sayHi() { },
    greet(name) { },
}
```

1. 直接使用 `{ }` 来描述对象结构。属性采用**属性名:类型**的形式;方法采用**方法名():返回值类型**的形式。
2. 如果方法有参数，就在方法名后面的小括号中指定参数类型(比如:greet(name:string):void)
3. 在一行代码中指定对象的多个属性类型时，使用;(分号)来分隔
4. 如果一行代码只指定一个属性类型(通过换行来分隔多个属性类型)，可以去掉;(分号)
5. 方法的类型也可以使用箭头函数形式(比如:{sayHi:()=>void})

## 类型兼容性

![image-20240705171421640](.\img\image-20240705171421640.png)

两种类型系统:

1、StructuralType System(结构化类型系统)

2、NominalType System(标明类型系统)

**TS 采用的是结构化类型系统**，也叫做ducktyping鸭子类型)，**类型检查关注的是值所具有的形状**。

也就是说，在结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型。

```ts
class Point { x: number; y: number }
class Point2D { x: number; y: number }
const p: Point = new Point2D
```

1. Point和 Point2D 是两个名称不同的类。
2. 变量p的类型被显示标注为Point类型，但是，它的值却是Point2D的实例，并且没有类型错误。
3. 因为 TS 是结构化类型系统，只检查Point和 Point2D的结构是否相同(相同，都具有x和y两个属性，属性类型也相同
4. 但是，如果在NominalType System 中(比如，C#、Java等)，它们是不同的类，类型无法兼容。







## 交叉类型

先回顾一下之前的接口继承，通过 extends 关键字就可以去继承一个接口

```ts
interface Point2D {
    x: number
    y: number
}
//通过继承 Point3D 具有 x/y/z 三个属性
interface Point3D extends Point2D { z: number }
let p3: Point3D = {
    x: 1,
    y: 2,
    z: 3
}
```

`交叉类型(&)`:功能类似于接口继承(extends)，**用于组合多个类型为一个类型**(常用于对象类型)

比如：

```ts
interface Person { name: string }
interface Contact { phone: string }
type PersonDetail = Person & Contact
let obj: PersonDetail = {
    name: 'jack',
    phone: '133.....'
}
```

解释:使用交叉类型后，新的类型PersonDetail就同时具备了Person和 Contact的所有属性类型

相当于：

```ts
type PersonDetail = {
    name: 'jack',
    phone: '133.....'
}
```

## 交叉类型(&)和接口继承(extends)的对比

- 相同点：都可以实现对象类型的组合，
- 不同点：两种方式实现类型组合时，对于`同名属性之间，处理类型冲突的方式不同`。

![image-20240705173318150](.\img\image-20240705173318150.png)

```ts
interface A { fn: (value: number) => string }
interface B { fn: (value: string) => string }
type C = A & B
```

说明：

以上代码，接口继承会报错(类型不兼容);

交叉类型没有错误，可以简单的理解为:

```ts
interface C { fn: (value: string | number) => string }
```

## 索引签名类型

绝大多数情况下，我们都可以在使用对象前就确定对象的结构，并为对象添加准确的类型。

使用场景：

**当无法确定对象中有哪些属性**(或者说对象中可以出现任意多个属性)，此时，就用到索引签名类型了

```ts
interface anyObject {
  [key: string]: string
}
```

1. 使用 `[key: string]` 来约束该接口中允许出现的属性名称。表示只要是string 类型的属性名称，都可以出现在对象中。
2. 这样，对象 obj中就可以出现任意多个属性(比如，a、b等)。
3. **key 只是一个占位符**，可以换成任意合法的变量名称。
4. 隐藏的前置知识:**JS中对象({})的键是string类型的**，

## 映射类型

**映射类型:基于旧类型创建新类型(对象类型)**

比如，类型PropKeys有x/y/z，另一个类型Type1中也有x/y/z，并且Type1中x/y/z的类型相同:

```ts
type PropKeys = 'x' | 'y' | 'z'
type Tpye1 = { x: number, y: number, z: number }
```

这样书写没错，但x/y/z重复书写了两次。像这种情况，就可以使用映射类型来进行简化。

```ts
type PropKeys = 'x' | 'y' | 'z'
type Tpye1 = { [key in PropKeys]: number }
```

1. 映射类型是基于索引签名类型的，所以，该语法类似于索引签名类型，也使用了 [ ]。
2. `Key in PropKeys` 表示 Key 可以是 PropKeys 联合类型中的任意一个，类似于 `for in(let k in obj)`。
3. 使用映射类型创建的新对象类型Type2和类型 Type1 结构完全相同。
4. 注意:`映射类型只能在类型别名中使用，不能在接口中使用`。

## 映射类型 keyof

映射类型除了根据联合类型创建新类型外，还可以根据对象类型来创建:

```ts
type Props = { a: number, b: string, c: boolean }
type Type3 = { [key in keyof Props]: number }
```

1. 首先，先执行 keyof Props 获取到对象类型Props 中所有键的联合类型即，'a'|'b'|'c'
2. 然后，`Key in….` 就表示 Key 可以是 Props 中所有的键名称中的任意一个

## 索引查询类型

索引查询（访问）类型

作用:`用来查询属性的类型`，

```ts
type Props = { a: number, b: string, c: boolean }
type TypeA = Props['a']  //number类型
```

解释:`Props['a']` 表示查询类型Props 中属性'a'对应的类型number。所以，TypeA的类型为 number

注意：**[ ]中的属性必须存在于被查询类型中**，否则就会报错。

## 索引查询类型（同时查询多个）

```ts
type Props = { a: number, b: string, c: boolean }
type TypeA = Props['a' | 'b']
```

解释:使用字符串字面量的联合类型，获取属性a和b对应的类型，结果为: string | number。

```ts
type TypeB = Props[keyof Props]
```

解释:使用keyof操作符获取Props 中所有键对应的类型，结果为:string | number | boolean









## 函数可选参数

**可选参数：在可传可不传的参数名称后面添加？(问号)**、

如果提供了该属性，它必须符合定义的类型。

## 接口

## 接口继承

```ts
interface Point2D { x: number; y: number }
interface Point3D extends Point2D { z: number }
```

继承后，Point3D同时有x,y,x三个属性了

## 泛型

使用 any 可以接受任意类型，但是这样就失去了 TS 的类型保护，类型不安全

泛型 在保护类型安全 （不丢失类型信息）的同时，可以 **让函数等与多种不同的类型一起工作** ，灵活可复用

```ts
function id<Type>(value: Type): Type { return value }
```

语法:

1. 在函数名称的后面添加`<>(尖括号)`，**尖括号中添加类型变量**，比如此处的Type。
2. **类型变量**Type，**是一种特殊类型的变量，它处理类型**而不是值。
3. 该类型变量相当于一个类型容器，能够捕获用户提供的类型(具体是什么类型由用户调用该函数时指定)
4. 因为 Type 是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型。
5. 类型变量Type，可以是任意合法的变量名称。

## 泛型约束

默认情况下，泛型函数的类型变量Type 可以代表多个类型，这导致无法访问任何属性比如，id('a')调用函数时获取参数的长度:

```ts
function id<Type>(value: Type): Type {
    console.log(value.length)
    return value
}
```

Type 可以代表任意类型，无法保证一定存在length属性，比如number 类型就没有length。此时，就需要为泛型**添加约束**来收缩类型(缩窄类型取值范围)

添加泛型约束收缩类型，主要有以下两种方式:

1. 指定更加具体的类型
2. 添加约束

**1、指定更加具体的类型**

```ts
function id<Type>(value: Type[]): Type[] {
    console.log(value.length)
    return value
}
```

比如，将类型修改为Type[ ] (Type类型的数组)，因为只要是数组就一定存在length属性，因此就可以访问了。

**2、添加约束**

```ts
interface ILength { length: number }
function id<Type extends ILength>(value: Type): Type {
    console.log(value.length)
    return value
}
```

`这里的 extends 就不能去理解为继承了`

理解：**这个Type类型变量必须满足后面类型的要求**

## 多个泛型变量

泛型的类型变量可以有多个，并且类型变量之间还可以约束(比如，第二个类型变量受第一个类型变量约束)。

比如，创建一个函数来获取对象中属性的值:

```ts
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}
let person = { name: 'jack', age: 18 }
getProp(person, 'name')
```

1. 添加了第二个类型变量Key，两个类型变量之间使用(,)逗号分隔。
2. `keyof` 关键字接收一个对象类型，生成其键名称(可能是字符串或数字)的联合类型。
3. 本示例中 keyof Type 实际上获取的是person 对象所有键的联合类型，也就是:'name' 'age'。
4. 类型变量Key 受 Type 约束，可以理解为:Key只能是 Type 所有键中的任意一个，或者说只能访问对象中存在的属性。

## 泛型接口

```ts
interface iDFunc<Type> {
    id: (value: Type) => Type,
    ids: () => Type[]
}
```

```ts
let obj: iDFunc<number> = {
    id(value) { return value },
    ids() { return [1, 2, 3] }
}
```

解释:

1. 在接口名称的后面添加 `<类型变量>`，那么，这个接口就变成了泛型接口。
2. 接口的类型变量，对接口中所有其他成员可见，也就是**接口中所有成员都可以使用类型变量**。
3. 使用泛型接口时，**需要显式指定具体的类型(比如，此处的 IdFunc `<nunber>`)。** 
4. 此时，id方法的参数和返回值类型都是 number，ids方法的返回值类型是 number [ ]。

## 数组是泛型接口

实际上，JS 中的数组在 TS 中就是一个泛型接口,

![image-20240704150107559](.\img\image-20240704150107559.png)

解释:

当我们在使用数组时，TS 会根据数组的不同类型，来自动将类型变量设置为相应的类型

技巧:可以通过 Ctrl+鼠标左键(Mac:option+鼠标左键)来查看具体的类型信息。

## 泛型工具类型

参考链接;https://segmentfault.com/a/1190000041910773#item-1

泛型工具类型:TS内置了一些常用的工具类型，来简化TS中的一些常见操作。

说明:它们都是基于泛型实现的(泛型适用于多种类型，更加通用)，并且是内置的，可以直接在代码中使用

这些工具类型有很多

1. `Partial<Type>`

2. `Readonly<Type>`

3. `Pick<Type, Keys>`

4. `Record<Keys, Type>`

5. `omit`

6. `Required`

7. `Extract` 

8. `Exclude` 

9. `ReturnType` 

10. `NonNullable` 

## 泛型工具类型 Partial

泛型工具类型  `Partial<Type>`**用来构造(创建)一个类型，将Type的所有属性设置为可选**

```ts
interface Props {
    id: string,
    children: number[]
}
type PartialProps = Partial<Props>
// 想使用Props接口，这两个属性都是必选的。
// 那么如果我想要一个和Props结构一模一样，但是属性都是可选的，就可以用Partial
```

构造出来的新类型 PartialProps结构和 Props 相同，但所有属性都变为可选的。

## 泛型工具类型 Required

构造一个类型，将类型 `T` 的所有属性变为**必选**

```ts
interface User {
    id?: number;
    name?: string;
    age?: number;
}
type RequiredUser = Required<User>;
let user: RequiredUser = {
    id: 1,
    name: "Alice",
    age: 30
};
```

## 泛型工具类型 Omit

从类型 `T` 中**剔除一些属性来构造一个新的类型**

```ts
interface User {
    id: number;
    name: string;
    age: number;
}

type UserWithoutAge = Omit<User, "age">;

let user: UserWithoutAge = {
    id: 1,
    name: "Alice"
};
```

## 泛型工具类型 Exclude

**从类型 `T` 中剔除所有可以赋值给类型 `U` 的联合成员**

```ts
type T = "a" | "b" | "c";
type U = "a" | "b";

type ExcludeTU = Exclude<T, U>; // "c"
```

## 泛型工具类型 Extract

**从类型 `T` 中提取所有可以赋值给类型 `U` 的联合成员**

```ts
type T = "a" | "b" | "c";
type U = "a" | "b";

type ExtractTU = Extract<T, U>; // "a" | "b"
```

## 泛型工具类型 NonNullable

构造一个类型，将类型 `T` 中的所有 `null` 和 `undefined` 排除掉

```ts
type T = string | number | null | undefined;

type NonNullableT = NonNullable<T>; // string | number
```

## 泛型工具类型 ReturnType

获取函数类型 `T` 的返回类型

```ts
function getUser() {
    return {
        id: 1,
        name: "Alice",
        age: 30
    };
}

type User = ReturnType<typeof getUser>;

let user: User = {
    id: 1,
    name: "Alice",
    age: 30
};
```

## 泛型工具类型 InstanceType

获取**构造函数类型** `T` 的**实例类型**

```ts
class User {
    constructor(public id: number, public name: string, public age: number) {}
}

type UserType = InstanceType<typeof User>;

let user: UserType = new User(1, "Alice", 30);
```









## 泛型工具类型 Readonly

泛型工具类型 `Readonly<Type>`**用来构造一个类型，将Type的所有属性都设置为readonly(只读)**

```ts
interface Props {
    id: string,
    children: number[]
}
type ReadonlyProps = Readonly<Props>

let props: ReadonlyProps = { id: '1', children: [] }
props.id = '2'
```

![image-20240708170343376](.\img\image-20240708170343376.png)

解释:构造出来的新类型 ReadonlyProps结构和 Props 相同，但所有属性都变为只读的。

当我们想重新给id 属性赋值时，就会报错:无法分配到 'id'，因为它是只读属性。

## 泛型工具类型 Pick

泛型工具类型 `Pick<Type,Keys>`**从 Type 中选择一组属性来构造新类型**

```ts
interface Props {
    id: string,
    title: string,
    children: number[]
}
type PickProps = Pick<Props, 'id' | 'title'>
```

1. Pick 工具类型有两个类型变量:1、**表示选择谁的属性**2、**表示选择哪几个属性**
2. 其中第二个类型变量，如果只选择一个则只传入该属性名即可。
3. **第二个类型变量传入的属性只能是第一个类型变量中存在的属性，**
4. 构造出来的新类型 PickProps，只有id 和 title 两个属性类型。

## 泛型工具类型 Record

泛型工具类型 `Record<Keys,Type>`**构造一个对象类型，属性键为Keys，属性类型为 Type。**

```ts
type RecordObj = Record<'a' | 'b' | 'c', string[]>
let obj: RecordObj = {
    a: ['1'],
    b: ['1'],
    c: ['1'],
}
```

1. Record 工具类型有两个类型变量:1、**表示对象有哪些属性**2、**表示对象属性的类型**。
2. 构建的新对象类型RecordObj表示:这个对象有三个属性分别为a/b/c，属性值的类型都是string[ ]







## TS中的 typeof 运算符

众所周知，JS中提供了 typeof 操作符，用来在JS中获取数据的类型。

实际上，TS也提供了 typeof 操作符:可以在**类型上下文**中引用变量或属性的类型(类型查询)。

```ts
let p = { x: 1, y: 2 }
function formatPoint(params: typeof p) { }
formatPoint({ x: 1, y: 100 })
```

使用场景:根据已有变量的值，获取该值的类型，来简化类型书写。

## TS 中的高级类型：

1. class 类
2. 类型兼容性
3. 交叉类型
4. 泛型 和 keyof
5. 索引签名类型 和 索引查询类型
6. 映射类型





















