## Javascript SDK for Axiom

## Quickstart

Install using `npm install`:

```shell
npm install @axiomhq/js
```

If you use the [Axiom CLI](https://github.com/axiomhq/cli), run `eval $(axiom config export -f)` to configure your environment variables.

Otherwise create a personal token in [the Axiom settings](https://app.axiom.co/profile) and export it as `AXIOM_TOKEN`. Set `AXIOM_ORG_ID` to the organization ID from the settings page of the organization you want to access.

You can also configure the client using options passed to the constructor of the Client:

```ts
import { Axiom } from '@axiomhq/js';

const axiom = new Axiom({
  token: process.env.AXIOM_TOKEN,
  orgId: process.env.AXIOM_ORG_ID,
});
```

You can then ingest data like this:

```ts
axiom.ingest('my-dataset', [{ foo: 'bar' }]);
await axiom.flush();
```

> **Note** that the client is automatically batching events in the background, in most cases you'll only want to call `flush()` before your application exits.

And query data like this:

```ts
const res = await axiom.query(`['my-dataset'] | where foo == 'bar' | limit 100`);
console.log(res);
```


If you want to use Axiom logger to ingest logs into Axiom

```ts
import { Logger } from '@axiomhq/js'

const logger = new Logger({
    source: 'web',
    autoFlush: true,
    token: process.env.AXIOM_TOKEN || '',
    dataset: process.env.AXIOM_dataset || ''
})

logger.info("Hello Axiom");
logger.flush()
```
For further examples, head over to the [examples](../../examples/js) directory.
