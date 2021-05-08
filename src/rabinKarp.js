import assert from 'assert';
import {startsWith} from '@string-searching/brute-force';

/**
 * Note that q should be random and about m (that is, log m bits) for best
 * performance.
 * Make sure d * (q-1) <= Number.MAX_SAFE_INTEGER
 * and q + (q-1) <= Number.MAX_SAFE_INTEGER. Otherwise use bigints.
 *
 * @param {Function} code Returns a value between 0 and d-1.
 * @param {number} d |∑|
 * @param {number} q is the prime number to use to lessen spurious hits
 * @param {number} [one=1] The value for one. Given 1n if using bigints.
 * @return {Function}
 */
const rabinKarp = (code, d, q, one = 1) => {
	assert(typeof d !== 'number' || q - 1 <= Number.MAX_SAFE_INTEGER / d);
	assert(typeof q !== 'number' || q - 1 / 2 <= Number.MAX_SAFE_INTEGER / 2);
	/**
	 * FindAll.
	 *
	 * @param {string} s
	 * @param {number} si
	 * @param {number} sj
	 * @param {string} p
	 * @param {number} pi
	 * @param {number} pj
	 */
	const findAll = function* (s, si, sj, p, pi, pj) {
		const n = sj - si;
		const m = pj - pi;

		if (n < m) return;

		let sh = code(s[si]) % q;
		let ph = code(p[pi]) % q;
		let of = one;

		console.debug({s: s[si], p: p[pi], sh, ph, of});
		for (let i = 1; i < m; ++i) {
			sh *= d;
			sh %= q;
			sh += code(s[si + i]) % q;
			sh %= q;
			ph *= d;
			ph %= q;
			ph += code(p[pi + i]) % q;
			ph %= q;
			of *= d;
			of %= q;
			console.debug({s: s[si + i], p: p[pi + i], sh, ph, of});
		}

		const j = sj - m;
		let i = si;
		for (; i < j; ++i) {
			if (sh === ph && startsWith(p, pi, pj, s, i)) yield i;

			sh -= ((code(s[i]) % q) * of) % q;
			sh += q;
			sh %= q;
			sh *= d;
			sh %= q;
			sh += code(s[i + m]) % q;
			sh %= q;
			console.debug({s: s[i + m], sh, ph, of});
		}

		if (sh === ph && startsWith(p, pi, pj, s, i)) yield i;
	};

	return findAll;
};

export default rabinKarp;
