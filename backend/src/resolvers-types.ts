import { GraphQLResolveInfo } from 'graphql';
import { User as UserModel, Notebook as NotebookModel, Note as NoteModel } from '@prisma/client/index.d';
import { Context } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addNote?: Maybe<Note>;
  addNotebook?: Maybe<Notebook>;
  addUser?: Maybe<User>;
  removeNote?: Maybe<Scalars['Boolean']>;
  removeNotebook?: Maybe<Scalars['Boolean']>;
  updateNote?: Maybe<Note>;
  updateNotebook?: Maybe<Notebook>;
};


export type MutationAddNoteArgs = {
  content: Scalars['String'];
  notebookId: Scalars['String'];
  title: Scalars['String'];
};


export type MutationAddNotebookArgs = {
  authorId: Scalars['String'];
  title: Scalars['String'];
};


export type MutationAddUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
};


export type MutationRemoveNoteArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveNotebookArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateNoteArgs = {
  content: Scalars['String'];
  id: Scalars['ID'];
  notebookId: Scalars['String'];
  title: Scalars['String'];
};


export type MutationUpdateNotebookArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Note = Node & {
  __typename?: 'Note';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  notebook?: Maybe<Notebook>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Notebook = Node & {
  __typename?: 'Notebook';
  author?: Maybe<User>;
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  notes?: Maybe<Array<Maybe<Note>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  note?: Maybe<Note>;
  notebook?: Maybe<Notebook>;
  notebooks?: Maybe<Array<Maybe<Notebook>>>;
  notes?: Maybe<Array<Maybe<Note>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNoteArgs = {
  id: Scalars['ID'];
};


export type QueryNotebookArgs = {
  id: Scalars['ID'];
};


export type QueryNotebooksArgs = {
  authorId: Scalars['ID'];
};


export type QueryNotesArgs = {
  notebookId: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = Node & {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  notebooks?: Maybe<Array<Maybe<Notebook>>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Note'] | ResolversTypes['Notebook'] | ResolversTypes['User'];
  Note: ResolverTypeWrapper<NoteModel>;
  Notebook: ResolverTypeWrapper<NotebookModel>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<UserModel>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Mutation: {};
  Node: ResolversParentTypes['Note'] | ResolversParentTypes['Notebook'] | ResolversParentTypes['User'];
  Note: NoteModel;
  Notebook: NotebookModel;
  Query: {};
  String: Scalars['String'];
  User: UserModel;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addNote?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType, RequireFields<MutationAddNoteArgs, 'content' | 'notebookId' | 'title'>>;
  addNotebook?: Resolver<Maybe<ResolversTypes['Notebook']>, ParentType, ContextType, RequireFields<MutationAddNotebookArgs, 'authorId' | 'title'>>;
  addUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationAddUserArgs, 'email' | 'name'>>;
  removeNote?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveNoteArgs, 'id'>>;
  removeNotebook?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveNotebookArgs, 'id'>>;
  updateNote?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType, RequireFields<MutationUpdateNoteArgs, 'content' | 'id' | 'notebookId' | 'title'>>;
  updateNotebook?: Resolver<Maybe<ResolversTypes['Notebook']>, ParentType, ContextType, RequireFields<MutationUpdateNotebookArgs, 'id' | 'title'>>;
}>;

export type NodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Note' | 'Notebook' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type NoteResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  notebook?: Resolver<Maybe<ResolversTypes['Notebook']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NotebookResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Notebook'] = ResolversParentTypes['Notebook']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  note?: Resolver<Maybe<ResolversTypes['Note']>, ParentType, ContextType, RequireFields<QueryNoteArgs, 'id'>>;
  notebook?: Resolver<Maybe<ResolversTypes['Notebook']>, ParentType, ContextType, RequireFields<QueryNotebookArgs, 'id'>>;
  notebooks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Notebook']>>>, ParentType, ContextType, RequireFields<QueryNotebooksArgs, 'authorId'>>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType, RequireFields<QueryNotesArgs, 'notebookId'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notebooks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Notebook']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  Notebook?: NotebookResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

