import { Profile } from "./Profile";

export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    age: number;
    role: string;
    profile: Profile;
}
