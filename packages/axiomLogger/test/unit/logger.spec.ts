import { describe, it, expect } from 'vitest';

import { AxiomLogger } from '../../src/index'

describe('Axiom logger tests', () => {
    it('creates a truthy instance', () => {
        const logger = new AxiomLogger({
            dataset: 'xxx',
            token: 'xxxxxx'
        })
        expect(logger).toBeTruthy();
        expect(logger).toBeDefined();
    })
})