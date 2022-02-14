import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  addNote: Maybe<Note>;
  addNotebook: Maybe<Notebook>;
  addUser: Maybe<User>;
  removeNote: Maybe<Scalars['Boolean']>;
  removeNotebook: Maybe<Scalars['Boolean']>;
  updateNote: Maybe<Note>;
  updateNotebook: Maybe<Notebook>;
};


export type MutationAddNoteArgs = {
  content: InputMaybe<Scalars['String']>;
  notebookId: Scalars['ID'];
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
  notebookId: Scalars['ID'];
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
  content: Scalars['String'];
  createdAt: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  notebook: Notebook;
  title: Scalars['String'];
  updatedAt: Maybe<Scalars['String']>;
};

export type Notebook = Node & {
  __typename?: 'Notebook';
  author: User;
  createdAt: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  notes: Maybe<Array<Note>>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  node: Maybe<Node>;
  note: Maybe<Note>;
  notebook: Maybe<Notebook>;
  notebooks: Maybe<Array<Maybe<Notebook>>>;
  notes: Maybe<Array<Maybe<Note>>>;
  user: Maybe<User>;
  users: Maybe<Array<Maybe<User>>>;
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
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  notebooks: Maybe<Array<Notebook>>;
};

export type AddNoteMutationVariables = Exact<{
  notebookId: Scalars['ID'];
  title: Scalars['String'];
}>;


export type AddNoteMutation = { __typename?: 'Mutation', addNote: { __typename?: 'Note', id: string, title: string, createdAt: string | null, updatedAt: string | null, content: string } | null };

export type GetNoteQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetNoteQuery = { __typename?: 'Query', note: { __typename?: 'Note', id: string, title: string, content: string, createdAt: string | null, updatedAt: string | null, notebook: { __typename?: 'Notebook', id: string } } | null };

export type GetNotebookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetNotebookQuery = { __typename?: 'Query', notebook: { __typename?: 'Notebook', id: string, title: string | null, createdAt: string | null, updatedAt: string | null, notes: Array<{ __typename?: 'Note', id: string, title: string, createdAt: string | null, updatedAt: string | null }> | null } | null };

export type GetNotebooksQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type GetNotebooksQuery = { __typename?: 'Query', user: { __typename?: 'User', notebooks: Array<{ __typename?: 'Notebook', id: string, title: string | null, createdAt: string | null, updatedAt: string | null }> | null } | null };

export type UpdateNoteMutationVariables = Exact<{
  id: Scalars['ID'];
  notebookId: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
}>;


export type UpdateNoteMutation = { __typename?: 'Mutation', updateNote: { __typename?: 'Note', id: string, title: string, createdAt: string | null, updatedAt: string | null, content: string } | null };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string | null, email: string | null } | null> | null };


export const AddNoteDocument = gql`
    mutation addNote($notebookId: ID!, $title: String!) {
  addNote(notebookId: $notebookId, title: $title) {
    id
    title
    createdAt
    updatedAt
    content
  }
}
    `;

export function useAddNoteMutation() {
  return Urql.useMutation<AddNoteMutation, AddNoteMutationVariables>(AddNoteDocument);
};
export const GetNoteDocument = gql`
    query getNote($id: ID!) {
  note(id: $id) {
    id
    title
    content
    createdAt
    updatedAt
    notebook {
      id
    }
  }
}
    `;

export function useGetNoteQuery(options: Omit<Urql.UseQueryArgs<GetNoteQueryVariables>, 'query'>) {
  return Urql.useQuery<GetNoteQuery>({ query: GetNoteDocument, ...options });
};
export const GetNotebookDocument = gql`
    query getNotebook($id: ID!) {
  notebook(id: $id) {
    id
    title
    createdAt
    updatedAt
    notes {
      id
      title
      createdAt
      updatedAt
    }
  }
}
    `;

export function useGetNotebookQuery(options: Omit<Urql.UseQueryArgs<GetNotebookQueryVariables>, 'query'>) {
  return Urql.useQuery<GetNotebookQuery>({ query: GetNotebookDocument, ...options });
};
export const GetNotebooksDocument = gql`
    query getNotebooks($userId: ID!) {
  user(id: $userId) {
    notebooks {
      id
      title
      createdAt
      updatedAt
    }
  }
}
    `;

export function useGetNotebooksQuery(options: Omit<Urql.UseQueryArgs<GetNotebooksQueryVariables>, 'query'>) {
  return Urql.useQuery<GetNotebooksQuery>({ query: GetNotebooksDocument, ...options });
};
export const UpdateNoteDocument = gql`
    mutation updateNote($id: ID!, $notebookId: ID!, $title: String!, $content: String!) {
  updateNote(id: $id, notebookId: $notebookId, title: $title, content: $content) {
    id
    title
    createdAt
    updatedAt
    content
  }
}
    `;

export function useUpdateNoteMutation() {
  return Urql.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument);
};
export const AllUsersDocument = gql`
    query allUsers {
  users {
    id
    name
    email
  }
}
    `;

export function useAllUsersQuery(options?: Omit<Urql.UseQueryArgs<AllUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<AllUsersQuery>({ query: AllUsersDocument, ...options });
};