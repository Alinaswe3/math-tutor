import { redirect } from '@sveltejs/kit';

export function load({ url: { pathname } }: never) {
	throw redirect(302, `${pathname}/1`);
}
