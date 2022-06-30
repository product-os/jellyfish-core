/*
 * This file was automatically generated by 'npm run types'.
 *
 * DO NOT MODIFY IT BY HAND!
 */

// tslint:disable: array-type

import type { Contract, ContractDefinition } from '../';

export interface ErrorData {
	transformer?: string;
	expectedOutputTypes?: unknown[];
	message?: string;
	code?: string;
	stdOutTail?: string;
	stdErrTail?: string;
	[k: string]: unknown;
}

export interface ErrorContractDefinition
	extends ContractDefinition<ErrorData> {}

export interface ErrorContract extends Contract<ErrorData> {}
