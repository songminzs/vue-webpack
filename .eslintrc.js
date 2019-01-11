module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  rules: {
    'indent': [2, 2], // 缩进风格
    'quotes': [2, 'single'],  // 字符串使用单引号
    'no-unused-vars': [2, {'vars': 'all', 'args': 'after-used'}], // 不要定义未使用的变量
    'keyword-spacing': 2, // 关键字后面加空格
    'space-before-function-paren': [2, {'anonymous': 'always', 'named': 'never'}], // 函数声明时括号与函数名间加空格
    'eqeqeq': ['error', 'smart'], // 比较的时候使用严格等于
    'space-infix-ops': [2, {'int32Hint': true}], // 操作符周围的空格
    'comma-spacing': [2, { "before": false, "after": true }], // 逗号后面加空格
    "brace-style": [2, "1tbs", { "allowSingleLine": false}], // 大括号风格
    "curly": ["error", "all"], // 强制使用花括号的风格
    'handle-callback-err': 2, // 不要丢掉异常处理中err参数
    "no-undef": 2, // 不允许未声明的变量
    "no-multiple-empty-lines": [2, {"max": 2}], // 空行最多不能超过两行
    'operator-linebreak': [2, "before"], // 对于三元运算符 ? 和 : 与他们所负责的代码处于同一行
    "one-var": [2, "never"], // 强制变量声明放在一起
    "no-cond-assign": 2, // 条件语句的条件中不允许出现赋值运算符
    'block-spacing': [2, 'always'], // 单行代码块两边加空格
    "camelcase": [2, {"properties": "never"}], // 强制驼峰命名规则
    "comma-dangle": ["error", "never"], // 是否允许对象中出现结尾逗号
    "comma-style": [2, "last"], // 逗号风格
    'dot-location': 2, // 点号操作符须与属性需在同一行
    "eol-last": 2, // 文件以换行符结束
    'func-call-spacing': 2, // 函数调用时标识符与括号间不留间隔。
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}], // 对象字面量中冒号的前后空格
    "new-cap": [2, {"newIsCap": true, "capIsNew": false}], // 构造函数名字首字母要大写
    "new-parens": 2, // new时构造函数必须有小括号
    'accessor-pairs': 2, // 对象中定义了存值器，一定要对应的定义取值器
    'constructor-super': 2, // 子类的构造器中一定要调用 super
    "no-array-constructor": 2, // 不允许使用数组构造器
    "no-caller": 2, // 不允许使用arguments.callee和arguments.caller属性
    'no-class-assign': 2, // 避免对类名重新赋值
    'no-const-assign': 2, // 避免修改使用 const 声明的变量。
    "no-constant-condition": 2, // 条件语句的条件中不允许出现恒定不变的量
    "no-control-regex": 2, // 正则表达式中不允许出现控制字符
    "no-debugger": 2, // 不允许出现debugger语句
    "no-delete-var": 2, // 不允许使用delete操作符
    "no-dupe-args": 2, // 函数定义的时候不允许出现重复的参数
    'no-dupe-class-members': 2, // 类中不要定义冗余的属性。
    "no-dupe-keys": 2, // 对象中不允许出现重复的键
    "no-duplicate-case": 2, // switch语句中不允许出现重复的case标签
    'no-duplicate-imports': 2, // 同一模块有多个导入时一次性写完
    "no-empty-character-class": 2, // 正则表达式中不允许出现空的字符组
    'no-empty-pattern': 2, // 不要解构空值
    "no-eval": 2, // 不允许使用eval()
    "no-ex-assign": 2, // 在try catch语句中不允许重新分配异常变量
    "no-extend-native": 2, // 不允许扩展原生对象
    "no-extra-bind": 2, // 不允许不必要的函数绑定
    "no-extra-boolean-cast": 2, // 不允许出现不必要的布尔值转换
    "no-extra-parens": 2, // 不允许出现不必要的圆括号
    "no-fallthrough": 2, // 不允许switch按顺序全部执行所有case,switch 一定要使用 break 来将条件分支正常中断
    "no-floating-decimal": 2, // 不允许浮点数缺失数字
    "no-func-assign": 2, // 不允许重新分配函数声明
    "no-global-assign": 2, // 不允许重新分配原生对象
    "no-implied-eval": 2, // 不允许使用隐式eval()
    "no-inner-declarations": [2, "functions"], // 不允许在嵌套代码块里声明函数
    "no-invalid-regexp": 2, // 不允许在RegExp构造函数里出现无效的正则表达式
    "no-irregular-whitespace": 2, // 不允许出现不规则的空格
    "no-iterator": 2, // 不允许使用__iterator__属性
    "no-label-var": 2, // 不允许标签和变量同名
    "no-labels": ["error", {
      "allowLoop": false,
      "allowSwitch": false
    }], // 不允许标签语句
    "no-lone-blocks": 2, // 不允许不必要的嵌套代码块
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"], // 不允许混用tab和空格
    "no-multi-spaces": 2, // 不允许出现多余的空格
    "no-multi-str": 2, // 不允许用\来让字符串换行
    "no-new": 2, // 不允许new一个实例后不赋值或者不比较
    "no-new-func": 2, // 不允许使用new Function
    "no-new-object": 2, // 禁止使用new Object()
    'no-new-require': 2, // 禁止使用 new require
    'no-new-symbol': 2, // 禁止使用 Symbol 构造器
    "no-new-wrappers": 2, // 不允许使用new String，Number和Boolean对象
    "no-obj-calls": 2, // 不允许把全局对象属性当做函数来调用
    "no-octal": 2, // 不允许使用八进制字面值
    "no-octal-escape": 2, // 不允许使用八进制转义序列
    'no-path-concat': 2, // 使用 __dirname 和 __filename 时尽量避免使用字符串拼接
    "no-proto": 2, // 不允许使用__proto__属性
    "no-redeclare": 2, // 不允许变量重复声明
    "no-regex-spaces": 2, // 正则表达式中不允许出现多个连续空格
    "no-return-assign": 2, // 不允许在return语句中使用分配语句
    'no-self-assign': 2, // 避免将变量赋值给自己
    "no-self-compare": 2, // 不允许自己和自己比较
    "no-sequences": 2, // 不允许使用逗号表达式
    "no-shadow-restricted-names": 2, // js关键字和保留字不能作为函数名或者变量名
    "no-sparse-arrays": 2, // 数组中不允许出现空位置
    'no-tabs': 2, // 不要使用制表符
    'no-template-curly-in-string': 2, // 正确使用 ES6 中的字符串模板
    'no-this-before-super': 2, // 使用 this 前请确保 super() 已调用
    "no-throw-literal": 2, // 不允许抛出字面量错误 throw "error"
    "no-trailing-spaces": 2, // 一行最后不允许有空格
    "no-undef-init": 2, // 不允许初始化变量时给变量赋值undefined
    'no-unmodified-loop-condition': 2, // 循环语句中注意更新循环变量
    'no-unneeded-ternary': 2, // 如果有更好的实现，尽量不要使用三元表达式
    "no-unreachable": 2, // 在return，throw，continue，break语句后不允许出现不可能到达的语句
    'no-unsafe-finally': 2, // finally 代码块中不要再改变程序执行流程
    'no-unsafe-negation': 2, // 关系运算符的左值不要做取反操作
    'no-useless-call': 2, // 避免不必要的 .call() 和 .apply()
    'no-useless-computed-key': 2, // 避免使用不必要的计算值作对象属性
    'no-useless-constructor': 2, // 禁止多余的构造器
    'no-useless-escape': 2, // 禁止不必要的转义
    'no-useless-rename': 2, // import, export 和解构操作中，禁止赋值到同名变量
    'no-whitespace-before-property': 2, // 属性前面不要加空格
    'no-with': 2, // 禁止使用 with
    'object-property-newline': 2, // 对象属性换行时注意统一代码风格
    "padded-blocks": [2, "never"], // 块内行首行尾是否空行
    'rest-spread-spacing': 2, // 展开运算符与它的表达式间不要留空白
    "space-before-blocks": [2, "always"], //块前的空格
    'space-in-parens': 2, // 圆括号间不留空格
    "space-unary-ops": [2, { "words": true, "nonwords": false}], // 一元运算符前后不要加空格
    'spaced-comment': 2, // 注释首尾留空格
    'template-curly-spacing': 2, // 模板字符串中变量前后不加空格
    "use-isnan": 2, // 要求检查NaN的时候使用isNaN()
    "valid-typeof": ["error", {
      "requireStringLiterals": true
    }], // 在使用typeof表达式比较的时候强制使用有效的字符串
    "wrap-iife": [2, "any"], // 立即执行表达式的括号风格
    'yield-star-spacing': 2, // yield * 中的 * 前后都要有空格
    "yoda": [2, "never", {"exceptRange": true}], // 不允许在if条件中使用yoda条件
    "semi": [2, "never"], // 强制语句分号结尾
    "semi-spacing": [2, {"before": false, "after": true}], // 分后前后空格
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    worker: true,
    mocha: true,
    phantomjs: true,
    serviceworker: true
  }
};
