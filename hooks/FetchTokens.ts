export const FetchGithubToken = (): string =>
	'jks_mec3Y68DeiMBBBJm6zt7CijF21AgnM4XhPPk'; // 3-shifted
export const FetchStrapiToken = (): string =>
	'k9k5k6464k923g4k093833535fg8j8518i3i46k0j8h582g7h0g5g62h8959f3j3j80201547g65i1h82kj63619if50kk1g179jj7j50k6hkfhj08k943h2352606970i5551557g5769823kk1g7hh708fk3568kg1gf0704049k36i794j6h12h42hffh0125fi5k52gh8452jf9f76j53i7h20ig05211296335725467057hk182if3h2k1'; // 5-shifted

export const caesarCipher = (s: string, k: number): string => {
	var n = 26; // alphabet letters amount
	if (k < 0) {
		return caesarCipher(s, k + n);
	}
	return s
		.split('')
		.map(function (c) {
			if (c.match(/[a-z]/i)) {
				var code = c.charCodeAt(0);
				var shift =
					code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
				return String.fromCharCode(((code - shift + k) % n) + shift);
			}
			return c;
		})
		.join('');
};
