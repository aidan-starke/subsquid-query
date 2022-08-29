import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};

export function fetcher<TData, TVariables>(
	client: GraphQLClient,
	query: string,
	variables?: TVariables,
	headers?: RequestInit["headers"]
) {
	return async (): Promise<TData> =>
		client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	bpchar: any;
	jsonb: any;
	numeric: any;
	timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["Boolean"]>;
	_gt?: InputMaybe<Scalars["Boolean"]>;
	_gte?: InputMaybe<Scalars["Boolean"]>;
	_in?: InputMaybe<Array<Scalars["Boolean"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["Boolean"]>;
	_lte?: InputMaybe<Scalars["Boolean"]>;
	_neq?: InputMaybe<Scalars["Boolean"]>;
	_nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["Int"]>;
	_gt?: InputMaybe<Scalars["Int"]>;
	_gte?: InputMaybe<Scalars["Int"]>;
	_in?: InputMaybe<Array<Scalars["Int"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["Int"]>;
	_lte?: InputMaybe<Scalars["Int"]>;
	_neq?: InputMaybe<Scalars["Int"]>;
	_nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["String"]>;
	_gt?: InputMaybe<Scalars["String"]>;
	_gte?: InputMaybe<Scalars["String"]>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars["String"]>;
	_in?: InputMaybe<Array<Scalars["String"]>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars["String"]>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars["String"]>;
	_lt?: InputMaybe<Scalars["String"]>;
	_lte?: InputMaybe<Scalars["String"]>;
	_neq?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars["String"]>;
	_nin?: InputMaybe<Array<Scalars["String"]>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars["String"]>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars["String"]>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "block" */
export type Block = {
	__typename?: "block";
	/** An array relationship */
	calls: Array<Call>;
	/** An aggregate relationship */
	calls_aggregate: Call_Aggregate;
	/** An array relationship */
	events: Array<Event>;
	/** An aggregate relationship */
	events_aggregate: Event_Aggregate;
	/** An array relationship */
	extrinsics: Array<Extrinsic>;
	/** An aggregate relationship */
	extrinsics_aggregate: Extrinsic_Aggregate;
	extrinsics_root: Scalars["bpchar"];
	hash: Scalars["bpchar"];
	height: Scalars["Int"];
	id: Scalars["bpchar"];
	parent_hash: Scalars["bpchar"];
	spec_id: Scalars["String"];
	state_root: Scalars["bpchar"];
	timestamp: Scalars["timestamptz"];
	validator?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "block" */
export type BlockCallsArgs = {
	distinct_on?: InputMaybe<Array<Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Call_Order_By>>;
	where?: InputMaybe<Call_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockCalls_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Call_Order_By>>;
	where?: InputMaybe<Call_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockEventsArgs = {
	distinct_on?: InputMaybe<Array<Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Event_Order_By>>;
	where?: InputMaybe<Event_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockEvents_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Event_Order_By>>;
	where?: InputMaybe<Event_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockExtrinsicsArgs = {
	distinct_on?: InputMaybe<Array<Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Extrinsic_Order_By>>;
	where?: InputMaybe<Extrinsic_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockExtrinsics_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Extrinsic_Order_By>>;
	where?: InputMaybe<Extrinsic_Bool_Exp>;
};

/** aggregated selection of "block" */
export type Block_Aggregate = {
	__typename?: "block_aggregate";
	aggregate?: Maybe<Block_Aggregate_Fields>;
	nodes: Array<Block>;
};

/** aggregate fields of "block" */
export type Block_Aggregate_Fields = {
	__typename?: "block_aggregate_fields";
	avg?: Maybe<Block_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Block_Max_Fields>;
	min?: Maybe<Block_Min_Fields>;
	stddev?: Maybe<Block_Stddev_Fields>;
	stddev_pop?: Maybe<Block_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Block_Stddev_Samp_Fields>;
	sum?: Maybe<Block_Sum_Fields>;
	var_pop?: Maybe<Block_Var_Pop_Fields>;
	var_samp?: Maybe<Block_Var_Samp_Fields>;
	variance?: Maybe<Block_Variance_Fields>;
};

/** aggregate fields of "block" */
export type Block_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Block_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Block_Avg_Fields = {
	__typename?: "block_avg_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
	_and?: InputMaybe<Array<Block_Bool_Exp>>;
	_not?: InputMaybe<Block_Bool_Exp>;
	_or?: InputMaybe<Array<Block_Bool_Exp>>;
	calls?: InputMaybe<Call_Bool_Exp>;
	events?: InputMaybe<Event_Bool_Exp>;
	extrinsics?: InputMaybe<Extrinsic_Bool_Exp>;
	extrinsics_root?: InputMaybe<Bpchar_Comparison_Exp>;
	hash?: InputMaybe<Bpchar_Comparison_Exp>;
	height?: InputMaybe<Int_Comparison_Exp>;
	id?: InputMaybe<Bpchar_Comparison_Exp>;
	parent_hash?: InputMaybe<Bpchar_Comparison_Exp>;
	spec_id?: InputMaybe<String_Comparison_Exp>;
	state_root?: InputMaybe<Bpchar_Comparison_Exp>;
	timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
	validator?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "block" */
export enum Block_Constraint {
	/** unique or primary key constraint on columns "id" */
	BlockPkey = "block_pkey",
}

/** input type for incrementing numeric columns in table "block" */
export type Block_Inc_Input = {
	height?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "block" */
export type Block_Insert_Input = {
	calls?: InputMaybe<Call_Arr_Rel_Insert_Input>;
	events?: InputMaybe<Event_Arr_Rel_Insert_Input>;
	extrinsics?: InputMaybe<Extrinsic_Arr_Rel_Insert_Input>;
	extrinsics_root?: InputMaybe<Scalars["bpchar"]>;
	hash?: InputMaybe<Scalars["bpchar"]>;
	height?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["bpchar"]>;
	parent_hash?: InputMaybe<Scalars["bpchar"]>;
	spec_id?: InputMaybe<Scalars["String"]>;
	state_root?: InputMaybe<Scalars["bpchar"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	validator?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Block_Max_Fields = {
	__typename?: "block_max_fields";
	extrinsics_root?: Maybe<Scalars["bpchar"]>;
	hash?: Maybe<Scalars["bpchar"]>;
	height?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["bpchar"]>;
	parent_hash?: Maybe<Scalars["bpchar"]>;
	spec_id?: Maybe<Scalars["String"]>;
	state_root?: Maybe<Scalars["bpchar"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	validator?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Block_Min_Fields = {
	__typename?: "block_min_fields";
	extrinsics_root?: Maybe<Scalars["bpchar"]>;
	hash?: Maybe<Scalars["bpchar"]>;
	height?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["bpchar"]>;
	parent_hash?: Maybe<Scalars["bpchar"]>;
	spec_id?: Maybe<Scalars["String"]>;
	state_root?: Maybe<Scalars["bpchar"]>;
	timestamp?: Maybe<Scalars["timestamptz"]>;
	validator?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "block" */
export type Block_Mutation_Response = {
	__typename?: "block_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Block>;
};

/** input type for inserting object relation for remote table "block" */
export type Block_Obj_Rel_Insert_Input = {
	data: Block_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Block_On_Conflict>;
};

/** on_conflict condition type for table "block" */
export type Block_On_Conflict = {
	constraint: Block_Constraint;
	update_columns?: Array<Block_Update_Column>;
	where?: InputMaybe<Block_Bool_Exp>;
};

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
	calls_aggregate?: InputMaybe<Call_Aggregate_Order_By>;
	events_aggregate?: InputMaybe<Event_Aggregate_Order_By>;
	extrinsics_aggregate?: InputMaybe<Extrinsic_Aggregate_Order_By>;
	extrinsics_root?: InputMaybe<Order_By>;
	hash?: InputMaybe<Order_By>;
	height?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	parent_hash?: InputMaybe<Order_By>;
	spec_id?: InputMaybe<Order_By>;
	state_root?: InputMaybe<Order_By>;
	timestamp?: InputMaybe<Order_By>;
	validator?: InputMaybe<Order_By>;
};

/** primary key columns input for table: block */
export type Block_Pk_Columns_Input = {
	id: Scalars["bpchar"];
};

/** select columns of table "block" */
export enum Block_Select_Column {
	/** column name */
	ExtrinsicsRoot = "extrinsics_root",
	/** column name */
	Hash = "hash",
	/** column name */
	Height = "height",
	/** column name */
	Id = "id",
	/** column name */
	ParentHash = "parent_hash",
	/** column name */
	SpecId = "spec_id",
	/** column name */
	StateRoot = "state_root",
	/** column name */
	Timestamp = "timestamp",
	/** column name */
	Validator = "validator",
}

/** input type for updating data in table "block" */
export type Block_Set_Input = {
	extrinsics_root?: InputMaybe<Scalars["bpchar"]>;
	hash?: InputMaybe<Scalars["bpchar"]>;
	height?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["bpchar"]>;
	parent_hash?: InputMaybe<Scalars["bpchar"]>;
	spec_id?: InputMaybe<Scalars["String"]>;
	state_root?: InputMaybe<Scalars["bpchar"]>;
	timestamp?: InputMaybe<Scalars["timestamptz"]>;
	validator?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Block_Stddev_Fields = {
	__typename?: "block_stddev_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Block_Stddev_Pop_Fields = {
	__typename?: "block_stddev_pop_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Block_Stddev_Samp_Fields = {
	__typename?: "block_stddev_samp_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Block_Sum_Fields = {
	__typename?: "block_sum_fields";
	height?: Maybe<Scalars["Int"]>;
};

/** update columns of table "block" */
export enum Block_Update_Column {
	/** column name */
	ExtrinsicsRoot = "extrinsics_root",
	/** column name */
	Hash = "hash",
	/** column name */
	Height = "height",
	/** column name */
	Id = "id",
	/** column name */
	ParentHash = "parent_hash",
	/** column name */
	SpecId = "spec_id",
	/** column name */
	StateRoot = "state_root",
	/** column name */
	Timestamp = "timestamp",
	/** column name */
	Validator = "validator",
}

export type Block_Updates = {
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Block_Inc_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Block_Set_Input>;
	where: Block_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Block_Var_Pop_Fields = {
	__typename?: "block_var_pop_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Block_Var_Samp_Fields = {
	__typename?: "block_var_samp_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Block_Variance_Fields = {
	__typename?: "block_variance_fields";
	height?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["bpchar"]>;
	_gt?: InputMaybe<Scalars["bpchar"]>;
	_gte?: InputMaybe<Scalars["bpchar"]>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars["bpchar"]>;
	_in?: InputMaybe<Array<Scalars["bpchar"]>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars["bpchar"]>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars["bpchar"]>;
	_lt?: InputMaybe<Scalars["bpchar"]>;
	_lte?: InputMaybe<Scalars["bpchar"]>;
	_neq?: InputMaybe<Scalars["bpchar"]>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars["bpchar"]>;
	_nin?: InputMaybe<Array<Scalars["bpchar"]>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars["bpchar"]>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars["bpchar"]>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars["bpchar"]>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars["bpchar"]>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars["bpchar"]>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars["bpchar"]>;
};

/** columns and relationships of "call" */
export type Call = {
	__typename?: "call";
	args?: Maybe<Scalars["jsonb"]>;
	/** An object relationship */
	block: Block;
	block_id: Scalars["bpchar"];
	/** An object relationship */
	call?: Maybe<Call>;
	/** An array relationship */
	calls: Array<Call>;
	/** An aggregate relationship */
	calls_aggregate: Call_Aggregate;
	error?: Maybe<Scalars["jsonb"]>;
	/** An array relationship */
	events: Array<Event>;
	/** An aggregate relationship */
	events_aggregate: Event_Aggregate;
	/** An object relationship */
	extrinsic: Extrinsic;
	extrinsic_id: Scalars["bpchar"];
	id: Scalars["String"];
	name: Scalars["String"];
	origin?: Maybe<Scalars["jsonb"]>;
	parent_id?: Maybe<Scalars["String"]>;
	pos: Scalars["Int"];
	success: Scalars["Boolean"];
};

/** columns and relationships of "call" */
export type CallArgsArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "call" */
export type CallCallsArgs = {
	distinct_on?: InputMaybe<Array<Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Call_Order_By>>;
	where?: InputMaybe<Call_Bool_Exp>;
};

/** columns and relationships of "call" */
export type CallCalls_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Call_Order_By>>;
	where?: InputMaybe<Call_Bool_Exp>;
};

/** columns and relationships of "call" */
export type CallErrorArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "call" */
export type CallEventsArgs = {
	distinct_on?: InputMaybe<Array<Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Event_Order_By>>;
	where?: InputMaybe<Event_Bool_Exp>;
};

/** columns and relationships of "call" */
export type CallEvents_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Event_Order_By>>;
	where?: InputMaybe<Event_Bool_Exp>;
};

/** columns and relationships of "call" */
export type CallOriginArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "call" */
export type Call_Aggregate = {
	__typename?: "call_aggregate";
	aggregate?: Maybe<Call_Aggregate_Fields>;
	nodes: Array<Call>;
};

/** aggregate fields of "call" */
export type Call_Aggregate_Fields = {
	__typename?: "call_aggregate_fields";
	avg?: Maybe<Call_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Call_Max_Fields>;
	min?: Maybe<Call_Min_Fields>;
	stddev?: Maybe<Call_Stddev_Fields>;
	stddev_pop?: Maybe<Call_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Call_Stddev_Samp_Fields>;
	sum?: Maybe<Call_Sum_Fields>;
	var_pop?: Maybe<Call_Var_Pop_Fields>;
	var_samp?: Maybe<Call_Var_Samp_Fields>;
	variance?: Maybe<Call_Variance_Fields>;
};

/** aggregate fields of "call" */
export type Call_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Call_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "call" */
export type Call_Aggregate_Order_By = {
	avg?: InputMaybe<Call_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Call_Max_Order_By>;
	min?: InputMaybe<Call_Min_Order_By>;
	stddev?: InputMaybe<Call_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Call_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Call_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Call_Sum_Order_By>;
	var_pop?: InputMaybe<Call_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Call_Var_Samp_Order_By>;
	variance?: InputMaybe<Call_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Call_Append_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
	error?: InputMaybe<Scalars["jsonb"]>;
	origin?: InputMaybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "call" */
export type Call_Arr_Rel_Insert_Input = {
	data: Array<Call_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Call_On_Conflict>;
};

/** aggregate avg on columns */
export type Call_Avg_Fields = {
	__typename?: "call_avg_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "call" */
export type Call_Avg_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "call". All fields are combined with a logical 'AND'. */
export type Call_Bool_Exp = {
	_and?: InputMaybe<Array<Call_Bool_Exp>>;
	_not?: InputMaybe<Call_Bool_Exp>;
	_or?: InputMaybe<Array<Call_Bool_Exp>>;
	args?: InputMaybe<Jsonb_Comparison_Exp>;
	block?: InputMaybe<Block_Bool_Exp>;
	block_id?: InputMaybe<Bpchar_Comparison_Exp>;
	call?: InputMaybe<Call_Bool_Exp>;
	calls?: InputMaybe<Call_Bool_Exp>;
	error?: InputMaybe<Jsonb_Comparison_Exp>;
	events?: InputMaybe<Event_Bool_Exp>;
	extrinsic?: InputMaybe<Extrinsic_Bool_Exp>;
	extrinsic_id?: InputMaybe<Bpchar_Comparison_Exp>;
	id?: InputMaybe<String_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	origin?: InputMaybe<Jsonb_Comparison_Exp>;
	parent_id?: InputMaybe<String_Comparison_Exp>;
	pos?: InputMaybe<Int_Comparison_Exp>;
	success?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "call" */
export enum Call_Constraint {
	/** unique or primary key constraint on columns "id" */
	CallPkey = "call_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Call_Delete_At_Path_Input = {
	args?: InputMaybe<Array<Scalars["String"]>>;
	error?: InputMaybe<Array<Scalars["String"]>>;
	origin?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Call_Delete_Elem_Input = {
	args?: InputMaybe<Scalars["Int"]>;
	error?: InputMaybe<Scalars["Int"]>;
	origin?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Call_Delete_Key_Input = {
	args?: InputMaybe<Scalars["String"]>;
	error?: InputMaybe<Scalars["String"]>;
	origin?: InputMaybe<Scalars["String"]>;
};

/** input type for incrementing numeric columns in table "call" */
export type Call_Inc_Input = {
	pos?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "call" */
export type Call_Insert_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
	block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["bpchar"]>;
	call?: InputMaybe<Call_Obj_Rel_Insert_Input>;
	calls?: InputMaybe<Call_Arr_Rel_Insert_Input>;
	error?: InputMaybe<Scalars["jsonb"]>;
	events?: InputMaybe<Event_Arr_Rel_Insert_Input>;
	extrinsic?: InputMaybe<Extrinsic_Obj_Rel_Insert_Input>;
	extrinsic_id?: InputMaybe<Scalars["bpchar"]>;
	id?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	origin?: InputMaybe<Scalars["jsonb"]>;
	parent_id?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate max on columns */
export type Call_Max_Fields = {
	__typename?: "call_max_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	extrinsic_id?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	parent_id?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "call" */
export type Call_Max_Order_By = {
	block_id?: InputMaybe<Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	parent_id?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Call_Min_Fields = {
	__typename?: "call_min_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	extrinsic_id?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	parent_id?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "call" */
export type Call_Min_Order_By = {
	block_id?: InputMaybe<Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	parent_id?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "call" */
export type Call_Mutation_Response = {
	__typename?: "call_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Call>;
};

/** input type for inserting object relation for remote table "call" */
export type Call_Obj_Rel_Insert_Input = {
	data: Call_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Call_On_Conflict>;
};

/** on_conflict condition type for table "call" */
export type Call_On_Conflict = {
	constraint: Call_Constraint;
	update_columns?: Array<Call_Update_Column>;
	where?: InputMaybe<Call_Bool_Exp>;
};

/** Ordering options when selecting data from "call". */
export type Call_Order_By = {
	args?: InputMaybe<Order_By>;
	block?: InputMaybe<Block_Order_By>;
	block_id?: InputMaybe<Order_By>;
	call?: InputMaybe<Call_Order_By>;
	calls_aggregate?: InputMaybe<Call_Aggregate_Order_By>;
	error?: InputMaybe<Order_By>;
	events_aggregate?: InputMaybe<Event_Aggregate_Order_By>;
	extrinsic?: InputMaybe<Extrinsic_Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	origin?: InputMaybe<Order_By>;
	parent_id?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	success?: InputMaybe<Order_By>;
};

/** primary key columns input for table: call */
export type Call_Pk_Columns_Input = {
	id: Scalars["String"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Call_Prepend_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
	error?: InputMaybe<Scalars["jsonb"]>;
	origin?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "call" */
export enum Call_Select_Column {
	/** column name */
	Args = "args",
	/** column name */
	BlockId = "block_id",
	/** column name */
	Error = "error",
	/** column name */
	ExtrinsicId = "extrinsic_id",
	/** column name */
	Id = "id",
	/** column name */
	Name = "name",
	/** column name */
	Origin = "origin",
	/** column name */
	ParentId = "parent_id",
	/** column name */
	Pos = "pos",
	/** column name */
	Success = "success",
}

/** input type for updating data in table "call" */
export type Call_Set_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
	block_id?: InputMaybe<Scalars["bpchar"]>;
	error?: InputMaybe<Scalars["jsonb"]>;
	extrinsic_id?: InputMaybe<Scalars["bpchar"]>;
	id?: InputMaybe<Scalars["String"]>;
	name?: InputMaybe<Scalars["String"]>;
	origin?: InputMaybe<Scalars["jsonb"]>;
	parent_id?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate stddev on columns */
export type Call_Stddev_Fields = {
	__typename?: "call_stddev_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "call" */
export type Call_Stddev_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Call_Stddev_Pop_Fields = {
	__typename?: "call_stddev_pop_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "call" */
export type Call_Stddev_Pop_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Call_Stddev_Samp_Fields = {
	__typename?: "call_stddev_samp_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "call" */
export type Call_Stddev_Samp_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Call_Sum_Fields = {
	__typename?: "call_sum_fields";
	pos?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "call" */
export type Call_Sum_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** update columns of table "call" */
export enum Call_Update_Column {
	/** column name */
	Args = "args",
	/** column name */
	BlockId = "block_id",
	/** column name */
	Error = "error",
	/** column name */
	ExtrinsicId = "extrinsic_id",
	/** column name */
	Id = "id",
	/** column name */
	Name = "name",
	/** column name */
	Origin = "origin",
	/** column name */
	ParentId = "parent_id",
	/** column name */
	Pos = "pos",
	/** column name */
	Success = "success",
}

export type Call_Updates = {
	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: InputMaybe<Call_Append_Input>;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: InputMaybe<Call_Delete_At_Path_Input>;
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?: InputMaybe<Call_Delete_Elem_Input>;
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: InputMaybe<Call_Delete_Key_Input>;
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Call_Inc_Input>;
	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: InputMaybe<Call_Prepend_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Call_Set_Input>;
	where: Call_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Call_Var_Pop_Fields = {
	__typename?: "call_var_pop_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "call" */
export type Call_Var_Pop_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Call_Var_Samp_Fields = {
	__typename?: "call_var_samp_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "call" */
export type Call_Var_Samp_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Call_Variance_Fields = {
	__typename?: "call_variance_fields";
	pos?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "call" */
export type Call_Variance_Order_By = {
	pos?: InputMaybe<Order_By>;
};

/** columns and relationships of "event" */
export type Event = {
	__typename?: "event";
	args?: Maybe<Scalars["jsonb"]>;
	/** An object relationship */
	block: Block;
	block_id: Scalars["bpchar"];
	/** An object relationship */
	call?: Maybe<Call>;
	call_id?: Maybe<Scalars["String"]>;
	/** An object relationship */
	extrinsic?: Maybe<Extrinsic>;
	extrinsic_id?: Maybe<Scalars["bpchar"]>;
	id: Scalars["bpchar"];
	index_in_block: Scalars["Int"];
	name: Scalars["String"];
	phase: Scalars["String"];
	pos: Scalars["Int"];
};

/** columns and relationships of "event" */
export type EventArgsArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "event" */
export type Event_Aggregate = {
	__typename?: "event_aggregate";
	aggregate?: Maybe<Event_Aggregate_Fields>;
	nodes: Array<Event>;
};

/** aggregate fields of "event" */
export type Event_Aggregate_Fields = {
	__typename?: "event_aggregate_fields";
	avg?: Maybe<Event_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Event_Max_Fields>;
	min?: Maybe<Event_Min_Fields>;
	stddev?: Maybe<Event_Stddev_Fields>;
	stddev_pop?: Maybe<Event_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Event_Stddev_Samp_Fields>;
	sum?: Maybe<Event_Sum_Fields>;
	var_pop?: Maybe<Event_Var_Pop_Fields>;
	var_samp?: Maybe<Event_Var_Samp_Fields>;
	variance?: Maybe<Event_Variance_Fields>;
};

/** aggregate fields of "event" */
export type Event_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Event_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "event" */
export type Event_Aggregate_Order_By = {
	avg?: InputMaybe<Event_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Event_Max_Order_By>;
	min?: InputMaybe<Event_Min_Order_By>;
	stddev?: InputMaybe<Event_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Event_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Event_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Event_Sum_Order_By>;
	var_pop?: InputMaybe<Event_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Event_Var_Samp_Order_By>;
	variance?: InputMaybe<Event_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Event_Append_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "event" */
export type Event_Arr_Rel_Insert_Input = {
	data: Array<Event_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Event_On_Conflict>;
};

/** aggregate avg on columns */
export type Event_Avg_Fields = {
	__typename?: "event_avg_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "event" */
export type Event_Avg_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Event_Bool_Exp = {
	_and?: InputMaybe<Array<Event_Bool_Exp>>;
	_not?: InputMaybe<Event_Bool_Exp>;
	_or?: InputMaybe<Array<Event_Bool_Exp>>;
	args?: InputMaybe<Jsonb_Comparison_Exp>;
	block?: InputMaybe<Block_Bool_Exp>;
	block_id?: InputMaybe<Bpchar_Comparison_Exp>;
	call?: InputMaybe<Call_Bool_Exp>;
	call_id?: InputMaybe<String_Comparison_Exp>;
	extrinsic?: InputMaybe<Extrinsic_Bool_Exp>;
	extrinsic_id?: InputMaybe<Bpchar_Comparison_Exp>;
	id?: InputMaybe<Bpchar_Comparison_Exp>;
	index_in_block?: InputMaybe<Int_Comparison_Exp>;
	name?: InputMaybe<String_Comparison_Exp>;
	phase?: InputMaybe<String_Comparison_Exp>;
	pos?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "event" */
export enum Event_Constraint {
	/** unique or primary key constraint on columns "id" */
	EventPkey = "event_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Event_Delete_At_Path_Input = {
	args?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Event_Delete_Elem_Input = {
	args?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Event_Delete_Key_Input = {
	args?: InputMaybe<Scalars["String"]>;
};

/** input type for incrementing numeric columns in table "event" */
export type Event_Inc_Input = {
	index_in_block?: InputMaybe<Scalars["Int"]>;
	pos?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "event" */
export type Event_Insert_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
	block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["bpchar"]>;
	call?: InputMaybe<Call_Obj_Rel_Insert_Input>;
	call_id?: InputMaybe<Scalars["String"]>;
	extrinsic?: InputMaybe<Extrinsic_Obj_Rel_Insert_Input>;
	extrinsic_id?: InputMaybe<Scalars["bpchar"]>;
	id?: InputMaybe<Scalars["bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	name?: InputMaybe<Scalars["String"]>;
	phase?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Event_Max_Fields = {
	__typename?: "event_max_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	extrinsic_id?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	name?: Maybe<Scalars["String"]>;
	phase?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "event" */
export type Event_Max_Order_By = {
	block_id?: InputMaybe<Order_By>;
	call_id?: InputMaybe<Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	phase?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Event_Min_Fields = {
	__typename?: "event_min_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	extrinsic_id?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	name?: Maybe<Scalars["String"]>;
	phase?: Maybe<Scalars["String"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "event" */
export type Event_Min_Order_By = {
	block_id?: InputMaybe<Order_By>;
	call_id?: InputMaybe<Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	phase?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "event" */
export type Event_Mutation_Response = {
	__typename?: "event_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Event>;
};

/** on_conflict condition type for table "event" */
export type Event_On_Conflict = {
	constraint: Event_Constraint;
	update_columns?: Array<Event_Update_Column>;
	where?: InputMaybe<Event_Bool_Exp>;
};

/** Ordering options when selecting data from "event". */
export type Event_Order_By = {
	args?: InputMaybe<Order_By>;
	block?: InputMaybe<Block_Order_By>;
	block_id?: InputMaybe<Order_By>;
	call?: InputMaybe<Call_Order_By>;
	call_id?: InputMaybe<Order_By>;
	extrinsic?: InputMaybe<Extrinsic_Order_By>;
	extrinsic_id?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	name?: InputMaybe<Order_By>;
	phase?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** primary key columns input for table: event */
export type Event_Pk_Columns_Input = {
	id: Scalars["bpchar"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Event_Prepend_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "event" */
export enum Event_Select_Column {
	/** column name */
	Args = "args",
	/** column name */
	BlockId = "block_id",
	/** column name */
	CallId = "call_id",
	/** column name */
	ExtrinsicId = "extrinsic_id",
	/** column name */
	Id = "id",
	/** column name */
	IndexInBlock = "index_in_block",
	/** column name */
	Name = "name",
	/** column name */
	Phase = "phase",
	/** column name */
	Pos = "pos",
}

/** input type for updating data in table "event" */
export type Event_Set_Input = {
	args?: InputMaybe<Scalars["jsonb"]>;
	block_id?: InputMaybe<Scalars["bpchar"]>;
	call_id?: InputMaybe<Scalars["String"]>;
	extrinsic_id?: InputMaybe<Scalars["bpchar"]>;
	id?: InputMaybe<Scalars["bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	name?: InputMaybe<Scalars["String"]>;
	phase?: InputMaybe<Scalars["String"]>;
	pos?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Event_Stddev_Fields = {
	__typename?: "event_stddev_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "event" */
export type Event_Stddev_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Event_Stddev_Pop_Fields = {
	__typename?: "event_stddev_pop_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "event" */
export type Event_Stddev_Pop_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Event_Stddev_Samp_Fields = {
	__typename?: "event_stddev_samp_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "event" */
export type Event_Stddev_Samp_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Event_Sum_Fields = {
	__typename?: "event_sum_fields";
	index_in_block?: Maybe<Scalars["Int"]>;
	pos?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "event" */
export type Event_Sum_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** update columns of table "event" */
export enum Event_Update_Column {
	/** column name */
	Args = "args",
	/** column name */
	BlockId = "block_id",
	/** column name */
	CallId = "call_id",
	/** column name */
	ExtrinsicId = "extrinsic_id",
	/** column name */
	Id = "id",
	/** column name */
	IndexInBlock = "index_in_block",
	/** column name */
	Name = "name",
	/** column name */
	Phase = "phase",
	/** column name */
	Pos = "pos",
}

export type Event_Updates = {
	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: InputMaybe<Event_Append_Input>;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: InputMaybe<Event_Delete_At_Path_Input>;
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?: InputMaybe<Event_Delete_Elem_Input>;
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: InputMaybe<Event_Delete_Key_Input>;
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Event_Inc_Input>;
	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: InputMaybe<Event_Prepend_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Event_Set_Input>;
	where: Event_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Event_Var_Pop_Fields = {
	__typename?: "event_var_pop_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "event" */
export type Event_Var_Pop_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Event_Var_Samp_Fields = {
	__typename?: "event_var_samp_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "event" */
export type Event_Var_Samp_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Event_Variance_Fields = {
	__typename?: "event_variance_fields";
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "event" */
export type Event_Variance_Order_By = {
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
};

/** columns and relationships of "extrinsic" */
export type Extrinsic = {
	__typename?: "extrinsic";
	/** An object relationship */
	block: Block;
	block_id: Scalars["bpchar"];
	call_id: Scalars["String"];
	/** An array relationship */
	calls: Array<Call>;
	/** An aggregate relationship */
	calls_aggregate: Call_Aggregate;
	error?: Maybe<Scalars["jsonb"]>;
	/** An array relationship */
	events: Array<Event>;
	/** An aggregate relationship */
	events_aggregate: Event_Aggregate;
	fee?: Maybe<Scalars["numeric"]>;
	hash: Scalars["bpchar"];
	id: Scalars["bpchar"];
	index_in_block: Scalars["Int"];
	pos: Scalars["Int"];
	signature?: Maybe<Scalars["jsonb"]>;
	success: Scalars["Boolean"];
	tip?: Maybe<Scalars["numeric"]>;
	version: Scalars["Int"];
};

/** columns and relationships of "extrinsic" */
export type ExtrinsicCallsArgs = {
	distinct_on?: InputMaybe<Array<Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Call_Order_By>>;
	where?: InputMaybe<Call_Bool_Exp>;
};

/** columns and relationships of "extrinsic" */
export type ExtrinsicCalls_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Call_Order_By>>;
	where?: InputMaybe<Call_Bool_Exp>;
};

/** columns and relationships of "extrinsic" */
export type ExtrinsicErrorArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "extrinsic" */
export type ExtrinsicEventsArgs = {
	distinct_on?: InputMaybe<Array<Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Event_Order_By>>;
	where?: InputMaybe<Event_Bool_Exp>;
};

/** columns and relationships of "extrinsic" */
export type ExtrinsicEvents_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Event_Order_By>>;
	where?: InputMaybe<Event_Bool_Exp>;
};

/** columns and relationships of "extrinsic" */
export type ExtrinsicSignatureArgs = {
	path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "extrinsic" */
export type Extrinsic_Aggregate = {
	__typename?: "extrinsic_aggregate";
	aggregate?: Maybe<Extrinsic_Aggregate_Fields>;
	nodes: Array<Extrinsic>;
};

/** aggregate fields of "extrinsic" */
export type Extrinsic_Aggregate_Fields = {
	__typename?: "extrinsic_aggregate_fields";
	avg?: Maybe<Extrinsic_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Extrinsic_Max_Fields>;
	min?: Maybe<Extrinsic_Min_Fields>;
	stddev?: Maybe<Extrinsic_Stddev_Fields>;
	stddev_pop?: Maybe<Extrinsic_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Extrinsic_Stddev_Samp_Fields>;
	sum?: Maybe<Extrinsic_Sum_Fields>;
	var_pop?: Maybe<Extrinsic_Var_Pop_Fields>;
	var_samp?: Maybe<Extrinsic_Var_Samp_Fields>;
	variance?: Maybe<Extrinsic_Variance_Fields>;
};

/** aggregate fields of "extrinsic" */
export type Extrinsic_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Extrinsic_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "extrinsic" */
export type Extrinsic_Aggregate_Order_By = {
	avg?: InputMaybe<Extrinsic_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Extrinsic_Max_Order_By>;
	min?: InputMaybe<Extrinsic_Min_Order_By>;
	stddev?: InputMaybe<Extrinsic_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Extrinsic_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Extrinsic_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Extrinsic_Sum_Order_By>;
	var_pop?: InputMaybe<Extrinsic_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Extrinsic_Var_Samp_Order_By>;
	variance?: InputMaybe<Extrinsic_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Extrinsic_Append_Input = {
	error?: InputMaybe<Scalars["jsonb"]>;
	signature?: InputMaybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "extrinsic" */
export type Extrinsic_Arr_Rel_Insert_Input = {
	data: Array<Extrinsic_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Extrinsic_On_Conflict>;
};

/** aggregate avg on columns */
export type Extrinsic_Avg_Fields = {
	__typename?: "extrinsic_avg_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "extrinsic" */
export type Extrinsic_Avg_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "extrinsic". All fields are combined with a logical 'AND'. */
export type Extrinsic_Bool_Exp = {
	_and?: InputMaybe<Array<Extrinsic_Bool_Exp>>;
	_not?: InputMaybe<Extrinsic_Bool_Exp>;
	_or?: InputMaybe<Array<Extrinsic_Bool_Exp>>;
	block?: InputMaybe<Block_Bool_Exp>;
	block_id?: InputMaybe<Bpchar_Comparison_Exp>;
	call_id?: InputMaybe<String_Comparison_Exp>;
	calls?: InputMaybe<Call_Bool_Exp>;
	error?: InputMaybe<Jsonb_Comparison_Exp>;
	events?: InputMaybe<Event_Bool_Exp>;
	fee?: InputMaybe<Numeric_Comparison_Exp>;
	hash?: InputMaybe<Bpchar_Comparison_Exp>;
	id?: InputMaybe<Bpchar_Comparison_Exp>;
	index_in_block?: InputMaybe<Int_Comparison_Exp>;
	pos?: InputMaybe<Int_Comparison_Exp>;
	signature?: InputMaybe<Jsonb_Comparison_Exp>;
	success?: InputMaybe<Boolean_Comparison_Exp>;
	tip?: InputMaybe<Numeric_Comparison_Exp>;
	version?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "extrinsic" */
export enum Extrinsic_Constraint {
	/** unique or primary key constraint on columns "id" */
	ExtrinsicPkey = "extrinsic_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Extrinsic_Delete_At_Path_Input = {
	error?: InputMaybe<Array<Scalars["String"]>>;
	signature?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Extrinsic_Delete_Elem_Input = {
	error?: InputMaybe<Scalars["Int"]>;
	signature?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Extrinsic_Delete_Key_Input = {
	error?: InputMaybe<Scalars["String"]>;
	signature?: InputMaybe<Scalars["String"]>;
};

/** input type for incrementing numeric columns in table "extrinsic" */
export type Extrinsic_Inc_Input = {
	fee?: InputMaybe<Scalars["numeric"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	tip?: InputMaybe<Scalars["numeric"]>;
	version?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "extrinsic" */
export type Extrinsic_Insert_Input = {
	block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
	block_id?: InputMaybe<Scalars["bpchar"]>;
	call_id?: InputMaybe<Scalars["String"]>;
	calls?: InputMaybe<Call_Arr_Rel_Insert_Input>;
	error?: InputMaybe<Scalars["jsonb"]>;
	events?: InputMaybe<Event_Arr_Rel_Insert_Input>;
	fee?: InputMaybe<Scalars["numeric"]>;
	hash?: InputMaybe<Scalars["bpchar"]>;
	id?: InputMaybe<Scalars["bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	signature?: InputMaybe<Scalars["jsonb"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
	tip?: InputMaybe<Scalars["numeric"]>;
	version?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Extrinsic_Max_Fields = {
	__typename?: "extrinsic_max_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	fee?: Maybe<Scalars["numeric"]>;
	hash?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	pos?: Maybe<Scalars["Int"]>;
	tip?: Maybe<Scalars["numeric"]>;
	version?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "extrinsic" */
export type Extrinsic_Max_Order_By = {
	block_id?: InputMaybe<Order_By>;
	call_id?: InputMaybe<Order_By>;
	fee?: InputMaybe<Order_By>;
	hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Extrinsic_Min_Fields = {
	__typename?: "extrinsic_min_fields";
	block_id?: Maybe<Scalars["bpchar"]>;
	call_id?: Maybe<Scalars["String"]>;
	fee?: Maybe<Scalars["numeric"]>;
	hash?: Maybe<Scalars["bpchar"]>;
	id?: Maybe<Scalars["bpchar"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	pos?: Maybe<Scalars["Int"]>;
	tip?: Maybe<Scalars["numeric"]>;
	version?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "extrinsic" */
export type Extrinsic_Min_Order_By = {
	block_id?: InputMaybe<Order_By>;
	call_id?: InputMaybe<Order_By>;
	fee?: InputMaybe<Order_By>;
	hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "extrinsic" */
export type Extrinsic_Mutation_Response = {
	__typename?: "extrinsic_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Extrinsic>;
};

/** input type for inserting object relation for remote table "extrinsic" */
export type Extrinsic_Obj_Rel_Insert_Input = {
	data: Extrinsic_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Extrinsic_On_Conflict>;
};

/** on_conflict condition type for table "extrinsic" */
export type Extrinsic_On_Conflict = {
	constraint: Extrinsic_Constraint;
	update_columns?: Array<Extrinsic_Update_Column>;
	where?: InputMaybe<Extrinsic_Bool_Exp>;
};

/** Ordering options when selecting data from "extrinsic". */
export type Extrinsic_Order_By = {
	block?: InputMaybe<Block_Order_By>;
	block_id?: InputMaybe<Order_By>;
	call_id?: InputMaybe<Order_By>;
	calls_aggregate?: InputMaybe<Call_Aggregate_Order_By>;
	error?: InputMaybe<Order_By>;
	events_aggregate?: InputMaybe<Event_Aggregate_Order_By>;
	fee?: InputMaybe<Order_By>;
	hash?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	signature?: InputMaybe<Order_By>;
	success?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: extrinsic */
export type Extrinsic_Pk_Columns_Input = {
	id: Scalars["bpchar"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Extrinsic_Prepend_Input = {
	error?: InputMaybe<Scalars["jsonb"]>;
	signature?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "extrinsic" */
export enum Extrinsic_Select_Column {
	/** column name */
	BlockId = "block_id",
	/** column name */
	CallId = "call_id",
	/** column name */
	Error = "error",
	/** column name */
	Fee = "fee",
	/** column name */
	Hash = "hash",
	/** column name */
	Id = "id",
	/** column name */
	IndexInBlock = "index_in_block",
	/** column name */
	Pos = "pos",
	/** column name */
	Signature = "signature",
	/** column name */
	Success = "success",
	/** column name */
	Tip = "tip",
	/** column name */
	Version = "version",
}

/** input type for updating data in table "extrinsic" */
export type Extrinsic_Set_Input = {
	block_id?: InputMaybe<Scalars["bpchar"]>;
	call_id?: InputMaybe<Scalars["String"]>;
	error?: InputMaybe<Scalars["jsonb"]>;
	fee?: InputMaybe<Scalars["numeric"]>;
	hash?: InputMaybe<Scalars["bpchar"]>;
	id?: InputMaybe<Scalars["bpchar"]>;
	index_in_block?: InputMaybe<Scalars["Int"]>;
	pos?: InputMaybe<Scalars["Int"]>;
	signature?: InputMaybe<Scalars["jsonb"]>;
	success?: InputMaybe<Scalars["Boolean"]>;
	tip?: InputMaybe<Scalars["numeric"]>;
	version?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Extrinsic_Stddev_Fields = {
	__typename?: "extrinsic_stddev_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "extrinsic" */
export type Extrinsic_Stddev_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Extrinsic_Stddev_Pop_Fields = {
	__typename?: "extrinsic_stddev_pop_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "extrinsic" */
export type Extrinsic_Stddev_Pop_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Extrinsic_Stddev_Samp_Fields = {
	__typename?: "extrinsic_stddev_samp_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "extrinsic" */
export type Extrinsic_Stddev_Samp_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Extrinsic_Sum_Fields = {
	__typename?: "extrinsic_sum_fields";
	fee?: Maybe<Scalars["numeric"]>;
	index_in_block?: Maybe<Scalars["Int"]>;
	pos?: Maybe<Scalars["Int"]>;
	tip?: Maybe<Scalars["numeric"]>;
	version?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "extrinsic" */
export type Extrinsic_Sum_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** update columns of table "extrinsic" */
export enum Extrinsic_Update_Column {
	/** column name */
	BlockId = "block_id",
	/** column name */
	CallId = "call_id",
	/** column name */
	Error = "error",
	/** column name */
	Fee = "fee",
	/** column name */
	Hash = "hash",
	/** column name */
	Id = "id",
	/** column name */
	IndexInBlock = "index_in_block",
	/** column name */
	Pos = "pos",
	/** column name */
	Signature = "signature",
	/** column name */
	Success = "success",
	/** column name */
	Tip = "tip",
	/** column name */
	Version = "version",
}

export type Extrinsic_Updates = {
	/** append existing jsonb value of filtered columns with new jsonb value */
	_append?: InputMaybe<Extrinsic_Append_Input>;
	/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
	_delete_at_path?: InputMaybe<Extrinsic_Delete_At_Path_Input>;
	/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
	_delete_elem?: InputMaybe<Extrinsic_Delete_Elem_Input>;
	/** delete key/value pair or string element. key/value pairs are matched based on their key value */
	_delete_key?: InputMaybe<Extrinsic_Delete_Key_Input>;
	/** increments the numeric columns with given value of the filtered values */
	_inc?: InputMaybe<Extrinsic_Inc_Input>;
	/** prepend existing jsonb value of filtered columns with new jsonb value */
	_prepend?: InputMaybe<Extrinsic_Prepend_Input>;
	/** sets the columns of the filtered rows to the given values */
	_set?: InputMaybe<Extrinsic_Set_Input>;
	where: Extrinsic_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Extrinsic_Var_Pop_Fields = {
	__typename?: "extrinsic_var_pop_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "extrinsic" */
export type Extrinsic_Var_Pop_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Extrinsic_Var_Samp_Fields = {
	__typename?: "extrinsic_var_samp_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "extrinsic" */
export type Extrinsic_Var_Samp_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Extrinsic_Variance_Fields = {
	__typename?: "extrinsic_variance_fields";
	fee?: Maybe<Scalars["Float"]>;
	index_in_block?: Maybe<Scalars["Float"]>;
	pos?: Maybe<Scalars["Float"]>;
	tip?: Maybe<Scalars["Float"]>;
	version?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "extrinsic" */
export type Extrinsic_Variance_Order_By = {
	fee?: InputMaybe<Order_By>;
	index_in_block?: InputMaybe<Order_By>;
	pos?: InputMaybe<Order_By>;
	tip?: InputMaybe<Order_By>;
	version?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
	String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
	_cast?: InputMaybe<Jsonb_Cast_Exp>;
	/** is the column contained in the given json value */
	_contained_in?: InputMaybe<Scalars["jsonb"]>;
	/** does the column contain the given json value at the top level */
	_contains?: InputMaybe<Scalars["jsonb"]>;
	_eq?: InputMaybe<Scalars["jsonb"]>;
	_gt?: InputMaybe<Scalars["jsonb"]>;
	_gte?: InputMaybe<Scalars["jsonb"]>;
	/** does the string exist as a top-level key in the column */
	_has_key?: InputMaybe<Scalars["String"]>;
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?: InputMaybe<Array<Scalars["String"]>>;
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?: InputMaybe<Array<Scalars["String"]>>;
	_in?: InputMaybe<Array<Scalars["jsonb"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["jsonb"]>;
	_lte?: InputMaybe<Scalars["jsonb"]>;
	_neq?: InputMaybe<Scalars["jsonb"]>;
	_nin?: InputMaybe<Array<Scalars["jsonb"]>>;
};

/** mutation root */
export type Mutation_Root = {
	__typename?: "mutation_root";
	/** delete data from the table: "block" */
	delete_block?: Maybe<Block_Mutation_Response>;
	/** delete single row from the table: "block" */
	delete_block_by_pk?: Maybe<Block>;
	/** delete data from the table: "call" */
	delete_call?: Maybe<Call_Mutation_Response>;
	/** delete single row from the table: "call" */
	delete_call_by_pk?: Maybe<Call>;
	/** delete data from the table: "event" */
	delete_event?: Maybe<Event_Mutation_Response>;
	/** delete single row from the table: "event" */
	delete_event_by_pk?: Maybe<Event>;
	/** delete data from the table: "extrinsic" */
	delete_extrinsic?: Maybe<Extrinsic_Mutation_Response>;
	/** delete single row from the table: "extrinsic" */
	delete_extrinsic_by_pk?: Maybe<Extrinsic>;
	/** insert data into the table: "block" */
	insert_block?: Maybe<Block_Mutation_Response>;
	/** insert a single row into the table: "block" */
	insert_block_one?: Maybe<Block>;
	/** insert data into the table: "call" */
	insert_call?: Maybe<Call_Mutation_Response>;
	/** insert a single row into the table: "call" */
	insert_call_one?: Maybe<Call>;
	/** insert data into the table: "event" */
	insert_event?: Maybe<Event_Mutation_Response>;
	/** insert a single row into the table: "event" */
	insert_event_one?: Maybe<Event>;
	/** insert data into the table: "extrinsic" */
	insert_extrinsic?: Maybe<Extrinsic_Mutation_Response>;
	/** insert a single row into the table: "extrinsic" */
	insert_extrinsic_one?: Maybe<Extrinsic>;
	/** update data of the table: "block" */
	update_block?: Maybe<Block_Mutation_Response>;
	/** update single row of the table: "block" */
	update_block_by_pk?: Maybe<Block>;
	/** update multiples rows of table: "block" */
	update_block_many?: Maybe<Array<Maybe<Block_Mutation_Response>>>;
	/** update data of the table: "call" */
	update_call?: Maybe<Call_Mutation_Response>;
	/** update single row of the table: "call" */
	update_call_by_pk?: Maybe<Call>;
	/** update multiples rows of table: "call" */
	update_call_many?: Maybe<Array<Maybe<Call_Mutation_Response>>>;
	/** update data of the table: "event" */
	update_event?: Maybe<Event_Mutation_Response>;
	/** update single row of the table: "event" */
	update_event_by_pk?: Maybe<Event>;
	/** update multiples rows of table: "event" */
	update_event_many?: Maybe<Array<Maybe<Event_Mutation_Response>>>;
	/** update data of the table: "extrinsic" */
	update_extrinsic?: Maybe<Extrinsic_Mutation_Response>;
	/** update single row of the table: "extrinsic" */
	update_extrinsic_by_pk?: Maybe<Extrinsic>;
	/** update multiples rows of table: "extrinsic" */
	update_extrinsic_many?: Maybe<Array<Maybe<Extrinsic_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_BlockArgs = {
	where: Block_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Block_By_PkArgs = {
	id: Scalars["bpchar"];
};

/** mutation root */
export type Mutation_RootDelete_CallArgs = {
	where: Call_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Call_By_PkArgs = {
	id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_EventArgs = {
	where: Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Event_By_PkArgs = {
	id: Scalars["bpchar"];
};

/** mutation root */
export type Mutation_RootDelete_ExtrinsicArgs = {
	where: Extrinsic_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Extrinsic_By_PkArgs = {
	id: Scalars["bpchar"];
};

/** mutation root */
export type Mutation_RootInsert_BlockArgs = {
	objects: Array<Block_Insert_Input>;
	on_conflict?: InputMaybe<Block_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Block_OneArgs = {
	object: Block_Insert_Input;
	on_conflict?: InputMaybe<Block_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CallArgs = {
	objects: Array<Call_Insert_Input>;
	on_conflict?: InputMaybe<Call_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Call_OneArgs = {
	object: Call_Insert_Input;
	on_conflict?: InputMaybe<Call_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_EventArgs = {
	objects: Array<Event_Insert_Input>;
	on_conflict?: InputMaybe<Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Event_OneArgs = {
	object: Event_Insert_Input;
	on_conflict?: InputMaybe<Event_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ExtrinsicArgs = {
	objects: Array<Extrinsic_Insert_Input>;
	on_conflict?: InputMaybe<Extrinsic_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Extrinsic_OneArgs = {
	object: Extrinsic_Insert_Input;
	on_conflict?: InputMaybe<Extrinsic_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_BlockArgs = {
	_inc?: InputMaybe<Block_Inc_Input>;
	_set?: InputMaybe<Block_Set_Input>;
	where: Block_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Block_By_PkArgs = {
	_inc?: InputMaybe<Block_Inc_Input>;
	_set?: InputMaybe<Block_Set_Input>;
	pk_columns: Block_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Block_ManyArgs = {
	updates: Array<Block_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_CallArgs = {
	_append?: InputMaybe<Call_Append_Input>;
	_delete_at_path?: InputMaybe<Call_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Call_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Call_Delete_Key_Input>;
	_inc?: InputMaybe<Call_Inc_Input>;
	_prepend?: InputMaybe<Call_Prepend_Input>;
	_set?: InputMaybe<Call_Set_Input>;
	where: Call_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Call_By_PkArgs = {
	_append?: InputMaybe<Call_Append_Input>;
	_delete_at_path?: InputMaybe<Call_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Call_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Call_Delete_Key_Input>;
	_inc?: InputMaybe<Call_Inc_Input>;
	_prepend?: InputMaybe<Call_Prepend_Input>;
	_set?: InputMaybe<Call_Set_Input>;
	pk_columns: Call_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Call_ManyArgs = {
	updates: Array<Call_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_EventArgs = {
	_append?: InputMaybe<Event_Append_Input>;
	_delete_at_path?: InputMaybe<Event_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Event_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Event_Delete_Key_Input>;
	_inc?: InputMaybe<Event_Inc_Input>;
	_prepend?: InputMaybe<Event_Prepend_Input>;
	_set?: InputMaybe<Event_Set_Input>;
	where: Event_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Event_By_PkArgs = {
	_append?: InputMaybe<Event_Append_Input>;
	_delete_at_path?: InputMaybe<Event_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Event_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Event_Delete_Key_Input>;
	_inc?: InputMaybe<Event_Inc_Input>;
	_prepend?: InputMaybe<Event_Prepend_Input>;
	_set?: InputMaybe<Event_Set_Input>;
	pk_columns: Event_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Event_ManyArgs = {
	updates: Array<Event_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ExtrinsicArgs = {
	_append?: InputMaybe<Extrinsic_Append_Input>;
	_delete_at_path?: InputMaybe<Extrinsic_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Extrinsic_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Extrinsic_Delete_Key_Input>;
	_inc?: InputMaybe<Extrinsic_Inc_Input>;
	_prepend?: InputMaybe<Extrinsic_Prepend_Input>;
	_set?: InputMaybe<Extrinsic_Set_Input>;
	where: Extrinsic_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Extrinsic_By_PkArgs = {
	_append?: InputMaybe<Extrinsic_Append_Input>;
	_delete_at_path?: InputMaybe<Extrinsic_Delete_At_Path_Input>;
	_delete_elem?: InputMaybe<Extrinsic_Delete_Elem_Input>;
	_delete_key?: InputMaybe<Extrinsic_Delete_Key_Input>;
	_inc?: InputMaybe<Extrinsic_Inc_Input>;
	_prepend?: InputMaybe<Extrinsic_Prepend_Input>;
	_set?: InputMaybe<Extrinsic_Set_Input>;
	pk_columns: Extrinsic_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Extrinsic_ManyArgs = {
	updates: Array<Extrinsic_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["numeric"]>;
	_gt?: InputMaybe<Scalars["numeric"]>;
	_gte?: InputMaybe<Scalars["numeric"]>;
	_in?: InputMaybe<Array<Scalars["numeric"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["numeric"]>;
	_lte?: InputMaybe<Scalars["numeric"]>;
	_neq?: InputMaybe<Scalars["numeric"]>;
	_nin?: InputMaybe<Array<Scalars["numeric"]>>;
};

/** column ordering options */
export enum Order_By {
	/** in ascending order, nulls last */
	Asc = "asc",
	/** in ascending order, nulls first */
	AscNullsFirst = "asc_nulls_first",
	/** in ascending order, nulls last */
	AscNullsLast = "asc_nulls_last",
	/** in descending order, nulls first */
	Desc = "desc",
	/** in descending order, nulls first */
	DescNullsFirst = "desc_nulls_first",
	/** in descending order, nulls last */
	DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
	__typename?: "query_root";
	/** fetch data from the table: "block" */
	block: Array<Block>;
	/** fetch aggregated fields from the table: "block" */
	block_aggregate: Block_Aggregate;
	/** fetch data from the table: "block" using primary key columns */
	block_by_pk?: Maybe<Block>;
	/** fetch data from the table: "call" */
	call: Array<Call>;
	/** fetch aggregated fields from the table: "call" */
	call_aggregate: Call_Aggregate;
	/** fetch data from the table: "call" using primary key columns */
	call_by_pk?: Maybe<Call>;
	/** fetch data from the table: "event" */
	event: Array<Event>;
	/** fetch aggregated fields from the table: "event" */
	event_aggregate: Event_Aggregate;
	/** fetch data from the table: "event" using primary key columns */
	event_by_pk?: Maybe<Event>;
	/** fetch data from the table: "extrinsic" */
	extrinsic: Array<Extrinsic>;
	/** fetch aggregated fields from the table: "extrinsic" */
	extrinsic_aggregate: Extrinsic_Aggregate;
	/** fetch data from the table: "extrinsic" using primary key columns */
	extrinsic_by_pk?: Maybe<Extrinsic>;
};

export type Query_RootBlockArgs = {
	distinct_on?: InputMaybe<Array<Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Block_Order_By>>;
	where?: InputMaybe<Block_Bool_Exp>;
};

export type Query_RootBlock_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Block_Order_By>>;
	where?: InputMaybe<Block_Bool_Exp>;
};

export type Query_RootBlock_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Query_RootCallArgs = {
	distinct_on?: InputMaybe<Array<Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Call_Order_By>>;
	where?: InputMaybe<Call_Bool_Exp>;
};

export type Query_RootCall_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Call_Order_By>>;
	where?: InputMaybe<Call_Bool_Exp>;
};

export type Query_RootCall_By_PkArgs = {
	id: Scalars["String"];
};

export type Query_RootEventArgs = {
	distinct_on?: InputMaybe<Array<Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Event_Order_By>>;
	where?: InputMaybe<Event_Bool_Exp>;
};

export type Query_RootEvent_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Event_Order_By>>;
	where?: InputMaybe<Event_Bool_Exp>;
};

export type Query_RootEvent_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Query_RootExtrinsicArgs = {
	distinct_on?: InputMaybe<Array<Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Extrinsic_Order_By>>;
	where?: InputMaybe<Extrinsic_Bool_Exp>;
};

export type Query_RootExtrinsic_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Extrinsic_Order_By>>;
	where?: InputMaybe<Extrinsic_Bool_Exp>;
};

export type Query_RootExtrinsic_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Subscription_Root = {
	__typename?: "subscription_root";
	/** fetch data from the table: "block" */
	block: Array<Block>;
	/** fetch aggregated fields from the table: "block" */
	block_aggregate: Block_Aggregate;
	/** fetch data from the table: "block" using primary key columns */
	block_by_pk?: Maybe<Block>;
	/** fetch data from the table: "call" */
	call: Array<Call>;
	/** fetch aggregated fields from the table: "call" */
	call_aggregate: Call_Aggregate;
	/** fetch data from the table: "call" using primary key columns */
	call_by_pk?: Maybe<Call>;
	/** fetch data from the table: "event" */
	event: Array<Event>;
	/** fetch aggregated fields from the table: "event" */
	event_aggregate: Event_Aggregate;
	/** fetch data from the table: "event" using primary key columns */
	event_by_pk?: Maybe<Event>;
	/** fetch data from the table: "extrinsic" */
	extrinsic: Array<Extrinsic>;
	/** fetch aggregated fields from the table: "extrinsic" */
	extrinsic_aggregate: Extrinsic_Aggregate;
	/** fetch data from the table: "extrinsic" using primary key columns */
	extrinsic_by_pk?: Maybe<Extrinsic>;
};

export type Subscription_RootBlockArgs = {
	distinct_on?: InputMaybe<Array<Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Block_Order_By>>;
	where?: InputMaybe<Block_Bool_Exp>;
};

export type Subscription_RootBlock_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Block_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Block_Order_By>>;
	where?: InputMaybe<Block_Bool_Exp>;
};

export type Subscription_RootBlock_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Subscription_RootCallArgs = {
	distinct_on?: InputMaybe<Array<Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Call_Order_By>>;
	where?: InputMaybe<Call_Bool_Exp>;
};

export type Subscription_RootCall_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Call_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Call_Order_By>>;
	where?: InputMaybe<Call_Bool_Exp>;
};

export type Subscription_RootCall_By_PkArgs = {
	id: Scalars["String"];
};

export type Subscription_RootEventArgs = {
	distinct_on?: InputMaybe<Array<Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Event_Order_By>>;
	where?: InputMaybe<Event_Bool_Exp>;
};

export type Subscription_RootEvent_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Event_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Event_Order_By>>;
	where?: InputMaybe<Event_Bool_Exp>;
};

export type Subscription_RootEvent_By_PkArgs = {
	id: Scalars["bpchar"];
};

export type Subscription_RootExtrinsicArgs = {
	distinct_on?: InputMaybe<Array<Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Extrinsic_Order_By>>;
	where?: InputMaybe<Extrinsic_Bool_Exp>;
};

export type Subscription_RootExtrinsic_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Extrinsic_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Extrinsic_Order_By>>;
	where?: InputMaybe<Extrinsic_Bool_Exp>;
};

export type Subscription_RootExtrinsic_By_PkArgs = {
	id: Scalars["bpchar"];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["timestamptz"]>;
	_gt?: InputMaybe<Scalars["timestamptz"]>;
	_gte?: InputMaybe<Scalars["timestamptz"]>;
	_in?: InputMaybe<Array<Scalars["timestamptz"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["timestamptz"]>;
	_lte?: InputMaybe<Scalars["timestamptz"]>;
	_neq?: InputMaybe<Scalars["timestamptz"]>;
	_nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

export type GetBlockByHeightQueryVariables = Exact<{
	height: Scalars["Int"];
}>;

export type GetBlockByHeightQuery = {
	__typename?: "query_root";
	block: Array<{
		__typename?: "block";
		hash: any;
		extrinsics: Array<{
			__typename?: "extrinsic";
			id: any;
			hash: any;
			calls: Array<{
				__typename?: "call";
				id: string;
				name: string;
				args?: any | null;
			}>;
		}>;
	}>;
};

export type GetBlocksQueryVariables = Exact<{ [key: string]: never }>;

export type GetBlocksQuery = {
	__typename?: "query_root";
	block: Array<{
		__typename?: "block";
		id: any;
		hash: any;
		height: number;
		parent_hash: any;
		extrinsics_aggregate: {
			__typename?: "extrinsic_aggregate";
			aggregate?: {
				__typename?: "extrinsic_aggregate_fields";
				count: number;
			} | null;
		};
	}>;
};

export type GetExtrinsicByIdQueryVariables = Exact<{
	id: Scalars["bpchar"];
}>;

export type GetExtrinsicByIdQuery = {
	__typename?: "query_root";
	extrinsic_by_pk?: {
		__typename?: "extrinsic";
		id: any;
		hash: any;
		calls: Array<{
			__typename?: "call";
			id: string;
			name: string;
			args?: any | null;
		}>;
		events: Array<{ __typename?: "event"; id: any; name: string }>;
	} | null;
};

export type GetExtrinsicsQueryVariables = Exact<{ [key: string]: never }>;

export type GetExtrinsicsQuery = {
	__typename?: "query_root";
	extrinsic: Array<{
		__typename?: "extrinsic";
		id: any;
		hash: any;
		events_aggregate: {
			__typename?: "event_aggregate";
			aggregate?: {
				__typename?: "event_aggregate_fields";
				count: number;
			} | null;
		};
	}>;
};

export const GetBlockByHeightDocument = `
    query GetBlockByHeight($height: Int!) {
  block(order_by: {timestamp: desc}, where: {height: {_eq: $height}}) {
    hash
    extrinsics {
      id
      hash
      calls {
        id
        name
        args
      }
    }
  }
}
    `;
export const useGetBlockByHeightQuery = <
	TData = GetBlockByHeightQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetBlockByHeightQueryVariables,
	options?: UseQueryOptions<GetBlockByHeightQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetBlockByHeightQuery, TError, TData>(
		["GetBlockByHeight", variables],
		fetcher<GetBlockByHeightQuery, GetBlockByHeightQueryVariables>(
			client,
			GetBlockByHeightDocument,
			variables,
			headers
		),
		options
	);
export const GetBlocksDocument = `
    query GetBlocks {
  block(limit: 20, order_by: {id: desc}) {
    id
    hash
    height
    parent_hash
    extrinsics_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetBlocksQuery = <TData = GetBlocksQuery, TError = unknown>(
	client: GraphQLClient,
	variables?: GetBlocksQueryVariables,
	options?: UseQueryOptions<GetBlocksQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetBlocksQuery, TError, TData>(
		variables === undefined ? ["GetBlocks"] : ["GetBlocks", variables],
		fetcher<GetBlocksQuery, GetBlocksQueryVariables>(
			client,
			GetBlocksDocument,
			variables,
			headers
		),
		options
	);
export const GetExtrinsicByIdDocument = `
    query GetExtrinsicById($id: bpchar!) {
  extrinsic_by_pk(id: $id) {
    id
    hash
    calls {
      id
      name
      args
    }
    events {
      id
      name
    }
  }
}
    `;
export const useGetExtrinsicByIdQuery = <
	TData = GetExtrinsicByIdQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables: GetExtrinsicByIdQueryVariables,
	options?: UseQueryOptions<GetExtrinsicByIdQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetExtrinsicByIdQuery, TError, TData>(
		["GetExtrinsicById", variables],
		fetcher<GetExtrinsicByIdQuery, GetExtrinsicByIdQueryVariables>(
			client,
			GetExtrinsicByIdDocument,
			variables,
			headers
		),
		options
	);
export const GetExtrinsicsDocument = `
    query GetExtrinsics {
  extrinsic(limit: 20, order_by: {id: desc}) {
    id
    hash
    events_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetExtrinsicsQuery = <
	TData = GetExtrinsicsQuery,
	TError = unknown
>(
	client: GraphQLClient,
	variables?: GetExtrinsicsQueryVariables,
	options?: UseQueryOptions<GetExtrinsicsQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetExtrinsicsQuery, TError, TData>(
		variables === undefined ? ["GetExtrinsics"] : ["GetExtrinsics", variables],
		fetcher<GetExtrinsicsQuery, GetExtrinsicsQueryVariables>(
			client,
			GetExtrinsicsDocument,
			variables,
			headers
		),
		options
	);
