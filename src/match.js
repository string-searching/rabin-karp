/**
 * Matching function.
 *
 * @param {number} m
 * @param {string} s
 * @param {number} si
 * @param {string} p
 * @param {number} pi
 */
const match = (m, s, si, p, pi) => {
	console.debug('match', {
		s: s.slice(si, si + m),
		p: p.slice(pi, pi + m),
	});
	for (let j = 0; j < m; ++j) {
		if (s[si + j] !== p[pi + j]) return false;
	}

	return true;
};

export default match;
