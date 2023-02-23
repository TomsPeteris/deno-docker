import 'https://deno.land/std@0.177.0/dotenv/load.ts';

import { Application } from './deps.ts';
import { environmentConfig } from './config/_index.ts';

const app = new Application();

app.use((ctx) => {
	ctx.response.body = 'Hello World!';
});

await app.listen(environmentConfig[Deno.env.get('environment') || 'default']);
