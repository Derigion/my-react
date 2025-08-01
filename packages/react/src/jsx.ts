import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Props,
	Type,
	Key,
	Ref,
	ReactElement as ReactElementType,
	ElementType
} from 'shared/ReactTypes';

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		key,
		ref,
		props,
		__mark: 'Derigion',
		type
	};
	return element;
};

export const jsx = function (
	type: ElementType,
	config: any,
	...maybeChildren: any[]
) {
	let key: Key = null;
	let ref: Ref = null;
	const props: Props = {};

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		} else if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		} else if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	const childrenLength = maybeChildren.length;
	if (childrenLength > 0) {
		if (childrenLength === 1) {
			props.children = maybeChildren[0];
		} else if (childrenLength > 1) {
			props.children = maybeChildren;
		}
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDEV = jsx;
