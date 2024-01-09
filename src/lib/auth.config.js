export const authConfig = {
	providers: [],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.isAdmin = user.isAdmin;
			}

			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user.id = token.id;
				session.user.isAdmin = token.isAdmin;
			}

			return session;
		},
		authorized({ auth, request }) {
			const user = auth?.user;

			const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/posts/add');
			const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

			if (isOnAdminPanel && !user) {
				return false;
			}

			if (isOnLoginPage && user) {
				return Response.redirect(new URL('/', request.nextUrl));
			}

			return true;
		},
	},
};
