export interface User{
    id?: number;
    name?: string;
    email: string;
    password: string;
}

export interface Recipies {
    id: number
    title: string
    ingredients: string
    steps: string
    user_id: string
    image: string
    created_at: string
    updated_at: string,
    user: User
}
  
