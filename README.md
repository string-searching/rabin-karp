:fish: [@string-searching/rabin-karp](https://string-searching.github.io/rabin-karp)
==

Rabin-Karp algorithm for JavaScript.
See [docs](https://string-searching.github.io/rabin-karp/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {rabinKarp} from '@string-searching/rabin-karp';

const code = (c) => c.charCodeAt(0);
const d = 256;
const q = 13;
const findAll = rabinKarp(code, d, q);

const string = 'aaabaaa';
const pattern = 'aa';

for (const i of findAll(string, 0, string.length, pattern, 0, pattern.length)) {
	// yields 0 1 4 5
}
```

[![License](https://img.shields.io/github/license/string-searching/rabin-karp.svg)](https://raw.githubusercontent.com/string-searching/rabin-karp/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@string-searching/rabin-karp.svg)](https://www.npmjs.org/package/@string-searching/rabin-karp)
[![Tests](https://img.shields.io/github/workflow/status/string-searching/rabin-karp/ci?event=push&label=tests)](https://github.com/string-searching/rabin-karp/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/string-searching/rabin-karp.svg)](https://github.com/string-searching/rabin-karp/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/string-searching/rabin-karp.svg)](https://github.com/string-searching/rabin-karp/issues)
[![Downloads](https://img.shields.io/npm/dm/@string-searching/rabin-karp.svg)](https://www.npmjs.org/package/@string-searching/rabin-karp)

[![Code issues](https://img.shields.io/codeclimate/issues/string-searching/rabin-karp.svg)](https://codeclimate.com/github/string-searching/rabin-karp/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/string-searching/rabin-karp.svg)](https://codeclimate.com/github/string-searching/rabin-karp/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/string-searching/rabin-karp/main.svg)](https://codecov.io/gh/string-searching/rabin-karp)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/string-searching/rabin-karp.svg)](https://codeclimate.com/github/string-searching/rabin-karp/trends/technical_debt)
[![Documentation](https://string-searching.github.io/rabin-karp/badge.svg)](https://string-searching.github.io/rabin-karp/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@string-searching/rabin-karp)](https://bundlephobia.com/result?p=@string-searching/rabin-karp)
