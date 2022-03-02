export const FetchGithubToken = (): string =>
	'jks_mec3Y68DeiMBBBJm6zt7CijF21AgnM4XhPPk'; // 3-shifted
export const FetchStrapiToken = (): string =>
	'17g40j02ji6gh7311k1059k1141332ff9318kjh3g37g5jj98016452j01j91143hj5k923kgg987igh16jgh033940ih567k2131i295j44g4647g01fi6g77j509h0k2g6k49017k03482k7h942k359hkjjj6f99473h2k08220jg3817j5h10h60h7f054h702814hi033jjh8jj9fggk16hi9857i1ijikii5kh997ffh2j6i3190gghi20'; // 5-shifted

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
