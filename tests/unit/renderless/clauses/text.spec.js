import Vue from 'vue';
import { mount } from '@vue/test-utils';
import clauses from '@/components/renderless/clauses/text';
import config from '@/config/clauses-config';
import MockCondition, { blueprint } from '../mock-condition';

describe('Text clauses update blueprint', () => {

  const { text: textConfig } = config;
  const TestTextClause = {
    name: 'test-text-clause',
    template: '<MockCondition type="text"><slot></slot></MockCondition>',
    components: {
      MockCondition,
    },
  };

  it('updates blueprint when created', () => {
    textConfig.forEach(({ component, id, requires }) => {
      const WrappedClause = {
        name: 'clause-wrapper',
        template: '<tested-clause value="Aaron" />',
        components: {
          TestedClause: clauses[component],
        },
      };

      mount(TestTextClause, {
        slots: {
          default: [WrappedClause],
        },
      });

      expect(blueprint.length).toBe(1);
      const { input } = blueprint[0];
      expect(input.clause).toBe(id);
      if (requires.length > 0) {
        expect(input.value).toBe('Aaron');
      }
    });
  });
});
