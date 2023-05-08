// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import authorizeUser from 'services/users/authorize';

const authSettings = {
  session: {
    jwt: true,
    maxAge: 14 * 24 * 60 * 60, // session 14 days long (14 day)
  },
  jwt: {
    secret: 'test',
    encryption: true,
  },
  providers: [
    //   CredentialsProvider({
    //     name: 'Credentials',
    //     credentials: {
    //       email: { label: 'Email', type: 'text' },
    //       password: { label: 'Password', type: 'password' },
    //     },
    //     async authorize(credentials) {
    //       const user = await authorizeUser({
    //         email: credentials.email,
    //         password: credentials.password,
    //       });
    //
    //       if (user) {
    //         return user;
    //       }
    //       return null;
    //     },
    //   }),
  ],
  callbacks: {
    //   jwt: async ({ token, user }) => {
    //     if (user) {
    //       token.firstName = user?.firstName;
    //       token.lastName = user?.lastName;
    //       token.role = user?.role;
    //       token.investments = user?.investments;
    //       token.status = user?.status;
    //       token.id = user?.id;
    //     }
    //     return token;
    //   },
    //
    //   session: async ({ session, token }) => {
    //     session.user.firstName = token.firstName;
    //     session.user.lastName = token.lastName;
    //     session.user.role = token?.role;
    //     session.user.investments = token?.investments;
    //     session.user.status = token?.status;
    //     session.user.id = token?.id;
    //
    //     return session;
    //   },
  },
};

console.log('authSettings', authSettings);

// export default NextAuth(authSettings);
