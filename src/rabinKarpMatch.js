/**
 * Rabin-Karp matching function. Like a normal match, but checks whether
 * hash value is equal first.
 *
 * @param {number} sh String hash.
 * @param {number} ph Pattern hash.
 * @param {number} m
 * @param {string} s
 * @param {number} si
 * @param {string} p
 * @param {number} pi
 */
const rabinKarpMatch = (sh, ph, m, s, si, p, pi) => {
	console.debug('rabinKarpMatch', {
		sh,
		ph,
		s: s.slice(si, si + m),
		p: p.slice(pi, pi + m),
	});
	if (sh !== ph) return false;
	for (let j = 0; j < m; ++j) {
		if (s[si + j] !== p[pi + j]) return false;
	}

	return true;
};

export default rabinKarpMatch;
