'use strict';

const formatWords = w => w ? w
  .filter(e => e).join(', ')
  .replace(/,(?=\s\w+$)/g, ' and') : '';