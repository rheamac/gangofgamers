export class AuthModel {
    name: String;
    email: String;
    photoUrl: String;
    id: String;
}

export class LocationModel {
    latitude: number
    longitude: number
}
export class EntireModel {
    id: String
    location: LocationModel
    authData: AuthModel
}