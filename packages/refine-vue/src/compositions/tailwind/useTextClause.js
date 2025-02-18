import { h } from 'vue-demi';
import BaseTextClause from '../../components/tailwind/clauses/text/base-text-clause';

export default (
  props,
  ClauseComponent
) => {
  return () => {
    return h(BaseTextClause, {
      props: {
        value: props.value,
        ClauseComponent,
      },
    });
  };
};
