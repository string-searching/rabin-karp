import test from 'ava';

import {single, data} from '@string-searching/specification';

import {rabinKarp} from '../../src/index.js';

const code = (c) => c.charCodeAt(0);
const d = 256;
const q = 13;
const _findAll = rabinKarp(code, d, q);
const findAll = (...args) => _findAll(...args);

const coden = (c) => BigInt(c.charCodeAt(0));
const dn = 256n;
const qn = 13n;
const _findAlln = rabinKarp(coden, dn, qn, 1n);
const findAlln = (...args) => _findAlln(...args);

single({
	test,
	algorithms: [findAll, findAlln],
	data,
	skipEmptyString: true,
	skipEmptyPattern: true,
});
