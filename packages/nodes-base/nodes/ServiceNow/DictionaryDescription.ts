import {
	INodeProperties,
} from 'n8n-workflow';

export const dictionaryOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'dictionary',
				],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
			},
		],
		default: 'get',
		description: 'The operation to perform',
	},
] as INodeProperties[];

export const dictionaryFields = [

	/* -------------------------------------------------------------------------- */
	/*                                dictionary:getAll                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'dictionary',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'dictionary',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 100,
		description: 'How many results to return.',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'dictionary',
				],
				operation: [
					'getAll',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Display Values',
				name: 'sysparm_display_value',
				type: 'options',
				options: [
					{
						name: 'Display Values',
						value: 'true',
					},
					{
						name: 'Actual Values',
						value: 'false',
					},
					{
						name: 'Both',
						value: 'all',
					},
				],
				default: 'false',
				description: 'Choose which values to return.',
			},
			{
				displayName: 'Exclude Reference Link',
				name: 'sysparm_exclude_reference_link',
				type: 'boolean',
				default: false,
				description: 'Exclude Table API links for reference fields.',
			},
			{
				displayName: 'Fields',
				name: 'sysparm_fields',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsMethod: 'getColumns',
				},
				default: '',
				description: 'A list of fields to return.',
			},
			{
				displayName: 'Query',
				name: 'sysparm_query',
				type: 'string',
				default: '',
				description: 'An encoded query string used to filter the results.',
			},
			{
				displayName: 'View',
				name: 'sysparm_view',
				type: 'boolean',
				default: false,
				description: 'Render the response according to the specified UI view (overridden by Fields option).',
			},
		],
	},
] as INodeProperties[];
