import { useState } from 'react';
import { DEFAULT_CONCEPT_DATA, DEFAULT_KEY_CENTER } from './Defaults';

export function useConceptData() {
    return useState(DEFAULT_CONCEPT_DATA);
}

export function useKeyCenter() {
    return useState(DEFAULT_KEY_CENTER);
}