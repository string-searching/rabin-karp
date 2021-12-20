import test from 'ava';

import {single, data} from '@string-searching/specification';

import {rabinKarp} from '../../src/index.js';

const code = (c) => c.codePointAt(0);
const d = 256;
const q13 = 13;
const _findAll13 = rabinKarp(code, d, q13);
const findAll13 = (...args) => _findAll13(...args);

const q101 = 101;
const _findAll101 = rabinKarp(code, d, q101);
const findAll101 = (...args) => _findAll101(...args);

const coden = (c) => BigInt(code(c));
const dn = 256n;
const qn = 13n;
const _findAlln = rabinKarp(coden, dn, qn, 1n);
const findAlln = (...args) => _findAlln(...args);

single({
	test,
	algorithms: [findAll13, findAll101, findAlln],
	data,
	skipEmptyString: true,
	skipEmptyPattern: true,
});
