export interface UserModel {
        name: String,
        surname: String,
        email: String,
        emailVerified: Boolean,
        cellphone: String,
        dateOfBirth: Date,
        role: String,
        token: String,
        tokenExpiresInSeconds: Number
}