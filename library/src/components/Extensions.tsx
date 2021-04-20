import React from 'react';

import { Schema } from './Schema';

import { SchemaHelpers } from '../helpers';

interface Props {
  name?: string;
  item: any;
}

export const Extensions: React.FunctionComponent<Props> = ({
  name = 'Extensions',
  item,
}) => {
  const extensions = SchemaHelpers.getCustomExtensions(item);
  if (!extensions || !Object.keys(extensions).length) {
    return null;
  }

  const schema = SchemaHelpers.jsonToSchema(extensions);
  return <Schema schemaName={name} schema={schema} />;
};