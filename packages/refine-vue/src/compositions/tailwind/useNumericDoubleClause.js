import { h } from 'vue-demi';
import BaseNumericDoubleClause from '../../components/tailwind/clauses/numeric/base-numeric-double-clause';

export default (
  props,
  ClauseComponent
) => {
  return () => {
    return h(BaseNumericDoubleClause, {
      props: {
        from: props.from,
        to: props.to,
        ClauseComponent,
      },
    });
  };
};
