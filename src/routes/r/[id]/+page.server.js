import { redirect } from '@sveltejs/kit';

export const load = async ({ params, url }) => {
    const { id } = params
    return { id }
}



export const actions = {
    default: async ({ request }) => {
        const formdata = await request.formData();
        const nextId = formdata.get('nextId')
        throw redirect(
            307,
            `/r/${nextId}`
        );
    }
};
