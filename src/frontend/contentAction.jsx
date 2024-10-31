import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Code, Heading, Link, Strong, Text } from '@forge/react';
import { view,  invoke } from '@forge/bridge';

const App = () => {
  const [data, setData] = useState(null);
  const [context, setContext] = useState(null);

  useEffect(() => {
    view.getContext().then(setContext)
  }, []);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  useEffect(() => {
    console.log(context)  
  }, [context]);

  return (
    <>
      <Heading as="h2">Confluence Module Explorer</Heading>
      <Text><Strong>Module Type:</Strong> <Code>{data ? data : 'Loading...'}</Code> </Text>
      <Heading as="h3">Context Information</Heading>
      <Text><Strong>Space key:</Strong> {context ? context.extension.space.key : 'Loading...'} </Text>
      <Text><Strong>Space id:</Strong> {context ? context.extension.space.id : 'Loading...'} </Text>
      <Text><Strong>Content id:</Strong> {context ? context.extension.content.id : 'Loading...'} </Text>
      <Text>View <Link href="https://developer.atlassian.com/platform/forge/manifest-reference/modules/confluence-content-action/" openNewTab="true">Confluence Content Action</Link> docs on Atlassian Developers</Text>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);