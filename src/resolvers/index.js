import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);

  console.log(req.context.extension);

  return req.context.extension.type;
});

export const handler = resolver.getDefinitions();
