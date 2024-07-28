import { Hono }from 'hono';

const blogRouter = new Hono().basePath('/blog')

blogRouter.post('/',c => c.text("post blogs"));

blogRouter.put('/',c => c.text("put blogs"));

blogRouter.get('/:id',(c)=> {
    const id = c.req.param('id');
    return c.text(`you sent this id-> ${id}`);
})

//blogRouter.get('/bulk/',(c)=> c.text("saare blogs bhej"))


export  {
    blogRouter
}