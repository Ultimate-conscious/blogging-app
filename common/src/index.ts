import z from 'zod';

const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

type SignupInput = z.infer<typeof signupInput>

const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

type SigninInput = z.infer<typeof signinInput>

const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

type CreateBlogInput = z.infer<typeof createBlogInput>

const updateBlogInput = z.object({
    title: z.string().optional(),
    content: z.string().optional()
})

type UpdateBlogInput = z.infer<typeof updateBlogInput>


export {
    signinInput,
    signupInput,
    SigninInput,
    SignupInput,
    createBlogInput,
    updateBlogInput,
    CreateBlogInput,
    UpdateBlogInput
}