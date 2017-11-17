# kenote-react-admin-passport

Admin Passport for React

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Codecov Status][codecov-image]][codecov-url]
[![Gratipay][licensed-image]][licensed-url]

[npm-image]: https://img.shields.io/npm/v/kenote-react-admin-passport.svg
[npm-url]: https://www.npmjs.org/package/kenote-react-admin-passport
[downloads-image]: https://img.shields.io/npm/dm/kenote-react-admin-passport.svg
[downloads-url]: https://npmjs.org/package/kenote-react-admin-passport
[travis-image]: https://travis-ci.org/thondery/kenote-react-admin-passport.svg?branch=master
[travis-url]: https://travis-ci.org/thondery/kenote-react-admin-passport
[codecov-image]: https://img.shields.io/codecov/c/github/thondery/kenote-react-admin-passport/master.svg
[codecov-url]:   https://codecov.io/github/thondery/kenote-react-admin-passport?branch=master
[licensed-image]: https://img.shields.io/badge/license-MIT-blue.svg
[licensed-url]: https://github.com/thondery/kenote-react-admin-passport/blob/master/LICENSE

## Install & Usages

Install

```bash
yarn add kenote-react-admin-passport
```

\<Screen\>

```js
import { Screen } from 'kenote-react-admin-passport'

(
  <Screen
    titleName="管理平台"
    logoSource="<LOGO图片地址>"
    description="基于 React 和 Ant Design 设计与开发的管理平台."
    copyright={(
      <span>
        2017 <b>Kenote</b> 实验室出品
      </span>
    )}
    >
    <Form>
      ...
    </Form>
  </Screen>
)
```

## API

\<Screen\>

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| titleName | 界面标题名称 | string | Kenote Admin |
| logoSource | 界面LOGO图片地址 | string | -- |
| description | 节目描述文字 | string | 基于 React 和 Ant Design 设计与开发的管理平台. |
| copyright | 版权信息 | string \| element | 2017 <b>Kenote</b> 实验室出品 |

## License

this repo is released under the [MIT License](https://github.com/thondery/kenote-react-admin-passport/blob/master/LICENSE).