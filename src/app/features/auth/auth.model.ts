export  interface SignupCredentials extends SigninCredentials {
    displayName: string,
}

export interface SigninCredentials {
    email: string,
    password: string
}